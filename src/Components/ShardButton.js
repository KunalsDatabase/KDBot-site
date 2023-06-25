import Button from 'react-bootstrap/Button' 
import {forwardRef} from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const ShardButton = forwardRef((props,ref)=>{
 return (
	<OverlayTrigger overlay={props.popover} placement = "top">
			<Button
				ref={ref}
				variant="success"
				id="shard${obj+data[obj].shards[i]}"
				className ="shard-button text-white"
				style = {{"background-color":props.color}}
				data-toggle="modal" data-target="#${obj+data[obj].shards[i]}_modal"
			>
				{props.children}
			</Button>
	</OverlayTrigger>
)})
export default ShardButton