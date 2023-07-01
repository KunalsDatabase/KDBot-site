import ShardButton from './ShardButton'
import Popover from 'react-bootstrap/Popover'
import Card from 'react-bootstrap/Card'
function  Cluster({Title, Obj,HeatMapType}){
	function calculateHeatMap (HeatMapType,obj) {
		let btnColor
		const heatmap = []
		const maxVoice = Math.max(...Obj.voice_clients)
		const maxMemory = Math.max(...Obj.memory_usage)
		for(var i=0;i<Obj.shards.length;i++){
			if(HeatMapType!=="online" && Obj.wsstatus[i]!==0) btnColor="var(--bs-secondary)"
			else switch(HeatMapType){
				case "online":
					if(Obj.wsstatus[i]!==0) btnColor = "var(--bs-danger)"
					else btnColor = "var(--bs-success)"
				break
				case "voice_clients":
					const vcval = Obj.voice_clients[i]/maxVoice
					btnColor="hsla("+(134-134*((isNaN(vcval) || !isFinite(vcval))?0:vcval))+", 61%, 41%, 1)"
				break
				case "latency":
					let pingval
					if(Obj.latency[i]<50) pingval = 0
					if(Obj.latency[i]>50&&Obj.latency[i]<100) pingval = 0.2
					if(Obj.latency[i]>100) pingval = 0.7
					if(Obj.latency[i]>200) pingval = 0.9
					btnColor="hsla("+(134-134*((isNaN(pingval) || !isFinite(pingval))?0:pingval))+", 61%, 41%, 1)"					
				break
				case "memory":
					const memval = Obj.memory_usage[i]/maxMemory
					btnColor="hsla("+(134-134*((isNaN(memval) || !isFinite(memval))?0:memval))+", 61%, 41%, 1)"
				
				break
			}
			heatmap[i]=btnColor
		}
		return heatmap
	}
	const heatmap = calculateHeatMap(HeatMapType,Obj)
	const shardButtons = []
	for (let i = 0; i < Obj.shards.length; i++) {
		let popover =    <Popover style = {{ position: "absolute"}}>
			<Popover.Header as="h3">{Title+" Shard "+Obj.shards[i]}</Popover.Header>
			<Popover.Body>
				Latency: {Obj.latency[i]}ms<br/>
				Voice connections: {Obj.voice_clients[i]}<br/>
				Guilds: {Obj.guilds[i]}<br/>
				Uptime: {Math.floor(Obj.uptime[i]/1000/60/60)+"h, "+Math.floor(((Obj.uptime[i]/1000)%3600)/60)+"m, "+Math.floor((Obj.uptime[i]/1000)%60)+"s"}
			</Popover.Body>
	    </Popover>
		shardButtons.push(
			<ShardButton color = {heatmap[i]} popover={popover} key = {i.toString()}>
				{Obj.shards[i]}
			</ShardButton>
		)
	}
 return (
	<>
		<Card.Header className="text-center">
			{Title}
		</Card.Header>
		<Card.Body className="inner-card">
			{shardButtons}
		</Card.Body>
	</>
)}
export default Cluster