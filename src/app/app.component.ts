import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  title = 'MicrolandApp';
  AllData:any;
  DatabyId:any;
  searchBox:boolean=false;
  searchBtn:boolean=false;
  CrossItem:boolean=false;
  AllowSearch:boolean=true;
  FormOuter:boolean=false;
  constructor(private _service:ApiService){}

  ngOnInit(){
    this._service.GetAllRecord().subscribe(Response=>
      {
        this.AllData=Response;
      });
  }
  public ClickEvent(id:any){
    this._service.getRecordById(id).subscribe(respo=>
      {
        this.DatabyId=respo;
      });
  }
  onRightClick() {
    return false;
  }
  OpenSerchBox(){
    this.searchBtn=true;
    this.CrossItem=true;
    this.searchBox=true;
    this.FormOuter=true;
    this.AllowSearch=false;
  }
  closeSerchBox(){
    this.searchBtn=false;
    this.CrossItem=false;
    this.searchBox=false;
    this.FormOuter=false;
    this.AllowSearch=true;
  }
}