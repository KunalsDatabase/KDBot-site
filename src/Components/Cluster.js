import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
function  Cluster({Title, Obj}){

	const shardButtons = []
	for (let i = 0; i < Obj.shards.length; i++) {
		//shardButtons.push(<ShardButton Title = {Title} Obj = {Obj} i = {i}/>)
		let popover =    <Popover id="popover-basic">
			<Popover.Header as="h3">{Title+" Shard "+Obj.shards[i]}</Popover.Header>
			<Popover.Body>
			Latency: {Obj.latency[i]}ms<br/>
			Voice connections: {Obj.voice_clients[i]}<br/>
			Guilds: {Obj.guilds[i]}<br/>
			Uptime: {Math.floor(Obj.uptime[i]/1000/60/60)+"h, "+Math.floor(((Obj.uptime[i]/1000)%3600)/60)+"m, "+Math.floor((Obj.uptime[i]/1000)%60)+"s"}
		
			</Popover.Body>
	    </Popover>
		shardButtons.push(
		<OverlayTrigger overlay={popover}>
			<Button variant="success" id="shard${obj+data[obj].shards[i]}" className ="shard-button text-white" data-toggle="modal" data-target="#${obj+data[obj].shards[i]}_modal">
				{Obj.shards[i]}
			</Button>
		</OverlayTrigger>)
	}
 return (
	<>
		<div class="card-header text-center">
			{Title}
		</div>
		<div class="card-body inner-card">
			{shardButtons}
		</div>
	</>
)}
export default Cluster