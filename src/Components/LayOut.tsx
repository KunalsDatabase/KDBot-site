import { NavLink, Outlet } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
function  LayOut(){
 return (
    <>
        <Navbar variant="dark" collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className="ms-4">
                <img src="/images/header.png" height="40px" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className = "justify-content-center">
                <Nav className="nav-pills">
                    <NavLink className="nav-link" to="statistics">Statistics</NavLink>
                    <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
                    <NavLink className="nav-link" to="premium">Premium</NavLink>
                    <NavDropdown title="External Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://discordbots.org/bot/414925323197612032" rel="noreferrer">⧉ Bot Page</NavDropdown.Item>
                        <NavDropdown.Item href="https://discord.gg/xMh2YTb" rel="noreferrer">⧉ Support Server</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
        <Outlet/>
        <div className = "footer bg-dark text-left">
            <span className="text-muted">Copyright ©️{new Date().getFullYear()} Kunal's Database</span>
	    </div>
    </>
 )
}
export default LayOut