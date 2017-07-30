import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { AppComponent } from './app.component';
import {GameComponent} from "./game.compinent/game.component";
import {AchievementsComponent} from "./achievements.component/achievements.component";
import {AchievementComponent} from "./achievements.component/achievement.component/achievement.component";
import {UserComponent} from "./user.component/user.component";
import {UsersComponent} from "./users.component/users.component";
import {GameSimpleComponent} from "./game.compinent/game-simple";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameSimpleComponent,
    AchievementComponent,
    AchievementsComponent,
    UsersComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    NguiAutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
