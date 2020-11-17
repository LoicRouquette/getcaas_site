import React from "react"
import {Container} from "react-bootstrap"
import Header from "../components/header"
import Main from "../components/main"
import "./index.css"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import "bootstrap/dist/css/bootstrap.min.css"

export default function About() {
  return <>
      <Container>
          <Header />
          <Main />
      </Container>
          </>
}

