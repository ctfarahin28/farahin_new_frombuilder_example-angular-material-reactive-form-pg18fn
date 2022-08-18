import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formGroup: FormGroup;
  post;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      items: new FormControl(null),
      qty: new FormControl(null),
    });
  }

  onSubmit(post) {
    this.post = post;
  }
}
