import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/admin-layout/add-car/add-car.component';
import { AddDriverComponent } from './components/admin-layout/add-driver/add-driver.component';
import { AddSupervisorComponent } from './components/admin-layout/add-supervisor/add-supervisor.component';
import { CarListComponent } from './components/admin-layout/car-list/car-list.component';
import { DriverListComponent } from './components/admin-layout/driver-list/driver-list.component';
import { SupervisorListComponent } from './components/admin-layout/supervisor-list/supervisor-list.component';
import { UpdateCarComponent } from './components/admin-layout/update-car/update-car.component';
import { UpdateDriverComponent } from './components/admin-layout/update-driver/update-driver.component';
import { UpdateSupervisorComponent } from './components/admin-layout/update-supervisor/update-supervisor.component';

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

  { path: 'listCar',   component: CarListComponent},
  { path: 'listSupervisor', component: SupervisorListComponent },
  { path: 'listDriver',     component: DriverListComponent },
  { path: 'addCar',         component: AddCarComponent },
  { path: 'updateCar',      component: UpdateCarComponent },
  { path: 'addDriver',      component: AddDriverComponent },
  { path: 'updateDriver',   component: UpdateDriverComponent },
  { path: 'addSupervisor',  component: AddSupervisorComponent },
  { path: 'updateSupervisor',component: UpdateSupervisorComponent }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
