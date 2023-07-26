import { Aggregates,Stats,Stat} from "../types"
function StatsPreprocess(stats:Stats):Aggregates{
    const pollychars = getAggregate(stats,"pollychars")
    const translatechars = getAggregate(stats,"translatechars")
    const IVONAchars = getAggregate(stats,"IVONAchars")
    const aggregates:Aggregates = {
      guilds: getAggregate(stats,"guilds"),
      voice: getAggregate(stats,"voice_clients"),
      dbnum: getAggregate(stats,"db_num"),
      shards: Object.entries(stats).reduce((sum, [key,value]:[string,Stat]) => {return sum += value.shards?value.shards.length:sum},0),
      memusage: Math.round(getAggregate(stats,"memory_usage")/1024/1024)+"MB",
      pollychars,
      translatechars,
      IVONAchars,
      numchars: pollychars + translatechars + IVONAchars,
      latency: Math.round(getAggregate(stats,"latency",true))+"ms",
      uptime: Math.floor((Object.entries(stats)[0][1] as { uptime: number[] }).uptime[0]/1000/60/60)+"h, "+Math.floor((((Object.entries(stats)[0][1] as { uptime: number[] }).uptime[0]/1000)%3600)/60)+"m, "+Math.floor(((Object.entries(stats)[0][1] as { uptime: number[] }).uptime[0]/1000)%60)+"s"
    }
    return aggregates
}
function getAggregate(data:Stats,property:keyof Stat,avg:boolean=false):number{
    let temp = 0
    let n = 0
    for(let obj in data){
        temp = temp + data[obj][property].reduce((a:number, b:number) => a + b, 0)
        n = n + data[obj][property].length
      }
    if(avg){
      return temp/n
    }
    return temp
}

export default StatsPreprocess