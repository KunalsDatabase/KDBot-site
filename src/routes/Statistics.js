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
function  Statistics(){
    const [stats,setStats] = useState({})
    const [memory,setMemory] = useState({})
    const [globalMemory,setGlobalMemory] = useState([])
    const [aggregates,setAggregates] = useState([])
    const [errorMessage,setErrorMessage] = useState("")
    const [errorShow,setErrorShow] = useState(false)
    function handleError(e){
        setErrorMessage((prevState)=>{
            if(prevState.message === e.message) return prevState //Prevent duplicate errors
            setErrorShow(true)
            return e
        })
    }
    useEffect(()=>{
            async function getData(){
                try{
                    let [statsResponse,memoryResponse] = await Promise.all([fetch("http://kdbase.com/kdbot/botapi.php?botinfo"),fetch("http://kdbase.com/kdbot/botapi.php?memory")])
                    let [stats,memoryData] = await Promise.all([statsResponse.json(),memoryResponse.json()])
                    Object.entries(stats).forEach(function([key, value]) {
                        if(Object.keys(stats[key]).length === 0){
                            delete stats[key]
                            handleError({heading:"Cluster Error",message:"The cluster '"+key+"' is currently offline or in the process of restarting."})
                        }
                    })
                    setMemory(memoryData)
                    setGlobalMemory(MemoryPreprocess(memoryData))
                    setAggregates(StatsPreprocess(stats))
                    setStats(stats)

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
      {errorShow && <Alert variant="danger" onClose={() => setErrorShow(false)} dismissible>
        <Alert.Heading>{errorMessage.heading}</Alert.Heading>
        <p>
            {errorMessage.message}
        </p>
      </Alert>}
        <Row className = "mt-2 row-eq-height">
			<StatCard Heading="Guilds" Value = {aggregates.guilds}/>
			<StatCard Heading="Voice Clients" Value = {aggregates.voice}/>
			<StatCard Heading="Average Latency" Value = {aggregates.latency}/>
			<StatCard Heading="# of DB entries" Value = {aggregates.dbnum}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <StatCard Heading="Shards" Value ={aggregates.shards}/>
            <StatCard Heading="Uptime" Value = {aggregates.uptime}/>
            <StatCard Heading="Memory Usage" Value = {aggregates.memusage}/>
            <StatCard Heading="Characters used" Value = {aggregates.numchars}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <ClusterCard stats = {stats} aggregates={aggregates} memory={memory}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <MemoryCard Memory = {globalMemory}/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <DonateCard/>
            <UsageCard pollychars = {aggregates.pollychars} translatechars = {aggregates.translatechars} IVONAchars = {aggregates.IVONAchars}/>
        </Row>

     </Container>
 )
}
export default Statistics