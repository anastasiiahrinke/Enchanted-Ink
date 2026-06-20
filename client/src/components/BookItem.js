import React from 'react'
import { Col } from 'react-bootstrap'
import { getGenreIcon, getGenreTheme } from './genreIcons'

// genre/author з БД можуть прийти або рядком, або об'єктом { id, name }
const getName = (value) => (typeof value === 'string' ? value : value?.name || '')

const BookItem = ({ book, onSelect }) => {
  const genreName = getName(book.genre) || 'Fiction'
  const authorName = getName(book.author) || 'Unknown author'
  const GenreIcon = getGenreIcon(genreName)
  const themeClass = getGenreTheme(genreName)

  return (
    <Col md={3} className="bookitem_col">
      <div className="bookitem_card" onClick={() => onSelect?.(book)}>
        <div className={`bookitem_cover ${themeClass}`}>
          <div className="bookitem_pattern" />
          <div className="bookitem_content">
            <span className="bookitem-icon bookitem-icon--lg"><GenreIcon /></span>
            <span className="bookitem-genre-tag">{genreName}</span>
            <span className="bookitem-rule" />
            <span className="bookitem-title-cover">{book.name}</span>
            <span className="bookitem-author-cover">{authorName}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BookItem