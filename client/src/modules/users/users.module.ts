// Angular
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
// components
import {UsersComponent} from "./components/users/users.component";
// services
import {UsersApiService} from "./services/users.api.service";
// ngrx
import {EffectsModule} from "@ngrx/effects";
import {UsersEffects} from "./store/users.effects";

const routes: Routes = [{path: '', component: UsersComponent}];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersApiService]
})
export class UsersModule {}
