import {useRef, useEffect} from 'react'
import {Chart} from 'chart.js/auto'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
const data = {
    labels: ["Amazon Polly Queries","Google Translate Queries","IVONA Queries"],
    datasets: [{
        label: "TTS characters used",
        backgroundColor: ['rgba(255, 0, 0, 0.4)','rgba(0, 255, 0, 0.4)','rgba(0, 0, 255, 0.4)'],
        borderColor: ['rgb(0,0,0,0)','rgb(0,0,0,0)','rgb(0,0,0,0)']
        
    }] 
}

const options = {
    responsive:true,
}
function  UsageCard({IVONAchars,translatechars,pollychars}){
	const chartRef = useRef(null) 
	useEffect(() => {
		if(!chartRef.current) return
		if(!(chartRef.current instanceof Chart)) {
			data.datasets[0].data = [pollychars,translatechars,IVONAchars]
			chartRef.current = new Chart(chartRef.current, {
                type: 'pie',
			  options: options,
			  data: data
			})
		}
        const chart = chartRef.current  
        data.datasets[0].data[0]=pollychars
        data.datasets[0].data[1]=translatechars
        data.datasets[0].data[2]=IVONAchars
        chart.update()
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