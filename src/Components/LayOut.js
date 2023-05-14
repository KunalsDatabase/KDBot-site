import { NavLink, Outlet } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
function  LayOut(){
 return (
    <>
        <Navbar variant="dark" className = "justify-content-center">
            <Navbar.Brand href="/">
                <img src="images/header.png" width="100px" height="40px" alt=""/>
            </Navbar.Brand>
            <Nav className="nav-pills" bg="dark">
                <NavLink className="nav-link" to="/statistics">Statistics</NavLink>
                <NavLink className="nav-link" to="https://discordbots.org/bot/414925323197612032">Bot Page</NavLink>
                <NavLink className="nav-link" to="https://discord.gg/xMh2YTb">Support Server</NavLink>
                <NavLink className="nav-link" to="/premium">Premium</NavLink>
            </Nav>
        </Navbar >
        <Outlet/>
        <div className = "footer bg-dark text-left">
            <span className="text-muted">Copyright ©️{new Date().getFullYear()} Kunal's Database</span>
	    </div>
    
    </>
 )
}
export default LayOut