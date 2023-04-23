import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { RoutesService } from '../../services/routes.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  loadingDealer = true;
  dealer!: any;
  isAuth: boolean = false;
  urls = new Array<string>();
  fileUploading = false;
  fileUrl = new Array<string>();
  id!: any;
  db !: string;

  constructor(public routerService: RouterService, private authService: AuthService,
    private routesService: RoutesService) { }


  ngOnInit(): void {
    document.getElementById("head")?.scrollIntoView();
    this.db = this.routesService.baseUrl
    this.routerService.setRoute("/profil");
    if (localStorage.getItem("placeUser") != null) {
      const local: any = localStorage.getItem("placeUser")
      this.dealer = JSON.parse(local);
      console.log(this.dealer)

    } else {
      this.loadingDealer = false;
      this.isAuth = false;
    }

  }






}
