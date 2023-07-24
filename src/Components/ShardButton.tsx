import Button from 'react-bootstrap/Button' 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {useRef,useEffect} from 'react'
type ShardButtonProps = {
	popover:JSX.Element,
	shardIndex:number,
	color:string,
	children:JSX.Element,
	isHighlighted:boolean,
	onClick:(shardID:number)=>void
}
function ShardButton({popover,shardIndex,color,children,isHighlighted,onClick}:ShardButtonProps){
	let ref = useRef<HTMLButtonElement>(null)
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
				id={shardIndex.toString()}
				className ="shard-button text-white"
				style = {{"backgroundColor":color,"borderColor":isHighlighted?"white":color,"borderWidth":"2px"}}
				onClick={()=>{
					onClick(shardIndex)
				}}
				ref = {ref}>
				{children}
			</Button>
	</OverlayTrigger>
)}
export default ShardButton
