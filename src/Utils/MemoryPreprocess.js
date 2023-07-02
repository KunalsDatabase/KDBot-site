function parseMemoryData(memory){
    const globalMemory = new Array(memory[Object.keys(memory)[0]][0].length).fill(0)
    for(let obj in memory){
        for(let i = 0;i<memory[obj].length;i++){
            memory[obj][i] = memory[obj][i].map(x => Math.round(x/1024/1024))
        }
        for(let i = 0;i<memory[obj].length;i++){
            for(let n = 0;n<globalMemory.length;n++){
                globalMemory[n] += memory[obj][i][n]
            }
        }
    }
   /* const x = []
    for(var i = 0;i<globalMemory.length;i++){
        x[globalMemory.length-i-1]=i*updateFrequency
    }*/
    return globalMemory
}

module.exports = parseMemoryData