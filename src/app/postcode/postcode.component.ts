import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostcodeApiService } from '../postcode-api.service'
import { PostcodeData } from '../postcodeData';

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.css']
})
export class PostcodeComponent implements OnInit {

  postcodeData? : PostcodeData

  postcodeUIForm = this.postcodeFB.group({
    postcodeField: ['', Validators.required],
    countryField: ['', Validators.required]
  })

  constructor(private postcodeFB: FormBuilder, private apiService: PostcodeApiService) { }
  ngOnInit(): void {
  }

  sendQuery() {
    this.apiService.getPostcode(this.postcodeUIForm.value.countryField, this.postcodeUIForm.value.postcodeField).
    subscribe(response => this.postcodeData = response)
  }
}
