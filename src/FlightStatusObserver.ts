import { Observer } from "./Observer";
import { Flight } from "./entity/Flight";

export class FlightStatusObserver implements Observer {
  update(flight: Flight | null): void {
    if (flight === null) {
      console.log("Flight over");
    } else {
      console.log("=== Flight Status Update ===");
      console.log(`Transponder ID (icao24): ${flight.icao24}`);
      console.log(`Call Sign: ${flight.callsign}`);
      console.log(`Country of Origin: ${flight.origin_country}`);
      console.log(`Longitude: ${flight.longitude}`);
      console.log(`Latitude: ${flight.latitude}`);
      console.log(`Velocity: ${flight.velocity}`);
      console.log(`Altitude: ${flight.baro_altitude}`);
      console.log("============================");
    }
  }
}
