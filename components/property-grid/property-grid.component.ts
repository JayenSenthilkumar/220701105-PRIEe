import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service'; // Adjusted path
import { Property } from '../../models/property.model'; // Adjusted path

@Component({
  selector: 'app-property-grid',
  templateUrl: './property-grid.component.html',
  styleUrls: ['./property-grid.component.scss']
})
export class PropertyGridComponent implements OnInit {
  properties: Property[] = []; // Explicitly define the type of the properties array

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.propertyService.getProperties().subscribe((data: Property[]) => this.properties = data); // Ensure data is of type Property[]
  }

  editProperty(property: Property) { // Use Property type for the parameter
    console.log("Editing property:", property);
  }

  deleteProperty(id: number) {
    this.propertyService.deleteProperty(id).subscribe(() => {
      this.properties = this.properties.filter(property => property.id !== id);
    });
  }
}