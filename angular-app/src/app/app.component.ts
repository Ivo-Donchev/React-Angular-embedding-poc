import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  data: any = [];
  constructor(private http: HttpClient) {}
  iframeOpened = false

  openIFrame() {
    this.iframeOpened = true;
  }

  fetchData = () => 
    this.http.get(
      'http://localhost:8000/list/',
    ).subscribe((data: any) => {
      this.data = data;
    })

  ngOnInit() {
    this.fetchData();
    window.addEventListener('message', this.fetchData);
  }
}
