import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import GenreBar from "../components/GenreBar"

const Shop = () => {
    return (
        <Container fluid className="p-0">
            <Row className="g-0">

                <Col md={3} className="px-0" style={{minHeight: '100vh', position: 'sticky', top: 0}}>
                    <GenreBar />
                </Col>
                <Col md={9} className="px-0">
                
                </Col>
            </Row>
        </Container>
    )
}

export default Shop