module.exports = {
    appPort: 8787,
    appHost: 'localhost',
    mongoUrl: 'mongodb://localhost:27017/my-data-base',
    jwt: {
        secret: 'hillel it school',
        tokens: {
            access: {
                type: 'access',
                expiresIn: '2m',
            },
            refresh: {
                type: 'refresh',
                expiresIn: '3m',
            }
        }
    }
};