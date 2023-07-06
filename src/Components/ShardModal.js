import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StatCard from './StatCard'
import {useRef,useEffect} from 'react'
import {Chart} from 'chart.js/auto'

const usageData = {
    labels: ["Amazon Polly Queries","Google Translate Queries","IVONA Queries"],
    datasets: [{
        label: "TTS characters used",
        backgroundColor: ['rgba(255, 0, 0, 0.4)','rgba(0, 255, 0, 0.4)','rgba(0, 0, 255, 0.4)'],
        borderColor: ['rgb(0,0,0,0)','rgb(0,0,0,0)','rgb(0,0,0,0)']
        
    }] 
}

const usageOptions = {
    responsive:true,
}

const memoryData = {
    datasets: [{
        label: 'Memory usage over last 2 minutes',
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 255, 255)',
}]
}

const memoryOptions = {
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

function ShardModal(props) {
    const memoryChartRef = useRef(null)
    const usageChartRef = useRef(null)
    const index = props.shardindex
    const cluster = props.obj
    const memory = props.memory
    const x = []
    useEffect(() => {
		if(!memoryChartRef.current || !usageChartRef.current) return
        if(!memory) return
        for(var i = 0;i<memory.length;i++){
            x[memory.length-i-1]=i*5
        }
        memoryData.labels = x
		if (!(memoryChartRef.current instanceof Chart)) {
			memoryData.datasets[0].data = memory
			memoryChartRef.current = new Chart(memoryChartRef.current, {
			  type: 'line',
			  options: memoryOptions,
			  data: memoryData
			})
		  }
          if (!(usageChartRef.current instanceof Chart)) {
			usageData.datasets[0].data = [cluster.pollychars[index],cluster.translatechars[index],cluster.IVONAchars[index]]
			usageChartRef.current = new Chart(usageChartRef.current, {
                type: 'pie',
			  options: usageOptions,
			  data: usageData
			})
		  }
        const memoryChart = memoryChartRef.current
        const usageChart = usageChartRef.current  
        memoryData.datasets[0].data.push(memory[memory.length-1])
        memoryData.datasets[0].data.shift(memory[0])
		memoryChart.update()
        usageChart.update()

	  }, [index,props.memory])
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        restoreFocus={false}
      >
        <Modal.Header closeButton closeVariant="white" className="text-white bg-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title+" Shard "+cluster.shards[index]} Analytics
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className = "text-white">
            <Container>
                <Row>
                    <StatCard Heading = "Guilds" Value = {cluster.guilds[index]}/>
                    <StatCard Heading = "Voice Clients" Value = {cluster.voice_clients[index]}/>
                    <StatCard Heading = "Latency" Value = {cluster.latency[index]+"ms"||"N/A"}/>
                    <StatCard Heading = "# of DB Entries" Value = {cluster.db_num[index]}/>
                </Row>
                <Row>
                    <StatCard Heading = "Websocket Status" Value = {cluster.wsstatus[index]===0?"Connected":"Not connected"}/>
                    <StatCard Heading = "Uptime" Value = {Math.floor(cluster.uptime[index]/1000/60/60)+"h, "+Math.floor(((cluster.uptime[index]/1000)%3600)/60)+"m, "+Math.floor((cluster.uptime[index]/1000)%60)+"s"}/>
                    <StatCard Heading = "Memory Usage" Value = {Math.round(cluster.memory_usage[index]/1024/1024)+"MB"}/>
                    <StatCard Heading = "Characters Used" Value = {cluster.pollychars[index]+cluster.translatechars[index]+cluster.IVONAchars[index]}/>
                </Row>
                <Row>
                    <Col>
                        <canvas id="shardMemoryChart" ref={memoryChartRef}></canvas>
                    </Col>
                    <Col>
                        <canvas id="shardUsageChart" ref={usageChartRef}></canvas>
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