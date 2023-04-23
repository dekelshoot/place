import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequetesService {

  constructor(private http: HttpClient) { }

  //////////////////////// CRUD/////////////////////////////

  //recuper les informations de la bd
  get(base: any, id: any) {
    const local: any = localStorage.getItem("placeUser");
    let token = JSON.parse(local).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
      // 'X-CSRFToken': token
    });
    const requestOptions = { headers: headers };
    return this.http.get(`${base}/${id}`, requestOptions);
  }

  getAll(base: any) {
    const local: any = localStorage.getItem("placeUser");
    let token = JSON.parse(local).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
      // 'X-CSRFToken': token
    });
    const requestOptions = { headers: headers };
    return this.http.get(base, requestOptions);
  }

  //inserer les informations dans la bd
  post(base: any, data: any) {
    console.log(base, data)
    return this.http.post(base, data, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        }
      )
    });
  }


  //inserer les informations dans la bd
  postWithToken(base: any, data: any) {
    console.log(base, data)
    const local: any = localStorage.getItem("placeUser");
    let token = JSON.parse(local).token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
      // 'X-CSRFToken': token
    });

    const requestOptions = { headers: headers };
    console.log(base, data, token)

    return this.http.post(base, data, requestOptions);
  }

  postFileWithToken(base: any, data: any) {
    console.log(base, data)
    const local: any = localStorage.getItem("placeUser");
    let token = JSON.parse(local).token;
    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      'Authorization': `Token ${token}`,
      // 'X-CSRFToken': token
    });

    const requestOptions = { headers: headers };
    console.log(base, data, token)

    return this.http.post(base, data, requestOptions);
  }

  //mettre ajour les informations dans la bd
  update(base: any, id: any, data: any) {
    return this.http.put(`${base}/${id}`, data);
  }

  //supprimer les informations dans la bd
  delete(base: any, id: any) {
    return this.http.delete(`${base}/${id}`);
  }
  deleteAll(base: any) {
    return this.http.delete(base);
  }
}
