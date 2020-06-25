const mongoose = require ('mongoose')

const url = 'mongodb+srv://andrews:33542859@cluster0-kyyqb.mongodb.net/todo?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

module.exports = mongoose