import userModel from "./model.js";
import validator from "../../middleware/validator/user-validator.js";
import formHandler from "../../middleware/multer/index.js";
import passport from "passport";
import config from "config";

const clientDomain = config.get("serverConfig.cors.domain");

export default {
  addUser: [
    formHandler.uploadFields(),
    validator.validate(),
    async (req, res) => {
      await userModel.addUser({
        email: req.body.email,
        name: req.body.username,
        password: req.body.password,
        gender: req.body.gender || "Unknown",
        birthday: { date: req.body.birthday },
        UIColor: req.body.UIColor || "#DB3E00",
        avatar: req.files[0],
      });
      res.redirect("/login");
    },
  ],
  loginUser: [
    passport.authenticate("login"),
    (req, res) => {
      res.redirect("/user/me");
    },
  ],
  logoutUser(req, res) {
    req.logout();
    res.redirect("/login");
  },
  async getUser(req, res) {
    try {
      const user = await userModel.getUserByEmail(req.session.passport.user);
      await res.json({
        name: user.name,
        avatar: {
          imgName: user.avatar.originalname,
          buffer: user.avatar.buffer,
        },
        UIColor: user.UIColor,
      });
    } catch (error) {
      await res.json({ name: "" });
    }
  },
  updateUser: [
    formHandler.uploadFields(),
    async (req, res) => {
      const { name, gender, birthday, UIColor, avatar } = req.body;
      const ok = await userModel.updateUser(req.session.passport.user, {
        name,
        gender,
        birthday,
        UIColor,
        avatar,
      });
      if (ok) {
        res.json({ message: "You've updated your data!" });
      } else res.status(400).end();
    },
  ],
  confirmUnauthentication(req, res, next) {
    if (req.isAuthenticated()) res.redirect("/user/me");
    else res.end();
  },
  verifyAuthentication(req, res, next) {
    req.isAuthenticated() ? next() : res.redirect("/login");
  },
};
