export const response = (res,status, message, data) => {
    return res.status(status).json({
        message : message,
        result : data
    })
}