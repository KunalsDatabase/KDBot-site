import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { useState } from 'react'

function  MemoryCard(){
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
					<canvas id="lineChart"></canvas>
				</Card.Body>
			</Collapse>
		</Card>
	</div>
)}
export default MemoryCard