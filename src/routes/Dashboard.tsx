import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function  Dashboard(){
    return (
        <Container fluid>
            <h1 className = "text-light text-center">   Coming soon  </h1>
            <Card text = "light" className="text-center bg-dark">
        <Card.Body>
            <Tabs
                defaultActiveKey="servers"
                id="dashboard-tabs"
                className="mb-3"
                justify
                variant="tabs"
                >
                <Tab eventKey="servers" title="Servers">
                    Server list
                </Tab>
                <Tab eventKey="settings" title="Settings">
                    Bot settings
                </Tab>
                <Tab eventKey="subscription" title="Subscription">
                    Subscription management
                </Tab>
            </Tabs>
      </Card.Body>
    </Card>
        </Container>

    )
}
export default Dashboard
