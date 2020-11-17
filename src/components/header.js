import React from "react"
import { Navbar, Nav} from "react-bootstrap"
import { navigate } from 'gatsby'
import { isLoggedIn, logout } from "../services/auth"
import Logo from "../images/image001.png"
import "./header.css"
const Header = () => (
    <Navbar id="root" expand="lg" className="d-flex justify-content-around" >

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around">
            <Navbar.Brand href="#home">
                <img src={Logo} alt="" />
            </Navbar.Brand>
            <Nav>
                    <Nav.Link href="#home">Pourquoi GetCaas?</Nav.Link>
                    <Nav.Link href="#link">Tarifs</Nav.Link>
                    <Nav.Link href="#link">Contactez-Nous</Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-around">
                           <Nav.Link href="/app/login" className="px-4">Se connecter</Nav.Link>
                           <Nav.Link href="#link" className="compte px-4">Créer un compte</Nav.Link>

                {isLoggedIn() ? (
                    <Nav.Link
                        href="/"
                        onClick={event => {
                            event.preventDefault()
                            logout(() => navigate("/app/login"))
                        }}
                    >
                        Logout
                    </Nav.Link>
                ) : null}
            </Nav>
        </Navbar.Collapse>

    </Navbar>

)

export default Header
