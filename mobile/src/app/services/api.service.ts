import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return this.http.get('https://us-central1-challenge-otimizeit.cloudfunctions.net/api/contacts').toPromise()
  }

}
