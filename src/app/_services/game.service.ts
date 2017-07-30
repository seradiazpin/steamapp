/**
 * Created by usuario on 19/07/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {
  GameInfo, GlobalArchivementInfo, GameArchivementInfo, ProfileId, ProfileBasic, FriendList,
  PlayerGames, AllGames
} from "../constants";


@Injectable()
export class GameService {
  headers = new Headers();
    constructor(private http: Http){
      this.headers.append("Access-Control-Allow-Origin", "*");
      this.headers.append("Access-Control-Allow-Credentials", "true");
    }

  getGameData(id) :  Promise<Object>{
    return this.http.get(GameInfo + "appids="+id)
      .toPromise()
      .then(response =>response.json()[id].data)
      .catch(this.handleError);
  }
  getGameAchievement (id) : Promise<Object>{
    return this.http.get(GameArchivementInfo + "&appid="+id)
      .toPromise()
      .then(response => response.json().game)
      .catch(this.handleError);
  }
  getAchievementData(id) : Promise<Object>{
    return this.http.get(GlobalArchivementInfo+ "&gameid="+id)
      .toPromise()
      .then(response => response.json().achievementpercentages)
      .catch(this.handleError);
  }
  getUserId(user): Promise<Object>{
    return this.http.get(ProfileId+ "&vanityurl="+user)
      .toPromise()
      .then(
        (response) => {
          let succes = response.json().response.success;
          if(succes == 1){
            return response.json().response.steamid;
          }else{
            return "No match";
          }
        }
      )
      .catch(this.handleError);
  }
  getUser(id):Promise<Object>{
    return this.http.get(ProfileBasic+ "&steamids="+id)
      .toPromise()
      .then(response => response.json().response.players[0])
      .catch(this.handleError);
  }
  getFriends(id):Promise<Object>{
    return this.http.get(FriendList+"&steamid="+ id)
      .toPromise()
      .then(response => response.json().friendslist.friends)
      .catch(this.handleError);
  }
  getUserGames(id):Promise<Object>{
    return this.http.get(PlayerGames+"&steamid="+ id)
      .toPromise()
      .then(response => response.json().response)
      .catch(this.handleError);
  }

  getAllGames():Promise<Object>{
    return this.http.get(AllGames, {
      headers: this.headers
    })
      .toPromise()
      .then(response => response.json().applist.apps.app)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
