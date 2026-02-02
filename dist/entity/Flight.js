"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
class Flight {
    constructor() {
        this.icao24 = "";
        this.callsign = "";
        this.origin_country = "";
        this.time_position = 0;
        this.last_contact = 0;
        this.longitude = 0.0;
        this.latitude = 0.0;
        this.baro_altitude = 0.0;
        this.on_ground = false;
        this.velocity = 0.0;
        this.true_track = 0.0;
        this.vertical_rate = 0.0;
        this.sensors = [];
        this.geo_altitude = 0.0;
        this.squawk = null;
        this.spi = false;
        this.position_source = 0;
    }
}
exports.Flight = Flight;
