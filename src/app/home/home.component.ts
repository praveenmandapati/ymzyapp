
import { Component, OnInit } from '@angular/core';
import{DataserviceService} from '../dataservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headers: any;
  customerStatus: any;
  orderDetails: any;
  restaurantStatus: any;
  customerStatusaddress: any;
  restaurantStatusaddress: any;

  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
   
    this.dataservice.getdata().subscribe((res)=>{
      this.customerStatus =res.data.customerStatus;
      this.customerStatusaddress =res.data.customerStatus.address;
      this.orderDetails =res.data.orderDetails;
      this.restaurantStatus = res.data.restaurantStatus;
      this.restaurantStatusaddress =res.data.restaurantStatus.address;
    })
  }

}
