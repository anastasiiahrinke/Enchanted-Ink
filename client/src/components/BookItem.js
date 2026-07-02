import React from "react";
import { Col } from "react-bootstrap";
import { getGenreIcon, getGenreTheme } from "./genreIcons";
import {useNavigate} from 'react-router-dom'
import { BOOK_ROUTE } from "../utils/consts";

const getName = (value) =>
  typeof value === "string" ? value : value?.name || "";

const BookItem = ({ book, onSelect }) => {
  const genreName = getName(book.genre) || "Fiction";
  const authorName = getName(book.author) || "Unknown author";
  const GenreIcon = getGenreIcon(genreName);
  const themeClass = getGenreTheme(genreName);
  const starPath = `${process.env.PUBLIC_URL}/star.svg`;
  const navigate = useNavigate()

  return (
    <Col md={3} className="bookitem_col" onClick={() => navigate(BOOK_ROUTE + '/' + book.id)}>
      <div className="bookitem_card" onClick={() => onSelect?.(book)}>
        <div className={`bookitem_cover ${themeClass}`}>
          <div className="bookitem_pattern" />
          <div className="bookitem_cover-frame" />
          <div className="bookitem_content">
            <span className="bookitem-icon bookitem-icon--lg">
              <GenreIcon />
            </span>
            <span className="bookitem-genre-tag">{genreName}</span>
            <span className="bookitem-rule" />
            <span className="bookitem-title-cover">{book.name}</span>
            <span className="bookitem-author-cover">{authorName}</span>
          </div>
          <div></div>
        </div>
        <div>
          <div className="bookitem_undercover">
            <span className="bookitem-undercover_genre">{genreName}</span>
            <span className="bookitem-undercover_name">{book.name}</span>
            <span className="bookitem-undercover-author">{authorName}</span>

            <div className="bookitem-undercover-container">
              <span className="bookitem-undercover-price">$0</span>
              <span className="bookitem-undercover-rating">
                <img src={starPath} alt="Rating" width="14" height="14" />{" "}
                {book.rating}
              </span>
            </div>
            <button className="bookitem-undercover-button">+</button>
          </div>

        </div>
      </div>
    </Col>
  );
};

export default BookItem;
