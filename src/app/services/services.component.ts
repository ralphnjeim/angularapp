import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'service',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() biClass: string = ""


  constructor() { }

  ngOnInit() {
  }

}
