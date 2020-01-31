import * as cn from "./controllers/main";
import * as _ from "./server";
const express: any = require("express");

_.config('/', _.router);

_.debug(true);
_.parse("50mb");
_.connect(process.env.POR);
_.declare('view engine', 'ejs');



_.config('/', express.static('assets'));
_.get('/', cn.root);
_.get("/image/:image/:name", cn.image);
