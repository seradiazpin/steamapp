/**
 * Created by seradiazpin on 26/07/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UserComponent} from "./user.component/user.component";
import {GameComponent} from "./game.compinent/game.component";
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: AppComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'user/:id',     component: UserComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
