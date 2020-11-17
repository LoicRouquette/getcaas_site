import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Profile from "./app/profile"
import Login from "./app/login"

const App = () => (
    <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/profile" />
    </Router>
)

export default App
