import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularprojects';

  partnersArray: any = [
    {
      imgName: "assets/images/New Project (1).png"
    },
    {
      imgName: "assets/images/New Project (2).png"
    },
    {
      imgName: "assets/images/New Project (3).png"
    },
    {
      imgName: "assets/images/New Project (4).png"
    },
    {
      imgName: "assets/images/New Project (5).png"
    },
    {
      imgName: "assets/images/New Project.png"
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
