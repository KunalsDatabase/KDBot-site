import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useRef, useEffect, useState } from 'react';
import {Chart} from 'chart.js/auto'

const options = {
	responsive:true,
	animation: {
		duration:200,
		easing:'linear'
	},
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
const labels = []

const data = {
	labels,
	datasets: [
	{
		label: 'Memory usage over the last 2 minutes',
		borderColor: '#0d6efd',
		backgroundColor: '#0d6efd'
	}
	]
}
function  MemoryCard(props){
	const chartRef = useRef(null) 
	for(let i = 0;i<props.Memory.length;i++){
		labels[props.Memory.length-i-1]=i*5
	 }
	 data.labels = labels
	  useEffect(() => {
		const chart = chartRef.current
		if(props.Memory.length===0) return
		if (!(chart instanceof Chart)) {
			/*max and min are used to set the y axis range, so that the graph doesn't look weird when the memory usage is low or high.
			This maintains a max value that is 20x the difference between the min and max values and a min value that is 10x the difference between the min and max values, allowing
			the line to sit in the upper 2/3 of the graph
			*/
			options.scales.y.suggestedMin = Math.max(...props.Memory)-(Math.max(...props.Memory)-Math.min(...props.Memory))*20
			options.scales.y.suggestedMax = Math.max(...props.Memory)+(Math.max(...props.Memory)-Math.min(...props.Memory))*10
			data.datasets[0].data = props.Memory
			chartRef.current = new Chart(chartRef.current, {
			  type: 'line',
			  options: options,
			  data: data
			})
			return
		  }
		data.datasets[0].data.push(props.Memory[props.Memory.length-1])
		data.datasets[0].data.shift(props.Memory[0])
		chart.update()
		
	  }, [props.Memory])

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
					<canvas ref={chartRef}/>
				</Card.Body>
			</Collapse>
		</Card>
	</div>
)}
export default MemoryCard