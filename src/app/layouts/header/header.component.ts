import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../services/router.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DealerService } from '../../services/dealer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dealer!: any;
  dealerSubscription!: Subscription;
  db = "https://placecmr.onrender.com"
  constructor(public routerService: RouterService, public router: Router,
    private dealerService: DealerService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.router.url)
    if (localStorage.getItem("placeUser") != null) {
      const local: any = localStorage.getItem("placeUser")
      this.dealer = JSON.parse(local);
      console.log(this.dealer)

    }
    this.dealerService.getDealer()
    this.dealerSubscription = this.dealerService.dealerSubject.subscribe(
      (dealer: any) => {
        this.dealer = dealer
      }
    );
  }

  signOut() {
    localStorage.removeItem('placeUser')
    this.routerService.route('auth/sign-in')
  }
}
