import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, ComponentRoute } from './app-routing.module';
import { AppComponent } from './app.component';
import { PingComponent } from './ping/ping.component';
import { ResponseComponent } from './response/response.component';
import { BasicComponent } from './basic/basic.component';
import { PortComponent } from './port/port.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentRoute,
    PingComponent,
    ResponseComponent,
    BasicComponent,
    PortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
