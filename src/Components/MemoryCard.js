import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
  }
from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Legend
  )
const options = {
	scales: {
		y: {
			ticks: {
				stepSize: 20,
				
			}
		}
	   },
	elements:{
		line:{
			fill:true,
			tension:0
		}
	}
  }
function  MemoryCard(props){
	const labels = []
    for(let i = 0;i<props.Memory.length;i++){
        labels[props.Memory.length-i-1]=i*5
	}
	const data = {
		labels,
		datasets: [
		  {
			label: 'Memory usage over last 2 minutes',
			data: props.Memory,
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)'
		  }
		]
	  }

	const [open, setOpen] = useState(true)
 return (
	<div className= "col-12 px-lg-1">
		<Card className="text-light bg-dark">
			<Card.Header className="text-center">
			<Button variant = "dark" onClick={()=>setOpen(!open)} className="bg-dark text-white minimize-btn" aria-expanded={open} aria-controls="collapse"><div className ="rectangle"></div></Button>
				Live memory usage
			</Card.Header>
			<Collapse in={open}>
				<Card.Body>
					<Line options={options} data={data} />
				</Card.Body>
			</Collapse>
		</Card>
	</div>
)}
export default MemoryCard