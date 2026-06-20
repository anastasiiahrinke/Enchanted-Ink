import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap"
import GenreBar from "../components/GenreBar"
import Marquee from "../components/Marquee"
import AuthorBar from "../components/AuthorBar"
import BookList from '../components/BookList';

const Shop = () => {
    const sortOptions = [
        { id: 'relevant', label: 'RELEVANT' },
        { id: 'newest', label: 'NEWEST' },
        { id: 'price-asc', label: 'PRICE ↑' },
        { id: 'price-desc', label: 'PRICE ↓' },
    ]
    const [activeSort, setActiveSort] = useState('relevant')

    return (
        <div className="shop-page">
        <div className="page-header">
            <div className="page-header-left">
                <div className="ph-eyebrow">Full collection · Folio</div>
                <h1 className="page-title">The <em>Catalogue</em></h1>
            </div>
        </div>
        <Marquee speed={14} pauseOnHover={false}/>

        <Container fluid className="p-0">
            <Row className="g-0">
                <Col md={3} className="shop-sidebar px-0">
                    <div className="sb-search">
                        <input type="text" placeholder="Search titles, authors…" />
                    </div>
                    <GenreBar />
                    <AuthorBar />
                </Col>
                <Col md={9} className="shop-main">
                    <div className="shop-sortbar" role="toolbar" aria-label="Sort books">
                        {sortOptions.map((option) => (
                            <button
                                key={option.id}
                                type="button"
                                className={`shop_button${activeSort === option.id ? ' shop_button--active' : ''}`}
                                aria-pressed={activeSort === option.id}
                                onClick={() => setActiveSort(option.id)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                    <BookList />
                </Col>
            </Row>
        </Container>
        </div>
    )

}

export default Shop