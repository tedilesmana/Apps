import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../classes/person';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: string[]= [];
  lists: Person[]= [];

  constructor(public navCtrl: NavController) {
    for(let x=1;x<=20;x++){
      this.items.push('Data Ke'+ x);
    }

    let p1 = new Person();
    p1.nama = 'Tedi Lesmana';
    p1.alamat = 'Cipinang';
    p1.telp = '082219378833';
    p1.photo = 'assets/imgs/img3.png';
    this.lists.push(p1);

    let p2 = new Person();
    p2.nama = 'Andika Eka';
    p2.alamat = 'Cipinang';
    p2.telp = '082219378833';
    p2.photo = 'assets/imgs/img3.png';
    this.lists.push(p2);

    let p3 = new Person();
    p3.nama = 'Annisa Rahma';
    p3.alamat = 'Cipinang';
    p3.telp = '082219378833';
    p3.photo = 'assets/imgs/img3.png';
    this.lists.push(p3);

  }

  onButton(){
    console.log('button di klik');
  }

  itemSelected(item){
    console.log(item);
  }

  onDetailPage(person){
    this.navCtrl.push(DetailPage,person);
  }

}
