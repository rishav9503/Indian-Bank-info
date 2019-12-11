import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any = [];
  color = 'primary'
  res: any = [];
  loading: boolean = false
  uri = 'https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchBank()
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // getData(){
  //   return
  //   this.http.get(this.uri).map((res: HttpResponse) => res.JSON)
  // }
  fetchBank() {
    this.loading = true
    this.http.get(this.uri).subscribe(data => {
      this.dataSource = data;
      console.log(data);
      this.loading = false


    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");

        } else {
          console.log("Server-side error occured.");
        }
        this.loading = false
      });
  }

}
