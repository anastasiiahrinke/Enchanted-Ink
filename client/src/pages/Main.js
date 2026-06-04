import React, {useState, useEffect} from 'react'
import StarField from '../components/StarField'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'


const heroStats = [
    {
        value: '10k+',
        label: 'titles in the catalog',
    },
    {
        value: '24/7',
        label: 'browse anytime',
    },
    {
        value: 'New',
        label: 'handpicked releases weekly',
    },
]

const heroQuotes = [
    {
        text: 'Not all those who wander are lost.',
        attr: 'Tolkien · The Fellowship of the Ring'
    },
    {
        text: 'A reader lives a thousand lives before he dies.',
        attr: 'George R.R. Martin'
    },
    {
        text: 'There is no friend as loyal as a book.',
        attr: 'Ernest Hemingway'
    },
]

const QuoteRotator = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(()=> {
                setIndex(prev => (prev + 1) % heroQuotes.length)
                setVisible(true)
            }, 800)
        }, 4000)
        return () => clearInterval(interval)
    }, [])
    return (
         <section className="hero-right">
                <div className="hero-cover-bg" />
                <div className="book-art">
                    <StarField />

                    <div className="sky-quotes">
                        <p className="sky-q-text">{heroQuotes[index].text}</p>
      <span className="sky-q-attr">{heroQuotes[index].attr}</span>
                    </div>
                </div>
            </section>
    )
}

const Main = () => {
    return (
        <div className="hero">
            <section className="hero-left">
                <div className="hero-issue">
                    <span className="hero-issue-line" />
                    <span className="hero-issue-text">Curated bookstore · Est. 2024</span>
                </div>

                <h1 className="hero-title">
                    The World
                    <br />
                    Begins With
                    <br />
                    <span className="accent">a Page.</span>
                </h1>

                <div className="hero-rule" />

                <p className="hero-desc">
                    Thousands of titles from timeless classics to contemporary voices.
                    Discover, purchase, and carry your library everywhere.
                </p>

                <div className="hero-actions">
                    <NavLink to={SHOP_ROUTE} className="btn-primary-xl">
                        <span>Browse Catalogue</span>
                    </NavLink>
                    <NavLink to={SHOP_ROUTE} className="btn-ghost-xl">
                        <span>My library</span>
                    </NavLink>
                </div>

                <div className="hero-stats">
                    {heroStats.map(item => (
                        <div className="stat" key={item.label}>
                            <span className="stat-n">{item.value}</span>
                            <span className="stat-l">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>
                <QuoteRotator/>
           
        </div>
    )
}

export default Main