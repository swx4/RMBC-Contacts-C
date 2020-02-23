import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressEditComponent } from './address/address-edit/address-edit.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contacts'},
  {path: 'addresses', component: AddressListComponent},
  {path: 'addressedit', component: AddressEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
