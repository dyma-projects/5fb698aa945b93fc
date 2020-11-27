import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {}

  public addUser(name: string) {
    this.users.next(this.users.value.concat([name]));
  }
}
