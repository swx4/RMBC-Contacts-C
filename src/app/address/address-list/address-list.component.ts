import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/address/address.service';
import { Address } from 'src/app/address/address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})


export class AddressListComponent implements OnInit {

  addresses: Address[];
  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.addressService.getAddresses().subscribe(data => {
      this.addresses = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Address;
      })
    });
  }

  create(address: Address){
    this.addressService.createAddress(address);
  }

  update(address: Address) {
    this.addressService.updateAddress(address);
  }

  delete(id: string) {
    this.addressService.deleteAddress(id);
  }
}
