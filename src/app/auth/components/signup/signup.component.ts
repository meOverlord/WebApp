import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


import { IAppState } from '@store/states';
import { signup } from '@store/actions';
import { authSelector } from '@store/selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formData: {email: string, password: string} = {
    email: '',
    password: ''
  };

  constructor(
    private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(authSelector),
      tap(v => console.log(v))
    ).subscribe(v => {

    });
  }

  submit(): void {
    this.store.dispatch(signup({
      id: this.formData.email, secret: this.formData.password
    }));
  }
}
