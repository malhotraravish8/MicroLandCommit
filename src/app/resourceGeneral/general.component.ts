import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }
 general:boolean=true
 ping:boolean=false
 basic:boolean=false
 response:boolean=false
 port:boolean=false
 HCICluster:boolean=false
 diskSpace:boolean=false
  ngOnInit(): void {
  }
  onRightClick() {
    return false;
  }
  GeneralPage(){
    this.general=true;
    this.ping=false;
    this.port=false;
    this.response=false;
    this.basic=false;
    this.HCICluster=false;
    this.diskSpace=false;
  }
  PingPage(){
    this.ping=true;
    this.port=false;
    this.general=false;
    this.response=false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    this.basic=false;
    this.HCICluster=false;
    this.diskSpace=false;
  }
  BasicPage(){
    this.basic=true;
    this.ping=false;
    this.general=false;
    this.response=false;
    this.port=false;    
    this.HCICluster=false;
    this.diskSpace=false;
  }
  ResponsePage(){
    this.response=true;
    this.basic=false;
    this.ping=false;
    this.general=false;
    this.port=false;    
    this.HCICluster=false;
    this.diskSpace=false;
  }
  PortPage(){
    this.port=true;
    this.response=false;
    this.basic=false;
    this.ping=false;
    this.general=false;
    this.HCICluster=false;
    this.diskSpace=false;
  }
  HCIClusterPage(){
    this.HCICluster=true;
    this.port=false;
    this.response=false;
    this.basic=false;
    this.ping=false;
    this.general=false;
    this.diskSpace=false;
  }
  DiskSpacePage(){
    this.diskSpace=true;
    this.HCICluster=false;
    this.port=false;
    this.response=false;
    this.basic=false;
    this.ping=false;
    this.general=false;
  }
}
