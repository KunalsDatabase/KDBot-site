import Button from 'react-bootstrap/Button' 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {useRef,useEffect} from 'react'
function ShardButton({popover,shardIndex,color,children,isHighlighted,onClick}){
	let ref = useRef(null)
	useEffect(()=>{
		if(isHighlighted && ref.current){
			ref.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
			ref.current.focus()
		}
		
	},[isHighlighted])
	return(
	<OverlayTrigger overlay={popover} placement = "top">
			<Button
				variant="success"
				id={shardIndex}
				className ="shard-button text-white"
				style = {{"backgroundColor":color,"borderColor":isHighlighted?"white":color,"border-width":"2px"}}
				onClick={()=>{
					onClick(shardIndex)
				}}
				ref = {ref}>
				{children}
			</Button>
	</OverlayTrigger>
)}
export default ShardButton