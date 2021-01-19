import React from "react"
import { Navbar, Nav} from "react-bootstrap"
import { navigate } from 'gatsby'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { isLoggedIn, logout } from "../services/auth"
import Logo from "../images/image001.png"
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./header.css"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>,
    <Navbar id="root" expand="lg" >
        <Navbar.Brand href="#home">
            <img src={Logo} alt="" class="img-responsive logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-around">

            <Nav className="d-flex justify-content-around nav ml-1">
                    <Nav.Link href="#home">Pourquoi GetCaas?</Nav.Link>
                    <Nav.Link href="#link">AMOA</Nav.Link>
                    <Nav.Link href="#link">Formations</Nav.Link>
                    <Nav.Link href="#link">Tarifs</Nav.Link>
                    <Nav.Link href="#link">Contactez-Nous</Nav.Link>
            </Nav>
            <Nav className="separatenav">
                           <Nav.Link href="/app/login" className="px-4">Se connecter</Nav.Link>
                           <Nav.Link href="#link">Créer un compte</Nav.Link>

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
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
