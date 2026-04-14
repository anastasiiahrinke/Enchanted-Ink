const {Router} = require('express')
const router = new Router()

const authorRoute = require('./authorRoute')
const bookRoute = require('./bookRoute')
const genreRoute = require('./genreRoute')
const userRoute = require('./userRoute')

router.use('/author', authorRoute)
router.use('/book', bookRoute)
router.use('/genre', genreRoute)
router.use('/user', userRoute)

module.exports = router