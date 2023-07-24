import {useRef, useEffect,useState} from 'react'
import {Chart,ChartData,ChartOptions} from 'chart.js/auto'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
const data:ChartData = {
    labels: ["Amazon Polly Queries","Google Translate Queries","IVONA Queries"],
    datasets: [{
		data: [0,0,0],
        label: "TTS characters used",
        backgroundColor: ['rgba(255, 0, 0, 0.4)','rgba(0, 255, 0, 0.4)','rgba(0, 0, 255, 0.4)'],
        borderColor: ['rgb(0,0,0,0)','rgb(0,0,0,0)','rgb(0,0,0,0)']
        
    }] 
}

const options:ChartOptions = {
    responsive:true,
}
type UsageCardProps = {
	IVONAchars: number,
	translatechars: number,
	pollychars: number
}

function  UsageCard({IVONAchars,translatechars,pollychars}:UsageCardProps){
	const chartRef = useRef<HTMLCanvasElement | null>(null) 
	const [chart, setChart] = useState<Chart | null>(null)
	useEffect(() => {
		if(!chartRef.current) return
		if(!(chart)) {
			data.datasets[0].data = [pollychars,translatechars,IVONAchars]
			setChart(new Chart(chartRef.current, {
                type: 'pie',
			  options: options,
			  data: data
			}))
		}
        data.datasets[0].data[0]=pollychars
        data.datasets[0].data[1]=translatechars
        data.datasets[0].data[2]=IVONAchars
        chart!.update()
	},[IVONAchars,translatechars,pollychars])

	return (
		<Col className= "px-lg-1">
			<Card text="white" className="text-center bg-dark">
				<Card.Header>Usage by service</Card.Header>
				<Card.Body>
				<Card.Text className="usagecard">
					<canvas id="pieChart" ref={chartRef}></canvas>
				</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	)
}
export default UsageCard