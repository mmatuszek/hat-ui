import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    bootstrap: [LoginComponent]
})
export class LoginModule {}