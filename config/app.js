module.exports = {
    appPort: 8787,
    appHost: 'localhost',
    mongoUrl: 'mongodb://localhost:27017/my-data-base',
    jwt: {
        secret: 'hillel it school',
        tokens: {
            access: {
                type: 'access',
                expiresIn: '1m',
            },
            refresh: {
                type: 'refresh',
                expiresIn: '15m',
            }
        }
    }
};