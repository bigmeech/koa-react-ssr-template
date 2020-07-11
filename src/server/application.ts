import Koa from 'koa'
import Router from 'koa-router';
import { Config } from "./config";

export function getApplication(config: Config) {
    const app = new Koa();
    return app;
}
