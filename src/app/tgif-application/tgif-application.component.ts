import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tgif-application',
  templateUrl: './tgif-application.component.html',
  styleUrls: ['./tgif-application.component.css']
})
export class TgifApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onRightClick() {
    return false;
  }
}
