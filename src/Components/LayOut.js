import { NavLink, Outlet } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
function  LayOut(){
 return (
    <>
        <Navbar variant="dark" collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className="ms-4">
                <img src="images/header.png" height="40px" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className = "justify-content-center" width="100%">
                <Nav className="nav-pills" bg="dark">
                    <NavLink className="nav-link" to="statistics">Statistics</NavLink>
                    <NavLink className="nav-link" to="https://discordbots.org/bot/414925323197612032">Bot Page</NavLink>
                    <NavLink className="nav-link" to="https://discord.gg/xMh2YTb">Support Server</NavLink>
                    <NavLink className="nav-link" to="premium">Premium</NavLink>
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