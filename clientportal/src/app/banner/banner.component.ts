import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('false', style({opacity: 0})),
      transition('*=>false', [
        style({opacity: 1}),
        animate(600 )
      ]),
      transition('false=>*',
        animate(600, style({opacity: 1})))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {

  images:string[] = ["assets/img/hero-carousel/1.jpg","assets/img/hero-carousel/2.jpg","assets/img/hero-carousel/3.jpg","assets/img/hero-carousel/4.jpg","assets/img/hero-carousel/5.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
