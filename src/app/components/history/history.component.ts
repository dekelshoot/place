import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../services/controller.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: any = [];
  loading = false;
  constructor(private controllerService: ControllerService,
    public routerService: RouterService,) { }

  ngOnInit(): void {
    this.loading = true;
    this.controllerService.getHistory().then(
      (res: any) => {
        console.log(res);
        this.loading = false;
        this.history = res
      },
      (error) => {
        console.log(error)
        this.loading = false;
      }
    );
  }

  nextPage() {
    const link = this.history.link_next_page
    this.history = {}
    console.log(link)
    this.loading = true;
    this.controllerService.nextPage(link).then(
      (res: any) => {
        console.log(res);
        this.loading = false;
        this.history = res
      },
      (error) => {
        console.log(error)
        this.loading = false;
      }
    );
  }

  previousPage() {
    const link = this.history.link_previous_page
    this.history = {}
    this.loading = true;
    this.controllerService.previousPage(link).then(
      (res: any) => {
        console.log(res);
        this.loading = false;
        this.history = res
      },
      (error) => {
        console.log(error)
        this.loading = false;
      }
    );
  }
}
