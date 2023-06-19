function  Cluster({Title, Obj}){
 return (
	<>
		<div class="card-header text-center">
			{Title}
		</div>
		<div class="card-body inner-card">
			{Obj.toString()}
		</div>
	</>
)}
export default Cluster