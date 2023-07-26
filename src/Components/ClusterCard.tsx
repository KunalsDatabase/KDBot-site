import {useState} from 'react'
import Cluster from './Cluster'
import Card from 'react-bootstrap/Card'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Collapse from 'react-bootstrap/Collapse'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import {Stats,Memory} from '../types'
type ClusterCardProps = {
	stats: Stats|null
	memory: Memory|null
	totalShards: number
}
function  ClusterCard({stats,memory,totalShards}:ClusterCardProps){
	const isOpen:boolean = localStorage.getItem('ClusterCardOpen')==='false'?false:true
	const [open, setOpen] = useState<boolean>(isOpen)
	const [heatmap, setHeatmap] = useState<string>("online")
	const [highlightShard, setHighlightShard] = useState<number>(NaN)
	function handleHeatmapChange(value:string){
		setHeatmap(value)
	}
	function handleSubmit(e:React.FormEvent<HTMLFormElement>){
		e.preventDefault()
		const inputValue = (e.currentTarget[0] as HTMLInputElement).value
		inputValue.length < 18 ? setHighlightShard(NaN) : setHighlightShard((Number(inputValue) >> 22) % totalShards)	
	}
		return (
	<div className="col px-lg-1">
		<Card className="text-light bg-dark ">
			<Card.Header className="text-center">
				<Button variant = "dark" onClick={()=>{setOpen(!open);open?localStorage.setItem('ClusterCardOpen','false'):localStorage.setItem('ClusterCardOpen','true')}} className="bg-dark text-white minimize-btn" aria-expanded={open} aria-controls="collapse"><div className ="rectangle"></div></Button>
				Clusters
			</Card.Header>
			<Collapse in={open}>
				<Card.Body>
					<Row>
					<p>Per-shard status of clusters. Hover over each shard for a preview of the shards' status. Click on a shard for more information.</p>
						<Col xl={4} md={6}>
					Heatmap type:&nbsp;&nbsp;&nbsp;&nbsp;
					<ToggleButtonGroup type = "radio" name="heatmap" defaultValue={"online"} onChange = {handleHeatmapChange}>
						<ToggleButton variant = "dark" id="online" value={"online"}>Online  </ToggleButton>
						<ToggleButton variant = "dark" id="voice_clients" value={"voice_clients"}>Voice Clients</ToggleButton>
						<ToggleButton variant = "dark" id="latency" value={"latency"}>Latency</ToggleButton>
						<ToggleButton variant = "dark" id="memory" value={"memory"}>Memory usage</ToggleButton>
					</ToggleButtonGroup>
					</Col>
					</Row>
					<Row>
					<Col xl={4} md={6}>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="formGroupGuild">
								<Form.Label>Enter guild ID to find your shard</Form.Label>
								<Form.Control className = "bg-dark text-white" type="number" placeholder="Guild ID" />
							</Form.Group>
						</Form>
					</Col>
					</Row>
					<Row>
					{stats && memory && Object.keys(stats).map(key => 
						<Cluster Title = {key} Obj = {stats[key]} memory={memory[key]} highlightShard={highlightShard} HeatMapType = {heatmap} key = {key}/>
					)}
					</Row>
				</Card.Body>
			</Collapse>
		</Card>
	</div>
)}
export default ClusterCard
