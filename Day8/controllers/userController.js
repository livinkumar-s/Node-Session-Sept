import User from "../model/User.js"

export const addUser = async (req, res) => {
    try {
        const body = req.body
        await User.create(body)
        res.status(200).json({
            sucess: true, message: "User Added"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false, message: "Something went Wrong"
        })
    }
}
export const getAllUser = async (req, res) => {
    try {
        const data=await User.find()
        res.status(200).json({
            sucess: true, data
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false, message: "Something went Wrong"
        })
    }
}
export const getOneUser = async (req, res) => {
    try {
        const userId=req.params.id
        const userData=await User.findById(userId)
        res.status(200).json({
            sucess: true,userData
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false, message: "Something went Wrong"
        })
    }
}
export const updateUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false, message: "Something went Wrong"
        })
    }
}
export const deleteUser = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({
            sucess: false, message: "Something went Wrong"
        })
    }
}