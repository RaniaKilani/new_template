import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { CarListComponent } from './components/admin-layout/car-list/car-list.component';
import { AddCarComponent } from './components/admin-layout/add-car/add-car.component';
import { UpdateCarComponent } from './components/admin-layout/update-car/update-car.component';
import { UpdateDriverComponent } from './components/admin-layout/update-driver/update-driver.component';
import { UpdateSupervisorComponent } from './components/admin-layout/update-supervisor/update-supervisor.component';
import { AddSupervisorComponent } from './components/admin-layout/add-supervisor/add-supervisor.component';
import { SupervisorListComponent } from './components/admin-layout/supervisor-list/supervisor-list.component';
import { DriverListComponent } from './components/admin-layout/driver-list/driver-list.component';
import { AddDriverComponent } from './components/admin-layout/add-driver/add-driver.component';

@NgModule({
  declarations: [AppComponent,AdminLayoutComponent,
    CarListComponent,
    SupervisorListComponent,
    DriverListComponent,
    AddCarComponent,
    AddSupervisorComponent,
    AddDriverComponent,
    UpdateCarComponent,
    UpdateSupervisorComponent,
    UpdateDriverComponent

  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
