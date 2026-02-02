import { FlightFeed } from "./FlightFeed";
import { FlightStatusObserver } from "./FlightStatusObserver";
import { FlightDeltaObserver } from "./FlightDeltaObserver";

main();

function main() {
  let feed = new FlightFeed();
  
  // Create observers
  let statusObserver = new FlightStatusObserver();
  let deltaObserver = new FlightDeltaObserver();
  
  // Register observers with the flight feed
  feed.addObserver(statusObserver);
  feed.addObserver(deltaObserver);
  
  // Start monitoring flights
  feed.start();
}
