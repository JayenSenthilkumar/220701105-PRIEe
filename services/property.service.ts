import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties = new BehaviorSubject<Property[]>([
    { id: 1, name: 'Luxury Apartment', price: 500000, rentalIncome: 2000, roi: 5, imageUrl: 'assets/apartment.jpg' },
    { id: 2, name: 'Beach House', price: 750000, rentalIncome: 3500, roi: 6, imageUrl: 'assets/beach-house.jpg' }
  ]);

  getProperties(): Observable<Property[]> {
    return this.properties.asObservable();
  }

  deleteProperty(id: number): Observable<void> {
    return new Observable<void>(observer => {
      let updatedProperties = this.properties.getValue().filter(prop => prop.id !== id);
      this.properties.next(updatedProperties);
      observer.next();
      observer.complete();
    });
  }
}
