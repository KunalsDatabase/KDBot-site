import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StatCard from './StatCard'
import {useRef,useEffect,useState} from 'react'
import {Chart,ChartData,ChartOptions,LinearScaleOptions} from 'chart.js/auto'
import {Stat} from '../types'

const usageData:ChartData = {
    labels: ["Amazon Polly Queries","Google Translate Queries","IVONA Queries"],
    datasets: [{
        data: [0,0,0],
        label: "TTS characters used",
        backgroundColor: ['rgba(255, 0, 0, 0.4)','rgba(0, 255, 0, 0.4)','rgba(0, 0, 255, 0.4)'],
        borderColor: ['rgb(0,0,0,0)','rgb(0,0,0,0)','rgb(0,0,0,0)']
    }] 
}

const usageOptions:ChartOptions = {
    responsive:true,
}

const memoryData:ChartData = {
    datasets: [{
        data: [],
        label: 'Memory usage over last 2 minutes',
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 255, 255)',
}]
}

const memoryOptions:ChartOptions = {
    scales: {
        y: {
            ticks: {
                stepSize: 100,
            }
        }
    },
    elements:{
        line:{
            fill:false,
            tension:0
        }
    }
}
type ShardModalProps = {
    shardindex: number,
    obj: Stat,
    memory: number[],
    show: boolean,
    title: string,
    onHide: () => void
}

function ShardModal({shardindex,obj: cluster,memory,title,...props}:ShardModalProps) {
    const usageCanvasRef = useRef<HTMLCanvasElement | null>(null)
    const usageChartRef = useRef<Chart | null>(null)
    const memoryCanvasRef = useRef<HTMLCanvasElement | null>(null) 
	const memoryChartRef = useRef<Chart | null>(null) 
    const x:number[] = []
    useEffect(() => {
        //we need to destroy the chart and the reference to it when the modal is closed (this component doesn't unmount when the modal closes)
        if (usageChartRef.current && memoryChartRef.current && props.show===false) {
            usageChartRef.current.destroy()
            usageChartRef.current = null
            memoryChartRef.current.destroy()
            memoryChartRef.current = null
            return
          }
		if(!memoryCanvasRef.current || !usageCanvasRef.current) return
        if(!memory) return
        for(var i = 0;i<memory.length;i++){
            x[memory.length-i-1]=i*5
        }
        memoryData.labels = x
		if (!(memoryChartRef.current)) {
			memoryData.datasets[0].data = memory;
            (memoryOptions!.scales!.y as LinearScaleOptions).suggestedMin = Math.max(...memory)-(Math.max(...memory)-Math.min(...memory))*20;
			(memoryOptions!.scales!.y as LinearScaleOptions).suggestedMax = Math.max(...memory)+(Math.max(...memory)-Math.min(...memory))*10
			memoryChartRef.current = new Chart(memoryCanvasRef.current, {
			  type: 'line',
			  options: memoryOptions,
			  data: memoryData
			})
		  }
          if (!(usageChartRef.current)) {
			usageData.datasets[0].data = [cluster.pollychars[shardindex],cluster.translatechars[shardindex],cluster.IVONAchars[shardindex]]
			usageChartRef.current = new Chart(usageCanvasRef.current, {
                type: 'pie',
			  options: usageOptions,
			  data: usageData
			})
		  }
        memoryData.datasets[0].data.push(memory[memory.length-1])
        memoryData.datasets[0].data.shift()
        usageData.datasets[0].data[0]=cluster.pollychars[shardindex]
        usageData.datasets[0].data[1]=cluster.translatechars[shardindex]
        usageData.datasets[0].data[2]=cluster.IVONAchars[shardindex]
		memoryChartRef.current!.update()
        usageChartRef.current!.update()
	  }, [props.show,memory])
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        restoreFocus={false}
        >
        <Modal.Header closeButton closeVariant="white" className="text-white bg-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            {title+" Shard "+cluster.shards[shardindex]} Analytics
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className = "text-white">
            <Container>
                <Row>
                    <StatCard Heading = "Guilds" Value = {cluster.guilds[shardindex]}/>
                    <StatCard Heading = "Voice Clients" Value = {cluster.voice_clients[shardindex]}/>
                    <StatCard Heading = "Latency" Value = {cluster.latency[shardindex]?cluster.latency[shardindex]+"ms":"N/A"}/>
                    <StatCard Heading = "# of DB Entries" Value = {cluster.db_num[shardindex]}/>
                </Row>
                <Row>
                    <StatCard Heading = "Websocket Status" Value = {cluster.wsstatus[shardindex]===0?"Connected":"Not connected"}/>
                    <StatCard Heading = "Uptime" Value = {Math.floor(cluster.uptime[shardindex]/1000/60/60)+"h, "+Math.floor(((cluster.uptime[shardindex]/1000)%3600)/60)+"m, "+Math.floor((cluster.uptime[shardindex]/1000)%60)+"s"}/>
                    <StatCard Heading = "Memory Usage" Value = {Math.round(cluster.memory_usage[shardindex]/1024/1024)+"MB"}/>
                    <StatCard Heading = "Characters Used" Value = {cluster.pollychars[shardindex]+cluster.translatechars[shardindex]+cluster.IVONAchars[shardindex]}/>
                </Row>
                <Row>
                    <Col xxl={8}>
                        <canvas id="shardMemoryChart" className = "mt-3" ref={memoryCanvasRef}></canvas>
                    </Col>
                    <Col xxl={4}>
                        <canvas id="shardUsageChart" className = "mt-3" ref={usageCanvasRef}></canvas>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer className="text-white bg-dark">
          <Button onClick={props.onHide} variant = "dark">Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
export default ShardModal