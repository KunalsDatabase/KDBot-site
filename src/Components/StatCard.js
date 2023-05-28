function  StatCard({Heading, Value}){
 return (

	<div class= "col px-lg-1">
		<div class="card text-light text-center bg-dark">
			<div class="card-header">{Heading}</div>
			<div class="card-body">
			<p class="card-text">
				{Value||"Loading..."}
			</p>
			</div>
		</div>
	</div>
    
)}
export default StatCard