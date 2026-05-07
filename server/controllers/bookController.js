const {Book, BookInfo} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')
const uuid = require('uuid')
const path = require('path')

class bookController {
    async create (req, res, next) {
        try {
            let {name, price, genreId, authorId, info} = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const book = await Book.create({name, price, genreId, authorId, img: fileName});
            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    BookInfo.create({
                        title: i.title,
                        description: i.description,
                        bookId: book.id
                    })
                })
            }
            return res.json(book)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        let {genreId, authorId, limit, page} = req.query;
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let books;
        if (!genreId && !authorId) {
            books = await Book.findAndCountAll({limit, offset})
        }
        if (genreId && !authorId) {
            books = await Book.findAndCountAll({where: {genreId}, limit, offset})
        }
        if (!genreId && authorId) {
            books = await Book.findAndCountAll({where: [authorId], limit, offset})
        }
        if (genreId && authorId) {
             books = await Book.findAndCountAll({where: {authorId, genreId}, limit, offset})
        }
        return res.json(books)
    }

    async getOne (req, res) {
        const {id} = req.params;
        const book = await Book.findOne({
            where: {id},
            include: [{model: BookInfo, as: 'info'}]
        })

        return res.json(book)
    }
}

module.exports = new bookController