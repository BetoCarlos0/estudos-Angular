import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ipAddress = '';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getIpAddress();
  }

  getIpAddress(){
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any) => {
      this.ipAddress = res.ip;
    });
  }
}
