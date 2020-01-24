import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  imageContainer = [
    { name: 'slides1', url: "../assets/image/img3.jpg", link:"#" },
    { name: 'slides2', url: "../assets/image/img4.png", link: "#" },
    { name: 'slides3', url: "../assets/image/img3.jpg", link: "#" },
    { name: 'slides4', url: "../assets/image/img4.png", link: "#" }
  ];

  slideOpts = {
    loop: true,
    effect: 'slide',
    speed: 500,
    slidesPerView: '1',
    paginationClickable: true,
    showNavButtons: false,
    autoplay: true,
    autoplayDisableOnInteraction: false
  };  

  constructor() {}

}
