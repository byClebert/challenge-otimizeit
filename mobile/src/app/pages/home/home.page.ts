import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  contacts: any = { name: '', email: '' }

  constructor(
    private navCtrl: NavController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  listContacts() {
    this.apiService.getContacts()
      .then(value => {
        this.contacts = value[0]
      })
      .catch(err => {
        console.error(err)
      })
  }

  toNewContact() {
    this.navCtrl.navigateForward('new-contact')
  }

}
