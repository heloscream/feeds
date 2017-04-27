import { Component ,OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   currentNav:string;
    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) { }
    ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        this.currentNav =currentRoute.snapshot.data['name'];
      })
  }

}

// import { Component ,OnInit } from '@angular/core';
// import 'rxjs/add/operator/filter';
// import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }
//   ngOnInit() {
//   this.router.events
//     .filter(event => event instanceof NavigationEnd)
//     .subscribe(event => {
//       let currentRoute = this.route.root;
//       while (currentRoute.children[0] !== undefined) {
//         currentRoute = currentRoute.children[0];
//       }
//       currentRoute.snapshot.data['name'];
//     })
// }
//
//
// }
