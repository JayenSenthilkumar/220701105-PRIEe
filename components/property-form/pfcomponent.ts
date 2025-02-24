import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent {
  @Input() property: Property | null = null;  // Receives property data if editing
  @Output() save = new EventEmitter<Property>();  // Emits property data on save
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      rentalIncome: [0, Validators.required],
      roi: [0, Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.property) {
      this.propertyForm.patchValue(this.property);
    }
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      this.save.emit(this.propertyForm.value);
    }
  }
}
