import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computeresource',
  templateUrl: './computeresource.component.html',
  styleUrls: ['./computeresource.component.css']
})
export class ComputeresourceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onRightClick() {
    return false;
  }
}
