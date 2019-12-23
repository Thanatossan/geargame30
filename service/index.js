import express from "express";
// Create express router
const router = express.Router();
import controller from "../controller";

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.post("/login", controller.judgeController.login);
router.post("/logout", controller.judgeController.logout);
router.get("/authCheck", controller.judgeController.authenCheck);

// Export the server middleware
export default {
  path: "/service",
  handler: router
};
