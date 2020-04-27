import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage implements OnInit {

  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async newAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: 'O contato foi criado com sucesso e já encontra-se em sua lista de contatos.',
      buttons:['OK']
    })

    return alert.present()
  }

}
