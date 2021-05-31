import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/admin-layout/add-car/add-car.component';
import { AddClaimComponent } from './components/admin-layout/add-claim/add-claim.component';
import { AddDriverComponent } from './components/admin-layout/add-driver/add-driver.component';
import { AddEntrtienComponent } from './components/admin-layout/add-entrtien/add-entrtien.component';
import { AddReparationComponent } from './components/admin-layout/add-reparation/add-reparation.component';
import { AddSupervisorComponent } from './components/admin-layout/add-supervisor/add-supervisor.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AllCarsComponent } from './components/admin-layout/all-cars/all-cars.component';
import { AllDriversComponent } from './components/admin-layout/all-drivers/all-drivers.component';
import { AllSupervisorComponent } from './components/admin-layout/all-supervisor/all-supervisor.component';

import { CarListComponent } from './components/admin-layout/car-list/car-list.component';
import { ClaimComponent } from './components/admin-layout/claim/claim.component';
import { DriverListComponent } from './components/admin-layout/driver-list/driver-list.component';
import { EntretienComponent } from './components/admin-layout/entretien/entretien.component';
import { HistpriqueCarComponent } from './components/admin-layout/histprique-car/histprique-car.component';
import { ReparationComponent } from './components/admin-layout/reparation/reparation.component';
import { SupervisorListComponent } from './components/admin-layout/supervisor-list/supervisor-list.component';
import { UpdateCarComponent } from './components/admin-layout/update-car/update-car.component';
import { UpdateDriverComponent } from './components/admin-layout/update-driver/update-driver.component';
import { UpdateEntretienComponent } from './components/admin-layout/update-entretien/update-entretien.component';
import { UpdateReparationComponent } from './components/admin-layout/update-reparation/update-reparation.component';
import { UpdateSupervisorComponent } from './components/admin-layout/update-supervisor/update-supervisor.component';
import { LoginComponent } from './components/auth-layout/login/login.component';
import { AddDemandeComponent } from './components/customer-layout/add-demande/add-demande.component';
import { DashboardCComponent } from './components/customer-layout/dashboard-c/dashboard-c.component';
import { DispoCarComponent } from './components/customer-layout/dispo-car/dispo-car.component';
import { ReservationComponent } from './components/customer-layout/reservation/reservation.component';
import { AddBilanComponent } from './components/driver-layout/add-bilan/add-bilan.component';
import { DashboardComponent } from './components/driver-layout/dashboard/dashboard.component';
import { DriverLayoutComponent } from './components/driver-layout/driver-layout.component';
import { PlanningComponent } from './components/driver-layout/planning/planning.component';
import { TrajetComponent } from './components/driver-layout/trajet/trajet.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/admin-layout/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'listCar/:id',   component: CarListComponent},
  { path: 'listSupervisor/:id', component: SupervisorListComponent },
  { path: 'listDriver/:id',     component: DriverListComponent },
  { path: 'allCars',         component: AllCarsComponent },
  { path: 'allCars',         component: AllCarsComponent },
  { path: 'allDrivers',         component: AllDriversComponent },
  { path: 'allSupervisors',         component: AllSupervisorComponent },
  { path: 'historiqueCar/:id',         component:HistpriqueCarComponent },
  { path: 'entretien',         component:EntretienComponent },
  { path: 'reparation',         component:ReparationComponent },
  { path: 'addReparation',         component:AddReparationComponent },
  { path: 'updateReparation/:id',         component:UpdateReparationComponent },
  { path: 'addDemande',         component:   AddDemandeComponent},
  { path: 'addEntretien',         component: AddEntrtienComponent },
  { path: 'addCar',         component: AddCarComponent },
  { path: 'updateCar/:id',      component: UpdateCarComponent },
  { path: 'addDriver',      component: AddDriverComponent },
  { path: 'updateDriver/:id',   component: UpdateDriverComponent },
  { path: 'addSupervisor',  component: AddSupervisorComponent },
  { path: 'updateSupervisor/:id',component: UpdateSupervisorComponent },
  { path: 'updateEntretien/:id',component: UpdateEntretienComponent},
  { path: 'dispoCar',component:   DispoCarComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'dashboardC', component: DashboardCComponent},
  { path: 'dashboardDriver', component: DashboardComponent},
  { path: 'trajet', component: TrajetComponent},
  { path: 'bilan', component: AddBilanComponent},
  { path: 'planning', component: PlanningComponent},
   { path: 'claim', component: ClaimComponent},
   { path: 'AddClaim', component: AddClaimComponent},
   { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminLayoutComponent},



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
