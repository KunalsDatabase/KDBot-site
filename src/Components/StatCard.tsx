import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
type StatCardProps = {
	Heading: string
	Value: string | number | null | undefined
}
function  StatCard({Heading, Value}:StatCardProps){
 return (
	<Col xs={6} lg={3} className= "px-lg-1 mt-1">
		<Card text = "light" className="text-center bg-dark">
			<Card.Header>{Heading}</Card.Header>
			<Card.Body>
				<Card.Text>
					{Value===null?"N/A":(Value!==undefined?Value:"Loading...")}
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
)}
export default StatCard