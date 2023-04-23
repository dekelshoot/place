import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private daoService: DaoService) { }


  getHistory() {
    return new Promise<void>(
      (resolve, reject) => {
        this.daoService.getHistory().subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }

  nextPage(link: string) {
    return new Promise<void>(
      (resolve, reject) => {
        this.daoService.getPage(link).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }

  previousPage(link: string) {
    return new Promise<void>(
      (resolve, reject) => {
        this.daoService.getPage(link).subscribe(
          (res: any) => {
            console.log(res)
            resolve(res)
          },
          error => {
            console.log(error)
            reject(error)
          }

        )
      }
    );
  }


}
