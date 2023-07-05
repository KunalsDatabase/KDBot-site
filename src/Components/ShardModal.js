import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StatCard from './StatCard'
function ShardModal(props) {
    const index = props.shardindex
    const cluster = props.obj
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        restoreFocus={false}
      >
        <Modal.Header closeButton closeVariant="white" className="text-white bg-dark">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title+" Shard "+cluster.shards[index]} Analytics
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className = "text-white">
            <Container>
                <Row>
                    <StatCard Heading = "Guilds" Value = {cluster.guilds[index]}/>
                    <StatCard Heading = "Voice Clients" Value = {cluster.voice_clients[index]}/>
                    <StatCard Heading = "Latency" Value = {cluster.latency[index]+"ms"||"N/A"}/>
                    <StatCard Heading = "# of DB Entries" Value = {cluster.db_num[index]}/>
                </Row>
                <Row>
                    <StatCard Heading = "Websocket Status" Value = {cluster.wsstatus[index]==0?"Connected":"Not connected"}/>
                    <StatCard Heading = "Uptime" Value = {Math.floor(cluster.uptime[index]/1000/60/60)+"h, "+Math.floor(((cluster.uptime[index]/1000)%3600)/60)+"m, "+Math.floor((cluster.uptime[index]/1000)%60)+"s"}/>
                    <StatCard Heading = "Memory Usage" Value = {Math.round(cluster.memory_usage[index]/1024/1024)+"MB"}/>
                    <StatCard Heading = "Characters Used" Value = {cluster.pollychars[index]+cluster.translatechars[index]+cluster.IVONAchars[index]}/>
                </Row>
                <Row>
                    <Col>
                        <canvas id="shardMemoryChart"></canvas>
                    </Col>
                    <Col>
                        <canvas id="shardUsageChart"></canvas>
                    </Col>

                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer className="text-white bg-dark">
          <Button onClick={props.onHide} variant = "dark">Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
export default ShardModal