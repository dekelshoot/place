import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';

import { ArraysService } from 'src/app/services/arrays.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  mots!: string[]

  constructor(public arraysService: ArraysService,
    public routerService: RouterService) { }

  ngOnInit(): void {
    document.getElementById('head')?.scrollIntoView();
    this.routerService.setRoute("/");
    this.mots = this.arraysService.popularWords;

  }
  setActive() {
    document.querySelector(".recherches")?.classList.toggle("active")
  }




}
