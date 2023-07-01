function StatsPreprocess(stats) {
    const aggregates = {}
    aggregates.guilds = getAggregate(stats,"guilds")
    aggregates.voice = getAggregate(stats,"voice_clients")
    aggregates.dbnum = getAggregate(stats,"db_num")
    aggregates.shards = Object.entries(stats).reduce((sum, [key,value]) => {return sum += value.shards?value.shards.length:sum},0)
    aggregates.memusage = Math.round(getAggregate(stats,"memory_usage")/1024/1024)+"MB"
    aggregates.pollychars = getAggregate(stats,"pollychars")
    aggregates.translatechars = getAggregate(stats,"translatechars")
    aggregates.IVONAchars = getAggregate(stats,"IVONAchars")
    aggregates.numchars = aggregates.pollychars + aggregates.translatechars + aggregates.IVONAchars
    aggregates.latency = Math.round(getAggregate(stats,"latency",true))+"ms"
    aggregates.uptime = Math.floor(Object.entries(stats)[0][1].uptime[0]/1000/60/60)+"h, "+Math.floor(((Object.entries(stats)[0][1].uptime[0]/1000)%3600)/60)+"m, "+Math.floor((Object.entries(stats)[0][1].uptime[0]/1000)%60)+"s"
    return aggregates
}

function getAggregate(data,property,avg=false){
    let temp = 0
    let n = 0
    for(let obj in data){
      if(!Array.isArray(data[obj][property])){
            temp = temp+data[obj][property]
        n++
         }
        else{
            temp = temp + data[obj][property].reduce((a, b) => a + b, 0)
          n = n + data[obj][property].length
      }
    }
    if(avg){
      return temp/n
    }
    return temp
}


module.exports = StatsPreprocess