import Button from 'react-bootstrap/Button' 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function ShardButton(props)
{return (
	<OverlayTrigger overlay={props.popover} placement = "top">
			<Button
				variant="success"
				id={props.shardID}
				className ="shard-button text-white"
				style = {{"backgroundColor":props.color,"borderColor":props.color}}
				onClick={()=>{
					props.onClick(props.shardID)
				}}
			>
				{props.shardID}
				{props.children}
			</Button>
	</OverlayTrigger>
)}
export default ShardButton