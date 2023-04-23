import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  dealerSubject = new Subject<any>();
  dealer!: any;
  constructor() {
    this.getDealer()
  }

  emitDealer() {
    this.dealerSubject.next(this.dealer);
  }
  getDealer() {
    if (localStorage.getItem("placeUser") != null) {
      const local: any = localStorage.getItem("placeUser")
      this.dealer = JSON.parse(local);
      this.emitDealer()
    } else {

    }
  }
}
