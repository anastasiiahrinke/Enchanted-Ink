import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import GenreBar from "../components/GenreBar"
import Marquee from "../components/Marquee"

const Shop = () => {
    return (
        <div className="shop-page">
        <div className="page-header">
            <div className="page-header-left">
                <div className="ph-eyebrow">Full collection · Folio</div>
                <h1 className="page-title">The <em>Catalogue</em></h1>
            </div>
        </div>
        <Marquee speed={14} pauseOnHover={true}/>

        <Container fluid className="p-0">
            <Row className="g-0">
                <Col md={3} className="shop-sidebar px-0">
                    <div className="sb-search">
                        <span className="sb-search-icon">⌕</span>
                        <input type="text" placeholder="Search titles, authors…" />
                    </div>
                    <GenreBar />
                </Col>
                <Col md={9} className="shop-main px-0">
                
                </Col>
            </Row>
        </Container>
        </div>
    )

}

export default Shop