/**
 * Created by usuario on 21/07/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {GameService} from "../_services/game.service";


//https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?key=71A4F359AFAB66BE9799DBAFEA5B7169&gameid=377160

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html',
  providers: [GameService]
})
export class AchievementsComponent implements OnInit{
  constructor(private gameService : GameService){}
  @Input() game_id ;
  @Input() game_info;
  gameData = null;
  dispData = null;
  ngOnInit(): void {
    this.gameService.getAchievementData(this.game_id).then((gamedata) => {this.gameData = gamedata;});
  }
  changeData(index, src):void{
    this.dispData = this.gameData.achievements[index];
    this.dispData.name = this.game_info.availableGameStats.achievements[index].displayName;
    this.dispData.icon = src;
    return this.dispData;
  }
}
