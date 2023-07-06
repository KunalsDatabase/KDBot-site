import Card from 'react-bootstrap/Card'
function  StatCard({Heading, Value}){
 return (
	<div className= "col px-lg-1">
		<Card text = "light" className="text-center bg-dark">
			<Card.Header>{Heading}</Card.Header>
			<Card.Body>
				<Card.Text>
					{Value!==undefined?Value:"Loading..."}
				</Card.Text>
			</Card.Body>
		</Card>
	</div>
)}
export default StatCard