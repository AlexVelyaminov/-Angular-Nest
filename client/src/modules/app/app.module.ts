// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
// routing
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './components/app/app.component';
// ngrx
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {usersReducer} from "../users/store/users.reducer";
import {UsersEffects} from "../users/store/users.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ state: usersReducer }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
