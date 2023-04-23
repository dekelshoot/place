import { Component, OnInit } from '@angular/core';

import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor(public routerService: RouterService) { }

  ngOnInit(): void {
    document.getElementById('head')?.scrollIntoView();
    this.routerService.setRoute("/");


  }

  start() {
    if (localStorage.getItem("placeUser") != null) {
      this.routerService.route('start')
    }
    else {
      this.routerService.route('/auth/sign-in')
    }
  }

}
