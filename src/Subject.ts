import { Observer } from "./Observer";
import { Flight } from "./entity/Flight";

export abstract class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  protected notifyObservers(flight: Flight | null): void {
    for (const observer of this.observers) {
      observer.update(flight);
    }
  }
}
