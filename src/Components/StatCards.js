import StatCard from './StatCard'
import {useState} from 'react'

function  StatCards(){
	let [stats, setStats] = useState({})
	
 return (
    <>
		<div className = "row mt-2 row-eq-height">
			<StatCard Heading="Guilds" Value = {stats.guilds}/>
			<StatCard Heading="Voice Clients" Value = {stats.voice}/>
			<StatCard Heading="Latency" Value = {stats.latency}/>
			<StatCard Heading="# of DB entries" Value = {stats.dbnum}/>
		</div>
		<div className = "row mt-2 row-eq-height">
			<StatCard Heading="Shards" Value ={stats.shards}/>
			<StatCard Heading="Uptime" Value = {stats.uptime}/>
			<StatCard Heading="Memory Usage" Value = {stats.memusage}/>
			<StatCard Heading="Characters used" Value = {stats.numchars}/>
		</div>

    
    </>
 )
 }
export default StatCards