import {useState,useEffect} from 'react'
import ClusterCard from '../Components/ClusterCard'
import StatCard from '../Components/StatCard'
import MemoryCard from '../Components/MemoryCard'
import Container from 'react-bootstrap/Container'
import DonateCard from '../Components/DonateCard'
import UsageCard from '../Components/UsageCard'
import Row from 'react-bootstrap/Row'
function  Statistics(){
    const [stats,setStats] = useState({})
    useEffect(
        ()=>{
            const APIinterval=setInterval(()=>{
                fetch("http://localhost/kdbot/botapi.php?botinfo")
                .then(res=>res.json())
                .then(data=>setStats(data))
            }
            ,5000)
            return ()=>clearInterval(APIinterval)
        },[])
 return (
    <Container fluid>
        <Row className = "mt-2 row-eq-height">
			<StatCard Heading="Guilds" Value = {stats.guilds}/>
			<StatCard Heading="Voice Clients" Value = {stats.voice}/>
			<StatCard Heading="Latency" Value = {stats.latency}/>
			<StatCard Heading="# of DB entries" Value = {stats.dbnum}/>
        </Row>
        <Row className = "mt-2 row-eq-height">
        <StatCard Heading="Shards" Value ={stats.shards}/>
			<StatCard Heading="Uptime" Value = {stats.uptime}/>
			<StatCard Heading="Memory Usage" Value = {stats.memusage}/>
			<StatCard Heading="Characters used" Value = {stats.numchars}/>
        </Row>
        <Row className = "mt-2 row-eq-height">
            <ClusterCard/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <MemoryCard/>
        </Row>

        <Row className = "mt-2 row-eq-height">
            <DonateCard/>
            <UsageCard/>
        </Row>
    </Container>
 )
}
export default Statistics