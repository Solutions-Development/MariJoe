const Express = require("express");
const { Router } = require("express");
const server = Express();
const bodyParser = require("body-parser");
export const fs = require("fs");
export const router = Router();
export type firewall = (req: any, reply: any, next?: any) => void;

export const connect = async (port: number) => { Promise.resolve(server.listen(port)).then(() => console.log("Server started."))};
export const integrate = async (options: any) => { server.use(options)};
export const declare = async (options: any, value: any) => {server.set(options, value)};
export const config = async (options: any, optionsTwo: any) => {server.use(options, optionsTwo)};

export async function get(route: string, controller: any) { router.get(route, controller) };
export async function post(route: string, controller: any) { router.post(route, controller) };

export async function debug(value: boolean) {
    if(value === true) {
        const logger = require("morgan");
        server.use(logger('common'));
    } else {
        return;
    }
}
export async function parse(value: string) {
    server.use(bodyParser.urlencoded({ extended: true, limit: value }));
}