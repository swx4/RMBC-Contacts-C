import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Address } from 'src/app/address/address.model';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private firestore: AngularFirestore) { }

  getAddresses() {
    return this.firestore.collection('Addresses').snapshotChanges();
  }

  createAddress(address: Address){
    return this.firestore.collection('Addresses').add(address);
  }

  updateAddress(address: Address){
    delete address.id;
    this.firestore.doc('Addresses/' + address.id).update(address);
  }

  deleteAddress(addressId: string){
    this.firestore.doc('Addresses/' + addressId).delete();
} 
}
