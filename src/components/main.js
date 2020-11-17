import React from "react"
import {Row, Col, Button} from "react-bootstrap"
import "./main.css"
const Main = () => (

    <Row className="main">
        <Col md={6}>
            <div className="principal">
                <p>LA CONTENEURISATION AU SERVICE DE VOS APPLICATIONS</p>
                <p>Votre plateforme</p>
                <p><strong>multicloud simplifiée</strong></p>
                <p>Créez, gérez et déployez facilement toutes vos applications en quelques clics.</p>
                <div className="buttons mt-4">
                    <Button variant="primary" href="#">
                        Contactez-nous
                    </Button>
                    <Button variant="outline-primary" href="#" className="ml-2">
                        Créer un compte
                    </Button>
                </div>
            </div>
        </Col>
        <Col md={6}>
    <div class="image"></div>
        </Col>
    </Row>

)
export default Main
