import Cluster from './Cluster'
import Card from 'react-bootstrap/Card'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
function  ClusterCard(){
 return (
	<Card className="text-light bg-dark ">
		<div className="card-header text-center">
			<button className="btn bg-dark text-white minimize-btn" data-toggle="collapse" data-target="#clusters" aria-expanded="true" aria-controls="collapse"><div class ="rectangle"></div></button>
			Clusters							
		</div>
		<Card.Body className="collapse show" id="clusters">
			<p>Per-shard status of clusters. Hover over each shard for a preview of the shards' status. Click on a shard for more information.</p>
			Heatmap type:&nbsp;&nbsp;&nbsp;&nbsp;
				<ToggleButtonGroup type = "radio" name="heatmap" defaultValue={1} className="" >
					<ToggleButton  name="options" id="online" className="btn-dark" value={1}>Online  </ToggleButton>
					<ToggleButton  name="options" id="voice_clients" className="btn-dark" value={2}>Voice Clients</ToggleButton>
					<ToggleButton  name="options" id="latency" className="btn-dark" value={3}>Latency</ToggleButton>
					<ToggleButton  name="options" id="memory" className="btn-dark" value={4}>Memory usage</ToggleButton>
				</ToggleButtonGroup>
		</Card.Body>
	</Card>
    
)}
export default ClusterCard