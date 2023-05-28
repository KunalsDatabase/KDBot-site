function  StatCard({Heading, Value}){
 return (

	<div className= "col px-lg-1">
		<div className="card text-light text-center bg-dark">
			<div className="card-header">{Heading}</div>
			<div className="card-body">
			<p className="card-text">
				{Value||"Loading..."}
			</p>
			</div>
		</div>
	</div>
    
)}
export default StatCard