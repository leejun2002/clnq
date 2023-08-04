"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/profile", ctrl.output.profile);
router.get("/logout", ctrl.output.logout);
router.get("/hanstone", ctrl.output.hanstone);
router.get("/homesash", ctrl.output.homesash);
  router.get("/normal", ctrl.output.normal);
  router.get("/balcony", ctrl.output.balcony);
  router.get("/system", ctrl.output.system);
  router.get("/rehau", ctrl.output.rehau);
  router.get("/aluminium", ctrl.output.aluminium);
  router.get("/specialuse", ctrl.output.specialuse);
  router.get("/sheetcolor", ctrl.output.sheetcolor);
  router.get("/handle", ctrl.output.handle);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/makeSession", ctrl.process.makeSession);


module.exports = router;