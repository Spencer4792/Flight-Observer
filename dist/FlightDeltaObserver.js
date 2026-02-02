"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightDeltaObserver = void 0;
const Flight_1 = require("./entity/Flight");
class FlightDeltaObserver {
    constructor() {
        this.previousFlight = null;
    }
    update(flight) {
        if (flight === null) {
            console.log("Flight over - no more deltas to display");
            this.previousFlight = null;
        }
        else if (this.previousFlight === null) {
            console.log("=== Flight Delta (Initial) ===");
            console.log("No previous data - this is the first update");
            console.log("==============================");
            this.previousFlight = this.copyFlight(flight);
        }
        else {
            const longitudeDelta = flight.longitude - this.previousFlight.longitude;
            const latitudeDelta = flight.latitude - this.previousFlight.latitude;
            const velocityDelta = flight.velocity - this.previousFlight.velocity;
            const altitudeDelta = flight.baro_altitude - this.previousFlight.baro_altitude;
            console.log("=== Flight Delta ===");
            console.log(`Longitude Delta: ${longitudeDelta}`);
            console.log(`Latitude Delta: ${latitudeDelta}`);
            console.log(`Velocity Delta: ${velocityDelta}`);
            console.log(`Altitude Delta: ${altitudeDelta}`);
            console.log("====================");
            this.previousFlight = this.copyFlight(flight);
        }
    }
    copyFlight(flight) {
        const copy = new Flight_1.Flight();
        copy.icao24 = flight.icao24;
        copy.callsign = flight.callsign;
        copy.origin_country = flight.origin_country;
        copy.time_position = flight.time_position;
        copy.last_contact = flight.last_contact;
        copy.longitude = flight.longitude;
        copy.latitude = flight.latitude;
        copy.baro_altitude = flight.baro_altitude;
        copy.on_ground = flight.on_ground;
        copy.velocity = flight.velocity;
        copy.true_track = flight.true_track;
        copy.vertical_rate = flight.vertical_rate;
        copy.sensors = flight.sensors ? [...flight.sensors] : [];
        copy.geo_altitude = flight.geo_altitude;
        copy.squawk = flight.squawk;
        copy.spi = flight.spi;
        copy.position_source = flight.position_source;
        return copy;
    }
}
exports.FlightDeltaObserver = FlightDeltaObserver;
