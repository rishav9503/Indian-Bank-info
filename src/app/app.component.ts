import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fyleApp';


  // ngOnInit() {
  //   this.fetchBank()
  // }



  // fetchBank() {

  //   this.http.get(this.uri).subscribe(data => {
  //     this.res = data;
  //     console.log(data);
  //   },
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         console.log("Client-side error occured.");
  //       } else {
  //         console.log("Server-side error occured.");
  //       }
  //     });
  // }
}
