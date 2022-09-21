import { StatusCodes } from "http-status-codes"

const errorHandler = (err, req, res, next) => {
    console.log(err)
    const defaultError = {
        statusCode: err.statusCode ? err.statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message ? err.message : "Something went wrong, please try again later"
    }
    if (err.name === "ValidationError") {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.message = Object.values(err.errors).map((item) => item.message).join(",")
    }
    if (err.code && err.code === 11000) {
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.message = `${Object.keys(err.keyPattern)} is already in use.`
    }
    res.status(defaultError.statusCode).json({msg: defaultError.message})
}

export default errorHandler