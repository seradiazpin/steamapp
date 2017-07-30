import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GameService} from "../_services/game.service";

@Component({
  selector: 'game-simple',
  templateUrl: './game-simple.component.html',
  providers: [GameService]
})
export class GameSimpleComponent implements OnInit{
  constructor(private gameService : GameService){
  }
  @Input() game_info;
  game = null;
  ngOnInit(): void {
    this.gameService.getGameData(this.game_info.appid).then(game => this.game = game);
  }
}
