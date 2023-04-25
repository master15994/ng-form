import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Минск', Validators.required),
      }),
    });
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form);
      const formData = { ...this.form.value };
      console.log(formData);
    }
  }
  setCapital() {
    const setMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };
  }
}
