import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React, { useRef, useEffect, useState } from 'react'
import {Chart,ChartData,ChartOptions,LinearScaleOptions} from 'chart.js/auto'
const options:ChartOptions = {
	responsive:true,
	animation: {
		duration:200,
		easing:'linear'
	},
	scales: {
		y: {
			ticks: {
				stepSize: 20
			},
			suggestedMin: 0,
			suggestedMax: 100
			
		}
	   },

	elements:{
		line:{
			fill:true,
			tension:0
		}
	}
}
const labels: number[] = []
const data:ChartData= {
	labels,
	datasets: [
	{
		label: 'Memory usage over the last 2 minutes',
		borderColor: '#0d6efd',
		backgroundColor: '#0d6efd',
		data: []
	}]
}
function  MemoryCard({memory}: {memory:number[]}){
	const isOpen = localStorage.getItem('MemoryCardOpen')==='false'?false:true
	const [open, setOpen] = useState(isOpen)
	const [chart, setChart] = useState<Chart | null>(null)
	const chartRef = useRef<HTMLCanvasElement | null>(null) 
	for(let i = 0;i<memory.length;i++){
		labels[memory.length-i-1]=i*5
	 }
	 data.labels = labels
	  useEffect(() => {
		if(memory.length===0) return
		if(!chart && chartRef.current) {
			/*max and min are used to set the y axis range, so that the graph doesn't look weird when the memory usage is low or high.
			This maintains a max value that is 20x the difference between the min and max values and a min value that is 10x the difference between the min and max values, allowing
			the line to sit in the upper 2/3 of the graph
			*/
			(options!.scales!.y as LinearScaleOptions).suggestedMin = Math.max(...memory)-(Math.max(...memory)-Math.min(...memory))*20;
			(options!.scales!.y as LinearScaleOptions).suggestedMax = Math.max(...memory)+(Math.max(...memory)-Math.min(...memory))*10
			data.datasets[0].data = memory
			setChart(new Chart(chartRef.current,{
			  type: 'line',
			  options: options,
			  data: data
			}))
			return
		  }
		data!.datasets[0]!.data!.push(memory[memory.length-1])
		data!.datasets[0]!.data!.shift()
		chart!.update()
	  }, [memory])

 return (
	<div className= "col-12 px-lg-1">
		<Card className="text-light bg-dark">
			<Card.Header className="text-center">
			<Button variant = "dark" onClick={()=>{setOpen(!open);open?localStorage.setItem('MemoryCardOpen','false'):localStorage.setItem('MemoryCardOpen','true')}} className="bg-dark text-white minimize-btn" aria-expanded={open} aria-controls="collapse"><div className ="rectangle"></div></Button>
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