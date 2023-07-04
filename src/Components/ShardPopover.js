import Popover from 'react-bootstrap/Popover'
//not technically a component but a helper function to generate a popover for a shardbutton
function ShardPopover(Obj,Title,shardID)
{
    const popover = 
    <Popover style = {{ position: "absolute"}}>
         <Popover.Header as="h3">{Title+" Shard "+Obj.shards[shardID]}</Popover.Header>
        <Popover.Body>
            Latency: {Obj.latency[shardID]}ms<br/>
            Voice connections: {Obj.voice_clients[shardID]}<br/>
            Guilds: {Obj.guilds[shardID]}<br/>
            Uptime: {Math.floor(Obj.uptime[shardID]/1000/60/60)+"h, "+Math.floor(((Obj.uptime[shardID]/1000)%3600)/60)+"m, "+Math.floor((Obj.uptime[shardID]/1000)%60)+"s"}
        </Popover.Body>
    </Popover>
    return popover
}
export default ShardPopover