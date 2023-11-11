import { NavLink, Outlet } from "react-router-dom"
import {useAuth} from '../Hooks/useAuth'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import {getOAuthURL} from '../config'
function  LayOut(){
    const auth = useAuth()
 return (
    <>
        <Navbar variant="dark" collapseOnSelect expand="lg">
            <Navbar.Brand href="/" className="ms-4">
                <img src="/images/header.png" height="40px" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="nav-pills me-auto">
                    <NavLink className="nav-link" to="statistics">Statistics</NavLink>
                    <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
                    <NavLink className="nav-link" to="premium">Premium</NavLink>
                    <NavDropdown title="External Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://discordbots.org/bot/414925323197612032" rel="noreferrer">⧉ Bot Page</NavDropdown.Item>
                        <NavDropdown.Item href="https://discord.gg/xMh2YTb" rel="noreferrer">⧉ Support Server</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            {auth.isLoading?(
                <Spinner animation="border" variant="light" />
            ):
            auth.user?
            (<>
                <Navbar.Text>
                    Welcome, {auth.user.username}!
                    </Navbar.Text>
                    <Dropdown align="end">
                        <Dropdown.Toggle className = "ms-3" bsPrefix="signin-toggle" variant="dark" id="dropdown-signin">
                            <img className="rounded-circle" style={{width: "40px", height: "40px"}} src={`https://cdn.discordapp.com/avatars/${auth.user.id}/${auth.user.avatar}.jpeg`} alt="avatar"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href={process.env.REACT_APP_API_BASE_URL+"/logout"}>Log out (this device)</Dropdown.Item>
                            <Dropdown.Item href={process.env.REACT_APP_API_BASE_URL+"/logoutAll"}>Log out (all devices)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </>)
            :(
                <Button href={getOAuthURL()} className="me-3 discord-color text-white">
                    <img src="/icons/icon_clyde_white_RGB.svg" height="20px" className ="me-2" alt="Discord logo"/>
                    Login with Discord
                </Button>
            )}
            </Navbar.Collapse>
        </Navbar>
        <div className="content">
        <Outlet/>
        </div>
        <div className = "footer bg-dark text-left">
            <span className="text-muted">Copyright ©️{new Date().getFullYear()} Kunal's Database</span>
	    </div>
    </>
 )
}
export default LayOut