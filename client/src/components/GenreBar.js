import React, {useContext} from 'react'
import {observer} from "mobx-react-lite"
import {Context} from "../index"
import { ListGroup } from 'react-bootstrap'

const GenreBar = observer(() => {
  const { book } = useContext(Context)

  return (
    <div className="genre-bar-wrap">
      <div className="genre-bar__heading">Genre</div>
      <ListGroup className="genre-bar">
        {book.genres.map(genre => (
          <ListGroup.Item
            action
            className={`genre-bar__item ${book.selectedGenre?.id === genre.id ? 'active' : ''}`}
            key={genre.id}
            onClick={() => book.setSelectedGenre(genre)}
          >
            {genre.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
})
export default GenreBar