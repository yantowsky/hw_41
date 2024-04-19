const products = require('../app/controllers/products');
const users = require('../app/controllers/users');
const auth = require('../app/controllers/auth');
const authMiddleware = require('../app/middleware/auth');

module.exports = (app) => {
    app.get('/products', authMiddleware, products.getAll);
    app.post('/products', authMiddleware, products.create);
    app.put('/products/:num', authMiddleware, products.update);
    app.delete('/products/:num', authMiddleware, products.remove);

    app.get('/users', users.getAll);
    app.post('/users', users.create);
    app.delete('/users/:num', users.remove);

    app.post('/login', auth.login);
    app.post('/refresh-tokens', auth.refreshTokens);
}