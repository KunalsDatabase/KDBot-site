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
function  Statistics(){
    const [stats,setStats] = useState({})
    const [memory,setMemory] = useState({})
    const [globalMemory,setGlobalMemory] = useState([])
    const [aggregates,setAggregates] = useState([])
    useEffect(()=>{
            async function getData(){
                let stats = await fetch("http://192.168.0.62/kdbot/botapi.php?botinfo")
                let memoryData = await fetch("http://192.168.0.62/kdbot/botapi.php?memory")
                stats= await stats.json()
                memoryData= await memoryData.json()
                setAggregates(StatsPreprocess(stats))
                setStats(stats)
                setMemory(memoryData)
                setGlobalMemory(MemoryPreprocess(memoryData))       
            }
            getData()
            const APIinterval=setInterval(getData,5000)
            return ()=>clearInterval(APIinterval)
        },[])
 return (
    <Container fluid>

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
            <ClusterCard stats = {stats} memory={memory}/>
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