import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  query!: string;
  constructor(private activatedRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.query = this.activatedRoute.snapshot.queryParams?.['query'];

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }


}
