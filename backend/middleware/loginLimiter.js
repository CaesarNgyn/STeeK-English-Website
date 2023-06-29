const rateLimit = require('express-rate-limit')
const { logEvents } = require('./logger')

//prevent abuse or brute-force password attack
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limit each IP to 5 login requests per `window` per minute
  message:
    { message: 'Quá nhiều lần đăng nhập từ địa chỉ IP này, thử lại sau 60 giây!' },
  handler: (req, res, next, options) => {
    logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    res.status(options.statusCode).send(options.message)
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = loginLimiter