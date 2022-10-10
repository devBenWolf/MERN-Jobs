import User from "../models/User.js"
import {StatusCodes} from "http-status-codes"
import {BadRequestError, UnauthenticatedError} from "../errors/index.js"

const register = async(req, res, next) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        throw new BadRequestError(`Please provide all required values.`)
    }
    
    const userExists = await User.findOne({email})
    if (userExists) {
        throw new BadRequestError(`Email already in use`)
    }

    const user = await User.create({name, email, password})
    const token = user.createJWT()

    // Cannot restrict what is sent back in response due to User.create(). This is a hardcoded workaround to receive only
    // email, name, lastName, location and token:
    res.status(StatusCodes.CREATED).json({
        user: {
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            location: user.location
        },
        token
    })

}

const login = async(req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        throw new BadRequestError(`Please provide all credentials`)
    }
    const user = await User.findOne({email}).select('+password')

    if (!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect) {
        throw new UnauthenticatedError(`Invalid Credentials`)
    }
    const token = user.createJWT()
    // changeing user.password to undefined avoids sending the password
    // in the reponse
    user.password = undefined
    res.status(StatusCodes.OK).json({user, token, location: user.location})
}

const updateUser = async(req, res) => {
    res.send(`updateUser`)
}

export {register, login, updateUser}