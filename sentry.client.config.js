"use strict";
// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
Object.defineProperty(exports, "__esModule", { value: true });
var Sentry = require("@sentry/nextjs");
Sentry.init({
    dsn: "https://b69605b3733c39532caa9e3ce487ff59@o4508182036283392.ingest.de.sentry.io/4508215071604816",
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
    replaysOnErrorSampleRate: 1.0,
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,
    // You can remove this option if you're not planning to use the Sentry Session Replay feature:
    integrations: [
        Sentry.replayIntegration({
            // Additional Replay configuration goes in here, for example:
            maskAllText: true,
            blockAllMedia: true,
        }),
    ],
});
