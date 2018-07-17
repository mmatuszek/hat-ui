import { Component } from '@angular/core';

@Component({
  selector: 'login-form',
  template: `
    <form>
        <div class="form-group">
            <label for="hat-login-username">Email address</label>
            <input class="form-control" id="hat-login-username" type="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="hat-login-password">Password</label>
            <input class="form-control" id="hat-login-password" type="password" placeholder="Password">
        </div>
        <a id="hat-login-button" class="btn btn-primary btn-block" href="index.html">Login</a>
    </form>
  `
})
export class LoginComponent {
  title: string;
  constructor() {
    this.title = 'Ultimate Angular';
  }
  changeName() {
    this.title = "Changed";
  }
  change(value: string) {
    this.title = value;
  }
}