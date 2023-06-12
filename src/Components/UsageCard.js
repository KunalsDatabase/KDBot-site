function  UsageCard(){
 return (
	<>
		<div className= "col px-lg-1">
			<div className="card text-light text-center bg-dark">
				<div className="card-header">Usage by service</div>
				<div className="card-body">
				<p className="card-text">
				<canvas id="pieChart"></canvas>
				</p>
				</div>
			</div>
		</div>

	</>
)}
export default UsageCard