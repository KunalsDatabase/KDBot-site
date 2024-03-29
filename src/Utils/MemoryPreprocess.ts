import {Memory} from "../types"
function MemoryPreprocess(memory:Memory):number[]{
    const globalMemory:number[] = new Array(memory[Object.keys(memory)[0]][0].length).fill(0)
    for(let obj in memory){
        for(let i = 0;i<memory[obj].length;i++){
            memory[obj][i] = memory[obj][i].map((x:number) => Math.round(x/1024/1024))
        }
        for(let i = 0;i<memory[obj].length;i++){
            for(let n = 0;n<globalMemory.length;n++){
                globalMemory[n] += memory[obj][i][n]
            }
        }
    }
    return globalMemory
}

export default MemoryPreprocess