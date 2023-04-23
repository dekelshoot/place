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

  }


}
