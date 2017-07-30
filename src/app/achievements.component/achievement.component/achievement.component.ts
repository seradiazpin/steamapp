/**
 * Created by seradiazpin on 19/07/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
declare let Chart : any;
declare let randomColor : any;
let getColor = ()=>{
  return randomColor({
    luminosity: 'dark',
    format: 'rgba' // e.g. 'rgba(9, 1, 107, 0.6482447960879654)'
  });
};
//https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?key=71A4F359AFAB66BE9799DBAFEA5B7169&gameid=377160

@Component({
  selector: 'achievement',
  templateUrl: 'achievement.component.html'
})
export class AchievementComponent{
  @Input() data;
}
