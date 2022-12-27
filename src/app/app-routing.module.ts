import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputeresourceComponent } from './computeresource/computeresource.component';
import { DescriptionComponent } from './provisioningServicesDescription/description.component';
import { GeneralComponent } from './resourceGeneral/general.component';
import { LocationComponent } from './provisioningServicesLocation/location.component';
import { LoginComponent } from './login/login.component';
import { MonitoringResourcesComponent } from './editApplication/monitoring-resources.component';
import { SelfServiceComponent } from './Dashboard/self-service.component';
import { TaxesComponent } from './taxApplication/taxes.component';
import { TgifApplicationComponent } from './tgif-application/tgif-application.component';
import { PingComponent } from './ping/ping.component';
import { ResponseComponent } from './response/response.component';
import { BasicComponent } from './basic/basic.component';
import { PortComponent } from './port/port.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'selfservice',component:SelfServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'location',component:LocationComponent},
  {path:'description',component:DescriptionComponent},
  {path:'general',component:GeneralComponent},
  {path:'monitoringResource',component:MonitoringResourcesComponent},
  {path:'taxApplication',component:TaxesComponent},
  {path:'computeResource',component:ComputeresourceComponent},
  {path:'tgifApp',component:TgifApplicationComponent},
  {path:'ping',component:PingComponent},
  {path:'response',component:ResponseComponent},
  {path:'basic',component:BasicComponent},
  {path:'port',component:PortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ComponentRoute=[
  LoginComponent,
  DescriptionComponent,
  SelfServiceComponent,
  LocationComponent,
  GeneralComponent,
  MonitoringResourcesComponent,
  TaxesComponent,
  TgifApplicationComponent,
  ComputeresourceComponent,
  PingComponent,
  ResponseComponent,
  BasicComponent
]