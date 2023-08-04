"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");
const {informove} = require("../../util/informove");

// const users = {
//   id: ["test", "test2", "test3"],
//   psword: ["1234", "12345", "123456"],
// };

const output = {
  home: (req,res) => {
    logger.info(`GET / 304 "홈"`);
    let {user} = req.session;
    res.render("home/main", {user});
  },
  
  login: (req,res) => {
    logger.info(`GET /login 304 "로그인 페이지"`);
    res.render("home/login");
  },
  
  register: (req,res) => {
    logger.info(`GET /register 304 "회원가입 페이지"`);
    res.render("home/register");
  },

  profile: (req,res) => {
    if (req.session.user) {
      logger.info(`GET /profile 304 "프로필 페이지"`);
      let {user} = req.session;
      res.render("home/profile", {user});
    } else {
      res.send(informove("로그인이 필요합니다", "/"));
    }
  },

  logout: (req,res) => {
    logger.info(`GET /logout 304 "로그아웃"`);
    req.session.destroy(() => {
      req.session
    });
    res.redirect("/");
  },

  hanstone: (req,res) => {
    logger.info(`GET /hanstone 304 "칸스톤 페이지"`);
    res.render("home/hanstone");
  },

  homesash: (req,res) => {
    logger.info(`GET /homesash 304 "홈샤시 페이지"`);
    res.render("home/homesash");
  },

  normal: (req,res) => {
    logger.info(`GET /normal 304 "일반창 페이지"`);
    res.render("home/sash/normal");
  },

  balcony: (req,res) => {
    logger.info(`GET /balcony 304 "발코니창 페이지"`);
    res.render("home/sash/balcony");
  },

  system: (req,res) => {
    logger.info(`GET /system 304 "시스템창 페이지"`);
    res.render("home/sash/system");
  },

  rehau: (req,res) => {
    logger.info(`GET /rehau 304 "레하우창 페이지"`);
    res.render("home/sash/rehau");
  },

  aluminium: (req,res) => {
    logger.info(`GET /aluminium 304 "알루미늄창 페이지"`);
    res.render("home/sash/aluminium");
  },

  specialuse: (req,res) => {
    logger.info(`GET /specialuse 304 "특수용도창 페이지"`);
    res.render("home/sash/specialuse");
  },

  sheetcolor: (req,res) => {
    logger.info(`GET /sheetcolor 304 "시트컬러 페이지"`);
    res.render("home/sash/sheetcolor");
  },

  handle: (req,res) => {
    logger.info(`GET /handle 304 "핸들 페이지"`);
    res.render("home/sash/handle");
  },
};

const process = {
  login: async (req,res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
  
  register: async (req,res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  makeSession: (req,res) => {
    req.session.user = req.body;
    // console.log(req.session);
    res.json({msg: "success"});
  },
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
  if (response.err) {
      logger.error(
        `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.err}`
      );
  }  else {
      logger.info(
        `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${
          response.msg || ""
        }`
      );
  }
};