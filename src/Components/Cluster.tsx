import ShardButton from './ShardButton'
import Card from 'react-bootstrap/Card'
import produceShardPopover from './ShardPopover'
import ShardModal from './ShardModal'
import {useState} from 'react'
import {MemoryCluster,Stat} from '../types'
type ClusterProps = {
	Title: string
	Obj: Stat
	HeatMapType: string
	memory: MemoryCluster
	highlightShard: number
}

function  Cluster({Title, Obj,HeatMapType,memory,highlightShard}:ClusterProps){
	const [modalShow, setModalShow] = useState<boolean>(false)
	const [modalShardIndex, setModalShardIndex] = useState<number>(NaN)
	const handleButtonClick = (shardIndex:number) => {
		setModalShow((prevModalShow) => !prevModalShow)
		setModalShardIndex(shardIndex)
	  }
	function calculateHeatMap (HeatMapType:ClusterProps["HeatMapType"],Obj:ClusterProps["Obj"]) {
		let btnColor:string = "var(--bs-success)"
		const heatmap = []
		const maxVoice = Math.max(...Obj.voice_clients)
		const maxMemory = Math.max(...Obj.memory_usage)
		for(let i=0;i<Obj.shards.length;i++){
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
					let pingval:number=0
					if(Obj.latency[i]<50) pingval = 0
					if(Obj.latency[i]>50&&Obj.latency[i]<100) pingval = 0.2
					if(Obj.latency[i]>100) pingval = 0.7
					if(Obj.latency[i]>200) pingval = 0.9
					btnColor="hsla("+(134-134*((isNaN(pingval) || !isFinite(pingval))?0:pingval))+", 61%, 41%, 1)"					
					break
				case "memory":
					const memval:number = Obj.memory_usage[i]/maxMemory
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
		let popover = produceShardPopover(Obj,Title,i)
		shardButtons.push(
			<ShardButton onClick={handleButtonClick} color = {heatmap[i]} popover={popover} isHighlighted={highlightShard===Obj.shards[i]} key={i.toString()} shardIndex = {i}>
				<p>{Obj.shards[i]}</p>
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
			<ShardModal show={modalShow} onHide={() => setModalShow(false)} memory = {memory[modalShardIndex]} shardindex = {modalShardIndex} title = {Title} obj = {Obj} />
		</Card.Body>
	</>
)}
export default Cluster