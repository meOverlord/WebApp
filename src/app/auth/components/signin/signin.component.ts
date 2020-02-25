import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


import { IAppState } from '@store/states';
import { signin } from '@store/actions';
import { authSelector } from '@store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formData: {email: string, password: string} = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(authSelector),
    ).subscribe(auth => {
      if (auth) {
        this.router.navigate(['']);
      }
    });
  }

  submit(): void {
    this.store.dispatch(signin({
      id: this.formData.email, secret: this.formData.password
    }));
  }
}
