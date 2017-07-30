/**
 * Created by seradiazpin on 19/07/2017.
 */

export const  APIKEY = "?key=key";
//Todo remove crossorigin dev
export const  APIURL = "https://crossorigin.me/http://api.steampowered.com/";
export const STORE = "https://crossorigin.me/http://store.steampowered.com/api/";
//http://store.steampowered.com/api/appdetails?appids=377160&l=english&format=json

//STORE INTERFACES
//http://store.steampowered.com/api/appdetails?appids=377160
const DETAILS = "appdetails?";

const CONSTAPI = "&l=english&format=json";
// User interface
const ISteamUserStats = "ISteamUserStats";
const GAME = "/GetSchemaForGame/v0002/";
const ACHIVEMENTS = "/GetGlobalAchievementPercentagesForApp/v2/";
//http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamid=76561197960434622&format=json
const IPlayerService = "IPlayerService";
const PLAYER_GAMES ="/GetOwnedGames/v0001/";

const ISTEAMUSER = "ISteamUser";
//https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=71A4F359AFAB66BE9799DBAFEA5B7169&vanityurl=diegodfp
const PROFILEID =  "/ResolveVanityURL/v1/";
//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamids=76561198088474997
const BASICPROFILE = "/GetPlayerSummaries/v0002/";
//http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=71A4F359AFAB66BE9799DBAFEA5B7169&steamid=76561197960435530&relationship=friend
const FRIENDS_LIST = "/GetFriendList/v0001/";
//https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=379720
//TODO

//GET ALL GAMES http://api.steampowered.com/ISteamApps/GetAppList/v0001/
const GAMES = "ISteamApps/GetAppList/v0001/";


export const GameInfo = STORE + DETAILS;
export const GameArchivementInfo = APIURL + ISteamUserStats + GAME + APIKEY + CONSTAPI;
export const GlobalArchivementInfo = APIURL + ISteamUserStats +ACHIVEMENTS + APIKEY + CONSTAPI;
export const ProfileId = APIURL + ISTEAMUSER + PROFILEID + APIKEY + CONSTAPI;
export const ProfileBasic = APIURL + ISTEAMUSER +  BASICPROFILE + APIKEY + CONSTAPI;
export const FriendList = APIURL +ISTEAMUSER + FRIENDS_LIST + APIKEY + CONSTAPI + "&relationship=friend";
export const PlayerGames = APIURL + IPlayerService + PLAYER_GAMES + APIKEY + CONSTAPI;
export const AllGames = APIURL + GAMES ;
