"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlightFeed_1 = require("./FlightFeed");
const FlightStatusObserver_1 = require("./FlightStatusObserver");
const FlightDeltaObserver_1 = require("./FlightDeltaObserver");
main();
function main() {
    let feed = new FlightFeed_1.FlightFeed();
    // Create observers
    let statusObserver = new FlightStatusObserver_1.FlightStatusObserver();
    let deltaObserver = new FlightDeltaObserver_1.FlightDeltaObserver();
    // Register observers with the flight feed
    feed.addObserver(statusObserver);
    feed.addObserver(deltaObserver);
    // Start monitoring flights
    feed.start();
}
