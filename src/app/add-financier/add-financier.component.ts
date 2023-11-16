import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormData} from '../interfaces/add-financier.interface';

@Component({
  selector: 'app-add-financier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-financier.component.html',
  styleUrl: './add-financier.component.scss'
})
export class AddFinancierComponent implements OnInit{
  formData: FormData = {
    financierName: '',
    type: '',
    lenderMou: '',
    email: '',
    phoneNo: '',
    interestRate: 0,
    panNo: '',
    cin: '',
    limit: 0,
    contactPerson: '',
    designation: '',
    contactEmail: '',
    contactPhoneNo: ''
  }

  onSubmit() {

  }

}
