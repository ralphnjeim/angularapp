import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app01';
  data: ServiceInfo[] = [];
  ngOnInit() {
    fetch('https://ralphnjeim.herokuapp.com/data')
      .then(response => response.json())
      .then(json => {
        json.forEach((x: any) => {
          let svc = new ServiceInfo();
          svc.title = x.Title;
          svc.description = x.Description;
          svc.biClass = x.Icon;
          this.data.push(svc);
        });
      })
  }
}

class ServiceInfo {
  title: string = ""
  description: string = ""
  biClass: string = ""
}

