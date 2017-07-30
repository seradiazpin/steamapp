/**
 * Created by seradiazpin on 22/07/2017.
 */
import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {GameService} from "../_services/game.service";
declare var $ : any;
//TODO http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamid=76561197960435530&relationship=friend
//TODO http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamid=76561197960434622&format=json
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [GameService]
})
export class UserComponent implements OnInit, OnChanges{
  constructor(private gameService : GameService){}
  @Input() user_id;
  @Input() show_friends = true;
  user = null;
  friends = null;
  games = null;
  p: number = 1;
  ngOnInit(): void {
    this.findUser();
    this.getGames();
    if(this.show_friends){
      this.getFriends();
    }


  }
  findUser(){this.gameService.getUser(this.user_id).then(user => this.user = user)}
  getFriends(){this.gameService.getFriends(this.user_id).then(friends => this.friends = friends)}
  getGames(){this.gameService.getUserGames(this.user_id).then(games => this.games = games)}
  ngOnChanges(changes: SimpleChanges) {
    this.findUser();
    this.getGames();
    if(this.show_friends)
      this.getFriends();
  }

}
