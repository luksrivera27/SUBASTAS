const router = require('express').Router()
const auth = require('../middleware/auth')
const userCtrl = require('../controllers/userCtrl')
//Todas las rutas y sus respectivos métodos.
router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/infor', auth, userCtrl.getUserInfor)

router.get('/logout', userCtrl.logout)

router.post('/refresh_token', userCtrl.getAccessToken)

module.exports = router