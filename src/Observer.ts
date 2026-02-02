import { Flight } from "./entity/Flight";

export interface Observer {
  update(flight: Flight | null): void;
}
