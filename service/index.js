import express from 'express'
// Create express router
const router = express.Router()
import controller from '../controller'
import {api} from '../api/api'
// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/login',controller.judgeController.login)

function auth(req){
  return api.post('/api/auth',req.body)
}

// router.post('/logout', (req, res) => {
//   delete req.session.authUser
//   res.json({ ok: true })
// })

// Export the server middleware
export default {
  path: '/service',
  handler: router
}