import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AddressService } from './address/address.service';

import { AddressListComponent } from './address/address-list/address-list.component';
import { AddressEditComponent } from './address/address-edit/address-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
    // AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressEditComponent,
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
