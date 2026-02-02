# Flight Monitor - Observer Pattern Implementation

A TypeScript application that monitors real-time flight data using the Observer design pattern. The program fetches flight information from the OpenSky Network API and notifies registered observers whenever the flight status changes.

## Project Structure

```
src/
├── FlightMonitor.ts        # Main entry point
├── FlightFeed.ts           # Subject that fetches and tracks flight data
├── Subject.ts              # Abstract base class for observable subjects
├── Observer.ts             # Observer interface
├── FlightStatusObserver.ts # Displays current flight status
├── FlightDeltaObserver.ts  # Displays changes between updates
└── entity/
    ├── Flight.ts           # Flight data model
    └── FlightStates.ts     # Collection of flight states
```

## Observer Pattern Implementation

The Observer pattern allows objects to subscribe to events and be notified when those events occur.

**Subject (FlightFeed):** Maintains a list of observers and notifies them when the flight property changes. Extends the abstract Subject base class.

**Observer Interface:** Defines the `update(flight)` method that all observers must implement.

**Concrete Observers:**
- `FlightStatusObserver` - Prints the current flight status including transponder ID, call sign, country of origin, longitude, latitude, velocity, and altitude.
- `FlightDeltaObserver` - Tracks the previous flight state and displays the difference in longitude, latitude, velocity, and altitude between updates.

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Running the Application

Compile and run:

```bash
npx tsc && node dist/FlightMonitor.js
```

The program will fetch a flight from the OpenSky Network API and display updates every 60 seconds until the flight ends.

## Sample Output

```
=== Flight Status Update ===
Transponder ID (icao24): 39de4f
Call Sign: TVF24JA 
Country of Origin: France
Longitude: -6.2721
Latitude: 41.519
Velocity: 246.47
Altitude: 11148.06
============================
=== Flight Delta (Initial) ===
No previous data - this is the first update
==============================
```

After subsequent updates:

```
=== Flight Status Update ===
Transponder ID (icao24): 39de4f
Call Sign: TVF24JA 
Country of Origin: France
Longitude: -6.1234
Latitude: 41.6789
Velocity: 250.00
Altitude: 11200.00
============================
=== Flight Delta ===
Longitude Delta: 0.1487
Latitude Delta: 0.1599
Velocity Delta: 3.53
Altitude Delta: 51.94
====================
```

## Data Source

Flight data is provided by the OpenSky Network API: https://opensky-network.org/
