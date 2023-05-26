function  BotStats(){
 return (
    <>
		<div class = "row mt-2 row-eq-height">
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Guilds</div>
				  <div class="card-body">
					<p class="card-text" id = "guild">Loading...</p>
				  </div>
				</div>
			</div>
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Voice Clients</div>
				  <div class="card-body">
					<p class="card-text" id = "voice">Loading...</p>
				  </div>
				</div>
			</div>
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Latency</div>
				  <div class="card-body">
					<p class="card-text" id = "ping">Loading...</p>
				  </div>
				</div>
			</div>
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header"># of DB entries</div>
				  <div class="card-body">
					<p class="card-text" id = "db">Loading...</p>
				  </div>
				</div>
			</div>
		</div>
		<div class = "row mt-2 row-eq-height">
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Shards</div>
				  <div class="card-body">
					<p class="card-text" id = "shards">Loading...</p>
				  </div>
				</div>
			</div>
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Uptime</div>
				  <div class="card-body">
					<p class="card-text" id = "uptime">Loading...</p>
				  </div>
				</div>
			</div>
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Memory usage</div>
				  <div class="card-body">
					<p class="card-text" id = "memoryusage">Loading...</p>
				  </div>
				</div>
			</div>
			<div class= "col px-lg-1">
				<div class="card text-light text-center bg-dark">
				  <div class="card-header">Characters used</div>
				  <div class="card-body">
					<p class="card-text" id = "charactersused">Loading...</p>
				  </div>
				</div>
			</div>			
		</div>

    
    </>
 )
}
export default BotStats