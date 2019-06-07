import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BsRootModule} from 'ng-bootstrap';
import { Observable } from 'rxjs';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
