require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')

const app = express()

app.use(express.json())
app.use('/', require('./routes/routes'))

mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(async () => {
    await User.init()
    console.log("Connected to the database")

    app.listen(process.env.PORT || 3000, () => {
        console.log("Connected to " + process.env.PORT)
    })
})
