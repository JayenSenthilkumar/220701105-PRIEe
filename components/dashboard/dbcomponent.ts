import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  properties: Property[] = [];
  totalInvestment: number = 0;
  totalRentalIncome: number = 0;
  averageROI: number = 0;

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.getProperties().subscribe((data: Property[]) => {
      this.properties = data;
      this.calculateStats();
    });
  }

  calculateStats() {
    this.totalInvestment = this.properties.reduce((sum, prop) => sum + prop.price, 0);
    this.totalRentalIncome = this.properties.reduce((sum, prop) => sum + prop.rentalIncome, 0);
    this.averageROI = this.properties.length 
      ? this.properties.reduce((sum, prop) => sum + prop.roi, 0) / this.properties.length 
      : 0;
  }
}
