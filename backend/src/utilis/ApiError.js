class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ApiError(400, message);
    }
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try again!`;
        err = new ApiError(400, message);
    }
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is expired, Try again!`;
        err = new ApiError(400, message);
    }
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}`;
        err = new ApiError(400, message);
    }

    const errorMessage = err.errors
        ? Object.values(err.errors)
            .map((error) => error.message)
            .join(" ")
        : err.message;

    return res.status(err.statusCode).json({
        success: false,
        // message: err.message,
        message: errorMessage,
    });
};

export { ApiError };