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
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllCarsComponent } from './components/admin-layout/all-cars/all-cars.component';
import { HistpriqueCarComponent } from './components/admin-layout/histprique-car/histprique-car.component';
import { AllDriversComponent } from './components/admin-layout/all-drivers/all-drivers.component';
import { AllSupervisorComponent } from './components/admin-layout/all-supervisor/all-supervisor.component';
import { EntretienComponent } from './components/admin-layout/entretien/entretien.component';
import { UpdateEntretienComponent } from './components/admin-layout/update-entretien/update-entretien.component';
import { AddEntrtienComponent } from './components/admin-layout/add-entrtien/add-entrtien.component';
import { ReparationComponent } from './components/admin-layout/reparation/reparation.component';
import { AddReparationComponent } from './components/admin-layout/add-reparation/add-reparation.component';
import { UpdateReparationComponent } from './components/admin-layout/update-reparation/update-reparation.component';
import { AddDemandeComponent } from './components/customer-layout/add-demande/add-demande.component';
import { DispoCarComponent } from './components/customer-layout/dispo-car/dispo-car.component';
import { ReservationComponent } from './components/customer-layout/reservation/reservation.component';
import { DashboardCComponent } from './components/customer-layout/dashboard-c/dashboard-c.component';
import { DriverLayoutComponent } from './components/driver-layout/driver-layout.component';
import { DashboardComponent } from './components/driver-layout/dashboard/dashboard.component';
import { TrajetComponent } from './components/driver-layout/trajet/trajet.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    UpdateDriverComponent,
    AllCarsComponent,
    HistpriqueCarComponent,
    AllDriversComponent,
    AllSupervisorComponent,
    EntretienComponent,
    UpdateEntretienComponent,
    AddEntrtienComponent,
    ReparationComponent,
    AddReparationComponent,
    UpdateReparationComponent,
    AddDemandeComponent,
    DispoCarComponent,
    ReservationComponent,
    DashboardCComponent,
    DriverLayoutComponent,
    DashboardComponent,
    TrajetComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CommonModule,FormsModule, NgbModule,HttpClientModule,ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
