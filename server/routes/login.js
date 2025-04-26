import express from "express";
import User from "../models/user.js";
import bcrypt from 'bcrypt'

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const ifUserExist = await User.findOne({email});
        if(ifUserExist) {
            return res.status(400).json({message : "User already exist !"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User( {
            name,
            email,
            password:hashedPassword
        })

        await newUser.save();

        res.send("Sign Up success !")
    }
    catch(error) {
        console.log(error.message);
        res.send(error.message);
    }
})

export default router;