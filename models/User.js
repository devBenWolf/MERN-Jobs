import mongoose from "mongoose"
import bcryptjs from "bcryptjs"

// Email validation
import validator from "validator"
import  jwt  from "jsonwebtoken"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide first name"],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        validate: {
            validator: validator.isEmail, 
            message: "Please provide a valid email"
        },
        unique: true
    },
    lastName: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 20,
        default: "last name"
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6
    },
    location: {
        type: String,
        default: "Springdale, UT",
        trim: true,
        maxlength: 25
    }
})

UserSchema.pre('save', async function() {
    const salt = await bcryptjs.genSalt()
    this.password = await bcryptjs.hash(this.password, salt)
})

UserSchema.methods.createJWT = function() {
    console.log(this)
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

export default mongoose.model(`User`, UserSchema)