import { Subject } from "./ISubject.js";

export interface Observer {
  update(subject: Subject): void;
}
