const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.post('/signup', async (req, res) => {
    try {
        const { name, college, number, email, username } = req.body
        try {
            user = await User.create({
                name,
                college,
                number,
                email,
                username
            })
            return res.send(user)
        } catch {
            return res.sendStatus(409)
        }
    }
    catch {
        return res.sendStatus(400)
    }
})

router.get('/hndcjmfvhngbutgujrifkeod', async (req, res) => {
    const users = await User.find({})
    res.send(users)
})

module.exports = router