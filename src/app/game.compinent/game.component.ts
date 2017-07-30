import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GameService} from "../_services/game.service";
import 'rxjs/add/operator/switchMap';

//https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?key=71A4F359AFAB66BE9799DBAFEA5B7169&gameid=377160
declare var $ : any;
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  providers: [GameService]
})
export class GameComponent implements OnInit{
    constructor(private gameService : GameService){

      $(document).ready(function(){
        $('.parallax').parallax();
      });
    }

    @Input() gameId = "379720";
    game = null;
    gameInfo = null;
    ngOnInit(): void {
      this.gameService.getGameData(this.gameId).then(game => this.game = game);
      this.gameService.getGameAchievement(this.gameId).then(game => this.gameInfo = game);
    }

}
