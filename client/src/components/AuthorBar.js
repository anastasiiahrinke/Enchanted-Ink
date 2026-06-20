import React, {useContext} from 'react'
import {observer} from "mobx-react-lite"
import {Context} from "../index"
import { ListGroup } from 'react-bootstrap'

const AuthorBar = observer(() => {
  const { book } = useContext(Context)

  return (
    <div className="genre-bar-wrap">
      
      <div className="genre-bar__heading">AUTHORS</div>
      <ListGroup className="genre-bar">
        {book.authors.map(author => (
          <ListGroup.Item
            active={author.id == author.selectedAuthor}
            className={`genre-bar__item ${book.selectedAuthor?.id === author.id ? 'active' : ''}`}
            key={author.id}
            onClick={() => book.setSelectedAuthor(author)}
          >
            {author.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
})
export default AuthorBar