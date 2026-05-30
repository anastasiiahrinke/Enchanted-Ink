import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._authors = [
      {
        id: 1,
        name: "Stephen King",
        createdAt: "2026-04-16T16:12:50.084Z",
        updatedAt: "2026-04-16T16:12:50.084Z",
      },
      {
        id: 2,
        name: "Ernest Hemingway",
        createdAt: "2026-04-16T16:13:04.945Z",
        updatedAt: "2026-04-16T16:13:04.945Z",
      },
      {
        id: 3,
        name: "Mark Twain",
        createdAt: "2026-04-16T16:13:14.452Z",
        updatedAt: "2026-04-16T16:13:14.452Z",
      },
      {
        id: 4,
        name: "Jack London",
        createdAt: "2026-04-16T16:13:26.495Z",
        updatedAt: "2026-04-16T16:13:26.495Z",
      },
      {
        id: 5,
        name: "Margaret Mitchell",
        createdAt: "2026-04-16T16:16:02.771Z",
        updatedAt: "2026-04-16T16:16:02.771Z",
      },
      {
        id: 6,
        name: "Joan Rowling",
        createdAt: "2026-05-05T20:20:25.549Z",
        updatedAt: "2026-05-05T20:20:25.549Z",
      },
    ];
    this._genres = [
      {
        id: 1,
        name: "Fantasy",
        createdAt: "2026-04-16T15:20:00.841Z",
        updatedAt: "2026-04-16T15:20:00.841Z",
      },
      {
        id: 2,
        name: "Mystery",
        createdAt: "2026-04-16T16:04:07.815Z",
        updatedAt: "2026-04-16T16:04:07.815Z",
      },
      {
        id: 3,
        name: "Romance",
        createdAt: "2026-04-16T16:06:27.969Z",
        updatedAt: "2026-04-16T16:06:27.969Z",
      },
      {
        id: 4,
        name: "Drama",
        createdAt: "2026-04-16T16:06:41.681Z",
        updatedAt: "2026-04-16T16:06:41.681Z",
      },
      {
        id: 5,
        name: "Horror",
        createdAt: "2026-04-16T16:06:50.678Z",
        updatedAt: "2026-04-16T16:06:50.678Z",
      },
      {
        id: 6,
        name: "Adventure",
        createdAt: "2026-04-16T16:07:14.616Z",
        updatedAt: "2026-04-16T16:07:14.616Z",
      },
      {
        id: 7,
        name: "Literary Fiction",
        createdAt: "2026-05-07T17:46:04.875Z",
        updatedAt: "2026-05-07T17:46:04.875Z",
      },
    ];
    this._books = [
      {
        id: 1,
        name: "It",
        price: 39,
        rating: 0,
        img: "5191658b-3c58-43ab-a6e7-1c76e7bdf030.jpg",
        createdAt: "2026-05-05T21:14:48.423Z",
        updatedAt: "2026-05-05T21:14:48.423Z",
        basketBookId: null,
        genreId: 5,
        authorId: 1,
      },
      {
        id: 2,
        name: "Harry Potter and the philosopher's stone",
        price: 28,
        rating: 0,
        img: "f1c45791-63cf-4373-897d-0ba280d5accf.jpg",
        createdAt: "2026-05-07T17:44:09.486Z",
        updatedAt: "2026-05-07T17:44:09.486Z",
        basketBookId: null,
        genreId: 1,
        authorId: 6,
      },
      {
        id: 3,
        name: "The Old Man and the Sea",
        price: 25,
        rating: 0,
        img: "e8900c92-ef2a-46b8-9cc5-27cc5bf939ed.jpg",
        createdAt: "2026-05-07T17:46:22.751Z",
        updatedAt: "2026-05-07T17:46:22.751Z",
        basketBookId: null,
        genreId: 7,
        authorId: 2,
      },
      {
        id: 4,
        name: "The Adventures of Huckleberry Finn",
        price: 35,
        rating: 0,
        img: "58d4b538-9ac4-42fe-b64a-f74b0e3c453c.jpg",
        createdAt: "2026-05-07T17:47:06.723Z",
        updatedAt: "2026-05-07T17:47:06.723Z",
        basketBookId: null,
        genreId: 6,
        authorId: 3,
      },
      {
        id: 5,
        name: "The Call of the Wild ",
        price: 19,
        rating: 0,
        img: "e43e9a30-d029-44d8-8287-a318b9a0be42.jpg",
        createdAt: "2026-05-07T17:48:22.074Z",
        updatedAt: "2026-05-07T17:48:22.074Z",
        basketBookId: null,
        genreId: 6,
        authorId: 4,
      },
      {
        id: 6,
        name: "Gone with the Wind",
        price: 27,
        rating: 0,
        img: "c9c45f3c-30fc-4101-aad8-b3498893f35e.jpg",
        createdAt: "2026-05-07T17:49:06.080Z",
        updatedAt: "2026-05-07T17:49:06.080Z",
        basketBookId: null,
        genreId: 3,
        authorId: 5,
      },
    ];
    makeAutoObservable(this);
  }
  setAuthors(authors) {
    this._authors = authors;
  }
  setGenres(genres) {
    this._genres = genres;
  }
  setBooks(books) {
    this._books = books;
  }
  get authors() {
    return this._authors;
  }
  get genres() {
    return this._genres;
  }
  get books() {
    return this._books;
  }
}
