import { useState } from 'react'
import Cluster from './Cluster'
import Card from 'react-bootstrap/Card'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
function  ClusterCard(){
	const [open, setOpen] = useState(true)
 return (
	<Card className="text-light bg-dark ">
		<Card.Header className="text-center">
			<Button variant = "dark" onClick={()=>setOpen(!open)} className="bg-dark text-white minimize-btn" aria-expanded={open} aria-controls="collapse"><div className ="rectangle"></div></Button>
			Clusters
		</Card.Header>
		<Collapse in={open}>
			<Card.Body>
				<p>Per-shard status of clusters. Hover over each shard for a preview of the shards' status. Click on a shard for more information.</p>
				Heatmap type:&nbsp;&nbsp;&nbsp;&nbsp;
					<ToggleButtonGroup type = "radio" name="heatmap" defaultValue={1}>
						<ToggleButton variant = "dark" id="online" value={1}>Online  </ToggleButton>
						<ToggleButton variant = "dark" id="voice_clients" value={2}>Voice Clients</ToggleButton>
						<ToggleButton variant = "dark" id="latency" value={3}>Latency</ToggleButton>
						<ToggleButton variant = "dark" id="memory" value={4}>Memory usage</ToggleButton>
					</ToggleButtonGroup>
			</Card.Body>
		</Collapse>
	</Card>
    
)}
export default ClusterCard