/**
 * Created by seradiazpin on 22/07/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {GameService} from "../_services/game.service";

//TODO http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamid=76561197960435530&relationship=friend
//TODO http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamid=76561197960434622&format=json
@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  providers: [GameService]
})
export class UsersComponent implements OnInit{
  constructor(private gameService : GameService){}
  userName ="diegodfp";
  userid = null;
  ngOnInit(): void {
    this.gameService.getUserId(this.userName).then(user => this.userid = user)
  }
  findUser(){
    console.log("CHANGE ==")
    this.gameService.getUserId(this.userName).then(user => this.userid = user)
  }
}
