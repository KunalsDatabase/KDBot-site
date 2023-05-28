import Cluster from './Cluster'

function  ClusterCard(){
 return (
	<div class="card text-light bg-dark ">
		<div class="card-header text-center">
			<button class="btn bg-dark text-white minimize-btn" data-toggle="collapse" data-target="#clusters" aria-expanded="true" aria-controls="collapse"><div class ="rectangle"></div></button>
			Clusters							
		</div>
		<div class="card-body collapse show" id="clusters">
			<p>Per-shard status of clusters. Hover over each shard for a preview of the shards' status. Click on a shard for more information.</p>
			Heatmap type:&nbsp;&nbsp;&nbsp;&nbsp;<div class="btn-group btn-group-toggle" data-toggle="buttons">
				<label class="btn btn-dark active">
					<input type="radio" name="options" id="online" autocomplete="off" checked/>Online
				</label>
				<label class="btn btn-dark">
					<input type="radio" name="options" id="voice_clients" autocomplete="off"/>Voice Clients
				</label>
				<label class="btn btn-dark">
					<input type="radio" name="options" id="latency" autocomplete="off"/>Latency
				</label>
				<label class="btn btn-dark">
					<input type="radio" name="options" id="memory" autocomplete="off"/>Memory usage
					</label>
				</div>
		</div>
	</div>
    
)}
export default ClusterCard