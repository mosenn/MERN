
const User = require('../model/User')
const registerUser = async (req , res) => {
    const {username,  password} = req.body
    console.log("username:", username , "password:" ,password)
    try {
         const createUser = await User.create({username , password})
        return res.status(201).json(createUser)
    }catch(err) {
        console.log(err)

    }

}

module.exports = {registerUser}