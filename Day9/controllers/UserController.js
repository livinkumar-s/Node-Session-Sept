import User from "../models/User.js";
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken";

export const signUp = async (req, res) => {
    try {
        const userData = req.body
        if (!userData.name || !userData.mail || !userData.password || !userData.username) {
            return res.status(400).json({ success: false, message: "Please provide all required field" })
        }


        const existingUser = await User.find({ $or: [{ mail: userData.mail }, { username: userData.username }] })


        if (existingUser.length > 0) {
            return res.status(400).json({ success: false, message: "User already exist" })
        }

        const hashedPassword = await bcryptjs.hash(userData.password, 10)

        await User.create({
            name: userData.name,
            mail: userData.mail,
            password: hashedPassword,
            username: userData.username
        })

        res.status(200).json({ success: true, message: "User Registered" })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: "Something went Wrong"
        })
    }
}
export const login = async (req, res) => {
    try {
        const userData = req.body
        if (!userData.mail || !userData.password) {
            return res.status(400).json({ success: false, message: "Please provide all required field" })
        }

        const existingUser = await User.find({ $or: [{ mail: userData.mail }] }) //[]

        if (!existingUser.length > 0) {
            return res.status(400).json({ success: false, message: "User Not registered" })            
        }
        const isPassOk = await bcryptjs.compare(userData.password, existingUser[0].password)

        if (!isPassOk) {
            return res.status(400).json({ success: false, message: "Invalid Credintials..!" })
        }

        const token = jsonwebtoken.sign({ _id: existingUser._id, username: existingUser.username }, process.env.SECTRET_KEY, { expiresIn: "24h" })

        res.status(200).json({ success: true, message: "Logged In", token })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: "Something went Wrong"
        })
    }
}