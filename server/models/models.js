const {DataTypes} = require('sequelize')
const sequelize  = require('../db')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketBooks = sequelize.define('basket_books', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const BookInfo = sequelize.define('book_info', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const GenreAuthor = sequelize.define('genre_author', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketBooks)
BasketBooks.belongsTo(Basket)

BasketBooks.hasOne(Book)
Book.belongsTo(BasketBooks)

Book.hasMany(BookInfo)
BookInfo.belongsTo(Book)

Book.hasMany(Rating)
Rating.belongsTo(Book)

Genre.hasMany(Book)
Book.belongsTo(Genre)
Author.hasMany(Book)
Book.belongsTo(Author)

Genre.belongsToMany(Author, {through: GenreAuthor})
Author.belongsToMany(Book, {through: GenreAuthor})

module.exports = {
    User,
    Basket,
    BasketBooks,
    Book,
    BookInfo,
    Genre,
    Rating,
    Author,
    GenreAuthor
}