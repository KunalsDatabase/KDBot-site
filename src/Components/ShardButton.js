import Button from 'react-bootstrap/Button' 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function ShardButton(props)
{return (
	<OverlayTrigger overlay={props.popover} placement = "top">
			<Button
				variant="success"
				id="shard${obj+data[obj].shards[i]}"
				className ="shard-button text-white"
				style = {{"backgroundColor":props.color,"borderColor":props.color}}
				data-toggle="modal" data-target="#${obj+data[obj].shards[i]}_modal"
			>
				{props.children}
			</Button>
	</OverlayTrigger>
)}
export default ShardButton