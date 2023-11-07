export type Aggregates = {
    guilds: number
    voice: number
    dbnum: number
    shards: number
    memusage: string
    pollychars: number
    translatechars: number
    IVONAchars: number
    numchars: number
    latency: string
    uptime: string
}
export type Stat = {
    guilds: number[]
    voice_clients: number[]
    latency: number[]
    db_num: number[]
    uptime: number[]
    shards: number[]
    pollychars: number[]
    translatechars: number[]
    IVONAchars: number[]
    wsstatus: number[]
    memory_usage: number[]
}
export type Stats = {
    [key: string]: Stat
  }
export type MemoryCluster = number[][]


export type Memory = {
    [key: string]: MemoryCluster
  }
export type AuthContextType = {
  isLoading: boolean
  user: any | null
}
export type AuthProviderProps = {
  children: React.ReactNode
}