import {useState,useEffect} from 'react'
import ClusterCard from '../Components/ClusterCard'
import StatCard from '../Components/StatCard'
import MemoryCard from '../Components/MemoryCard'
import Container from 'react-bootstrap/Container'
import DonateCard from '../Components/DonateCard'
import UsageCard from '../Components/UsageCard'
import Row from 'react-bootstrap/Row'
import StatsPreprocess from '../Utils/StatsPreprocess'
import MemoryPreprocess from '../Utils/MemoryPreprocess'
import Alert from 'react-bootstrap/Alert'
import { Aggregates,Stats,Memory} from "../types"
type Error = {
    heading: string
    message: string
}
function  Statistics(){
    const [stats,setStats] = useState<Stats | null>(null)
    const [memory,setMemory] = useState<Memory | null>(null)
    const [globalMemory,setGlobalMemory] = useState<number[]>([])
    const [aggregates,setAggregates] = useState<Aggregates | null>(null)
    const [errorMessage,setErrorMessage] = useState<Error>({heading:"",message:""})
    const [errorShow,setErrorShow] = useState<boolean>(false)

    function handleError(e:Error){
        setErrorMessage((prevState:Error)=>{
            if(prevState.message === e.message) return prevState //Prevent duplicate errors
            setErrorShow(true)
            return e
        })
    }
    useEffect(()=>{
            async function getData(){
                try{
                    let [statsResponse,memoryResponse] = await Promise.all([fetch("https://kdbase.com/kdbot/api/v1/botinfo"),fetch("https://kdbase.com/kdbot/api/v1/memory")])
                    let [statsData,memoryData] = await Promise.all([statsResponse.json(),memoryResponse.json()])
                    Object.entries(statsData).forEach(function([key, value]) {
                        if(Object.keys(statsData[key]).length === 0){
                            delete statsData[key]
                            handleError({heading:"Cluster Error",message:"The cluster '"+key+"' is currently offline or in the process of restarting."})
                        }
                    })
                    setMemory(memoryData)
                    setGlobalMemory(MemoryPreprocess(memoryData))
                    setAggregates(StatsPreprocess(statsData))
                    setStats(statsData)

                }
                catch(e){
                    console.log("Error while fetching data:",e)
                }
            }
            getData()
            const APIinterval=setInterval(getData,5000)
            return ()=>clearInterval(APIinterval)
        },[])
 return (
    <Container fluid>
      {errorShow && <Alert variant="danger" className= "mt-2" onClose={() => setErrorShow(false)} dismissible>
        <Alert.Heading>{errorMessage.heading}</Alert.Heading>
        <p>
            {errorMessage.message}
        </p>
      </Alert>}
        <Row className = "mt-2 row-eq-height">
			<StatCard Heading="Guilds" Value = {aggregates?.guilds}/>
			<StatCard Heading="Voice Clients" Value = {aggregates?.voice}/>
			<StatCard Heading="Average Latency" Value = {aggregates?.latency}/>
			<StatCard Heading="# of DB entries" Value = {aggregates?.dbnum}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <StatCard Heading="Shards" Value ={aggregates?.shards}/>
            <StatCard Heading="Uptime" Value = {aggregates?.uptime}/>
            <StatCard Heading="Memory Usage" Value = {aggregates?.memusage}/>
            <StatCard Heading="Characters used" Value = {aggregates?.numchars}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <ClusterCard stats = {stats} totalShards={aggregates?.shards||0} memory={memory}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <MemoryCard memory = {globalMemory}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <DonateCard/>
            <UsageCard pollychars = {aggregates?.pollychars||0} translatechars = {aggregates?.translatechars||0} IVONAchars = {aggregates?.IVONAchars||0}/>
        </Row>

     </Container>
 )
}
export default Statistics