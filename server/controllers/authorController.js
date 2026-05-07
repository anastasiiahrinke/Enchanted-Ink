const {Author} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class authorController {
    async create (req, res) {
        const {name} = req.body;
        const author = await Author.create({name})
        return res.json(author)
    }

    async getAll (req, res) {
        const author = await Author.findAll()
        return res.json(author)
    }
}

module.exports = new authorController