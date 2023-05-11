const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service")

module.exports = function(req, res, next) {
    try {
        const autorizationHeader = req.headers.authorization;
        if(!autorizationHeader) {
            return next(ApiError.UnauthorizedErorr());
        }
        
        const accessToken = autorizationHeader.split(' ')[1];
        if(!accessToken) {
            return next(ApiError.UnauthorizedErorr());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData) {
            return next(ApiError.UnauthorizedErorr());
        }
        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedErorr());
    }
}