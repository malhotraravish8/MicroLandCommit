import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring-resources',
  templateUrl: './monitoring-resources.component.html',
  styleUrls: ['./monitoring-resources.component.css']
})
export class MonitoringResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onRightClick() {
    return false;
  }
}
