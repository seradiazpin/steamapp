import { Component, OnInit } from '@angular/core';
import {GameService} from "../_services/game.service";
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  providers: [GameService]
})
export class DashboardComponent implements OnInit {
  games = null;
  gameId = null;
  constructor(private gameService : GameService){}

  ngOnInit() {
    this.gameService.getAllGames().then(
      (games) => {
        this.games = games;
      }
    );
  }
}
