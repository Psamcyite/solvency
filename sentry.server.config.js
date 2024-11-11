"use strict";
// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
Object.defineProperty(exports, "__esModule", { value: true });
var Sentry = require("@sentry/nextjs");
Sentry.init({
    dsn: "https://b69605b3733c39532caa9e3ce487ff59@o4508182036283392.ingest.de.sentry.io/4508215071604816",
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',
});
