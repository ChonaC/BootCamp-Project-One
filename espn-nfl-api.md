# List of NFL API Endpoints

This page is limited to NFL endpoints but can be refashioned for other sports leagues (i.e. `/sports/football/leagues/nfl/` => `/sports/baseball/leagues/mlb/`)

## Parameters

Name               | Description
:------------------|:-------------
`:year`            | Integer year in which the season started (`YYYY`)
`:seasontype`      | 1=pre, 2=regular, 3=post
`:league_id`       | Fantasy league id
`:bet_provider_id` | Sports betting operator, view under [odds](#bet_provider_id)
`:team_id`         | 1-32 ([view all](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams))
`:athlete_id`      | [view all](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=1000)


---

Table of Contents:

* [Parameters](#parameters)
* [ESPN Base Urls](#espn-base-urls)
  * [site.api.espn[.com]](#siteapiespncom)
  * [sports.core.api.espn[.com]](#sportscoreapiespncom)
* [Teams](#teams)
* [Fantasy](#fantasy)
  * [Current season and last 3 years](#current-season-and-last-3-years)
  * [League History - get all historical data](#league-history---get-all-historical-data)
* [Detailed API](#detailed-api)
  * [Leagues](#leagues)
  * [Athletes](#athletes)
  * [Teams](#teams-1)
  * [Team](#team)
  * [Plays](#plays)
  * [Depth charts](#depth-charts)
  * [Whitelist dates](#whitelist-dates)
  * [Season](#season)
  * [Week](#week)
  * [All weeks](#all-weeks)
  * [List of games via date-range](#list-of-games-via-date-range)
* [Betting](#betting)
  * [Odds](#odds)
  * [Win probabilities](#win-probabilities)
  * [Against the spread (ATS)](#against-the-spread-ats)
  * [Futures](#futures)
  * [Head-to-head (game)](#head-to-head-game)
  * [Odds records](#odds-records)
  * [Game Odds](#game-odds)
  * [Team Odds](#team-odds)
* [Stats](#stats)
  * [Positions (enum)](#positions-enum)
  * [QBR Weekly/Game stats](#qbr-weeklygame-stats)
* [Athlete](#athlete)
  * [all active athletes](#all-active-athletes)
* [Team](#team-1)
* [Leaders](#leaders)
* [Scoreboard](#scoreboard)
* [Search](#search)
* [News](#news)
* [Header](#header)
* [Misc](#misc)
* [Resources](#resources)


---

## ESPN Base Urls

### site.api.espn[.com]

* game summary
[/apis/site/v2/sports/football/nfl/summary?event=**:game_id**](https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=401326315)

* teams
[/apis/site/v2/sports/football/nfl/teams](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams)[**/:team_id**](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/1)

* news
[/apis/site/v2/sports/football/nfl/news](https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=50&page=1)

* team roster
[/apis/site/v2/sports/football/nfl/teams/**:team_id**/roster](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/4/roster)[`?enable=roster,projection,stats`](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/4?enable=roster,projection,stats)

* team schedule:
[/apis/site/v2/sports/football/nfl/teams/**:team_id**/schedule](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/4/schedule)[`?season=`**:year**](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/4/schedule?season=2019)

### sports.core.api.espn[.com]

* weeks:
[/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/weeks](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/weeks?lang=en&region=us)

* season:
[/v2/sports/football/leagues/nfl/seasons/**:year**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021)

* seasons:
[/v2/sports/football/leagues/nfl/seasons](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons)

* athletes:
[/v2/sports/football/leagues/nfl/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes)[`?limits=200`](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?limit=200)

* teams:
[/v2/sports/football/leagues/nfl/seasons/**:year**/teams](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams)[**/:team_id**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24)

* depthcharts:
[/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/depthcharts)

* injuries:
[/v2/sports/football/leagues/nfl/teams/**:team_id**/injuries](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/8/injuries?limit=100)

* group:
[/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/groups/**:group_id**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/4/groups/9)

* groups:
[/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/groups](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/4/groups)

* events:
[/v2/sports/football/leagues/nfl/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events)

* get game ids:
[/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/weeks/**:week**/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/weeks/1/events?lang=en&region=us)

* draft:
[/v2/sports/football/leagues/nfl/seasons/**:year**/draft](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/draft)

* free agents:
[/v2/sports/football/leagues/nfl/seasons/**:year**/freeagents](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/freeagents)

* calendar:
[/v2/sports/football/leagues/nfl/calendar](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/calendar)

  - game dates for current season:
  [/v2/sports/football/leagues/nfl/calendar/whitelist](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/calendar/whitelist)

  - blacklist:
  [/v2/sports/football/leagues/nfl/calendar/blacklist](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/calendar/blacklist)

* transactions:
[/v2/sports/football/leagues/nfl/transactions](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/transactions)

* talent picks:
[/v2/sports/football/leagues/nfl/talentpicks](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/talentpicks)

* leaders:
[/v2/sports/football/leagues/nfl/leaders](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/leaders)

* franchises:
[/v2/sports/football/leagues/nfl/franchises](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/franchises)

---

## Teams

| team | api | |
| :-: | :- | :- |
| ATL<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/ATL.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/1](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/1) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/1/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/1/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/1/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/1/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/1/projection?lang=en&region=us)||
| BUF<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/BUF.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/2](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/2) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/2/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/2/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/2/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/2/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/2/projection?lang=en&region=us)||
| CHI<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/CHI.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/3](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/3) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/3/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/3/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/3/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/3/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/3/projection?lang=en&region=us)||
| CIN<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/CIN.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/4](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/4) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/4/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/4/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/4/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/4/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/4/projection?lang=en&region=us)||
| CLE<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/CLE.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/5](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/5) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/5/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/5/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/5/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/5/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/5/projection?lang=en&region=us)||
| DAL<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/DAL.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/6](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/6) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/6/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/6/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/6/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/6/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/6/projection?lang=en&region=us)||
| DEN<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/DEN.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/7](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/7) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/7/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/7/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/7/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/7/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/7/projection?lang=en&region=us)||
| DET<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/DET.png" width="30"> |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/8](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/8) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/8/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/8/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/8/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/8/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/8/projection?lang=en&region=us)||
|  GB<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/GB.png" width="30">  |    [/v2/sports/football/leagues/nfl/seasons/2021/teams/9](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/9) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/9/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/9/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/9/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/9/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/9/projection?lang=en&region=us)||
| TEN<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/TEN.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/10](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/10) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/10/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/10/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/10/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/10/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/10/projection?lang=en&region=us)||
| IND<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/IND.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/11](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/11) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/11/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/11/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/11/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/11/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/11/projection?lang=en&region=us)||
|  KC<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/KC.png" width="30">  | [/v2/sports/football/leagues/nfl/seasons/2021/teams/12](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/12) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/12/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/12/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/12/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/12/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/12/projection?lang=en&region=us)||
|  LV<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/LV.png" width="30">  | [/v2/sports/football/leagues/nfl/seasons/2021/teams/13](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/13) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/13/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/13/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/13/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/13/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/13/projection?lang=en&region=us)||
| LAR<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/LAR.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/14](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/14) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/14/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/14/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/14/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/14/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/14/projection?lang=en&region=us)||
| MIA<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/MIA.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/15](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/15) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/15/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/15/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/15/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/15/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/15/projection?lang=en&region=us)||
| MIN<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/MIN.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/16](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16/projection?lang=en&region=us)||
|  NE<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/NE.png" width="30">  | [/v2/sports/football/leagues/nfl/seasons/2021/teams/17](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/17) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/17/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/17/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/17/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/17/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/17/projection?lang=en&region=us)||
|  NO<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/NO.png" width="30">  | [/v2/sports/football/leagues/nfl/seasons/2021/teams/18](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18/projection?lang=en&region=us)||
| NYG<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/NYG.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/19](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/19) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/19/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/19/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/19/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/19/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/19/projection?lang=en&region=us)||
| NYJ<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/NYJ.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/20](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/20) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/20/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/20/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/20/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/20/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/20/projection?lang=en&region=us)||
| PHI<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/PHI.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/21](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/21) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/21/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/21/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/21/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/21/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/21/projection?lang=en&region=us)||
| ARI<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/ARI.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/22](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/22) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/22/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/22/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/22/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/22/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/22/projection?lang=en&region=us)||
| PIT<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/PIT.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/23](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23/projection?lang=en&region=us)||
| LAC<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/LAC.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/24](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/projection?lang=en&region=us)||
|  SF<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/SF.png" width="30">  | [/v2/sports/football/leagues/nfl/seasons/2021/teams/25](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/25) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/25/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/25/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/25/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/25/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/25/projection?lang=en&region=us)||
| SEA<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/SEA.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/26](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/26) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/26/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/26/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/26/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/26/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/26/projection?lang=en&region=us)||
|  TB<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/TB.png" width="30">  | [/v2/sports/football/leagues/nfl/seasons/2021/teams/27](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/27) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/27/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/27/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/27/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/27/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/27/projection?lang=en&region=us)||
| WSH<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/WSH.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/28](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/28) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/28/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/28/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/28/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/28/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/28/projection?lang=en&region=us)||
| CAR<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/CAR.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/29](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/29) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/29/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/29/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/29/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/29/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/29/projection?lang=en&region=us)||
| JAX<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/JAX.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/30](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/30) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/30/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/30/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/30/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/30/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/30/projection?lang=en&region=us)||
| BAL<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/BAL.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/33](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/33) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/33/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/33/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/33/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/33/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/33/projection?lang=en&region=us)||
| HOU<br><img src="https://a.espncdn.com/i/teamlogos/nfl/500/HOU.png" width="30"> | [/v2/sports/football/leagues/nfl/seasons/2021/teams/34](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/34) | [/athletes](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/34/athletes?lang=en&region=us), [/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/34/depthcharts?lang=en&region=us), [/record](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/34/record?lang=en&region=us), [/events](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/34/events?lang=en&region=us), [/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/34/projection?lang=en&region=us)||


## Fantasy

### Current season and last 3 years

[fantasy.espn.com/apis/v3/games/ffl/seasons/**:year**/segments/0/leagues/**:league_id**](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838)

- [view=mLiveScoring](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mLiveScoring)
- [view=mMatchupScore](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mMatchupScore)
- [view=mPendingTransactions](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mPendingTransactions)
- [view=mPositionalRatings](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mPositionalRatings)
- [view=mSettings](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mSettings)
- [view=mTeam](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mTeam)
- [view=modular](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=modular)
- [view=mNav](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mNav)
- [view=mDraftDetail](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2021/segments/0/leagues/1241838?view=mDraftDetail)

### League History - get all historical data

[fantasy.espn.com/apis/v3/games/ffl/leagueHistory/**:league_id**?seasonId=**:year**](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2021)

- [&view=mLiveScoring](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mLiveScoring)
- [&view=mMatchupScore](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mMatchupScore)
- [&view=mPendingTransactions](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mPendingTransactions)
- [&view=mPositionalRatings](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mPositionalRatings)
- [&view=mSettings](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mSettings)
- [&view=mTeam](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mTeam)
- [&view=modular](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=modular)
- [&view=mNav](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mNav)
- [&view=mDraftDetail](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2020&view=mDraftDetail)

---

[Example combining views](https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2019&view=mMatchup&view=mMatchupScore)

`https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/1241838?seasonId=2019&view=mMatchup&view=mMatchupScore`

[View example combining all](https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/1241838?view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mSettings&view=mTeam&view=modular&view=mNav)

`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/1241838?view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mSettings&view=mTeam&view=modular&view=mNav`


## Detailed API

### Leagues
[sports.core.api.espn.com/v2/sports/football/leagues/nfl](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl)

### Athletes
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/athletes/**:athlete_id**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/athletes/2580)

### Teams
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams)

### Team
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24)

### Plays
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/plays?limit=300](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401249063/competitions/401249063/plays?limit=300)

### Depth charts
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**/depthcharts](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/24/depthcharts)

### Whitelist dates
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/calendar/whitelist](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/calendar/whitelist)

### Season
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021)

### Week
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/weeks/**:week**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/weeks/9)

### All weeks
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/weeks](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/weeks)

### List of games via date-range
[site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=**YYYYMMDD-YYYYMMDD**](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=20200901-20201022)

* Add `&1577413600` at the end for overriding the cache
* Date range cannot exceed 13 months
* Format for date can be date range, single date, or year
  - [*YYYYMMDD-YYYYMMDD*](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=20200901-20201022)
  - [*YYYYMMDD*](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=20210901)
  - [*YYYY*](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=2021)


## Betting

| bet_provider_id |                   |
|:----------------|:------------------|
| 38              | Caesars           |
| 31              | William Hill      |
| 41              | SugarHouse        |
| 36              | Unibet            |
| 2000            | Bet 365           |
| 25              | Westgate          |
| 45              | William Hill (NJ) |
| 1001            | accuscore         |
| 1004            | consensus         |
| 1003            | numberfire        |
| 1002            | teamrankings      |

### Odds
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/odds](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401249063/competitions/401249063/odds)

### Win probabilities
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/probabilities?limit=200](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401249063/competitions/401249063/probabilities?limit=200)

### Against the spread (ATS)
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/2/teams/**:team_id**/ats](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/teams/26/ats)

| future_id |                           |
|:----------|:--------------------------|
| 1561      | Super Bowl Winner         |
| 2737      | AFC South Division Winner |
| 2738      | AFC North Division Winner |
| 2739      | AFC West Division Winner  |
| 2740      | AFC East Division Winner  |
| 2757      | AFC Champion              |
| 3904      | NFC Champion              |
| 3905      | NFC North Division Winner |
| 3906      | NFC East Division Winner  |
| 3907      | NFC West Division Winner  |
| 3908      | NFC South Division Winner |

### Futures
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/futures](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/futures)[**/:future_id**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/futures/1561)



### Head-to-head (game)
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/odds/**:bet_provider_id**/head-to-heads](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401249063/competitions/401249063/odds/1002/head-to-heads)

### Odds records
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/0/teams/**:team_id**/odds-records](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/0/teams/4/odds-records)

### Game Odds
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/odds/**:bet_provider_id**/history/0/movement?limit=100](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401249063/competitions/401249063/odds/1002/history/0/movement?limit=100)

### Team Odds
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/**:team_id**/odds/**:bet_provider_id**/past-performances?limit=200](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/10/odds/1002/past-performances?limit=200)

## Stats

### Positions (enum)
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/positions?limit=100](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/positions?limit=100)

### QBR Weekly/Game stats
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/2/weeks/**:week_num**/qbr/10000](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2020/types/2/weeks/6/qbr/10000)

## Athlete

### all active athletes
[sports.core.api.espn.com/v2/sports/football/leagues/nfl/**athletes**?active=true](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes?active=true)

[site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/**:athlete_id**](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876)

[site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/**:athlete_id**/splits](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/splits)[`?season=2021`](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/splits?season=2021)

[site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/**:athlete_id**/gamelog](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/gamelog)

[site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/**:athlete_id**/stats](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/stats)

[site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/**:athlete_id**/bio](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/bio)

[site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/**:athlete_id**/overview](https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/overview)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/athletes/**:athlete_id**/statistics](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2020/types/2/athletes/2972304/statistics)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/athletes/**:athlete_id**/projections](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2020/types/2/athletes/3061612/projections)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/competitors/**:team_id**/roster/**:athlete_id**/statistics/0](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401220181/competitions/401220181/competitors/34/roster/2508176/statistics/0)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/athletes/**:athlete_id**/eventlog](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2020/athletes/2330/eventlog)

## Team

[site.api.espn.com/apis/site/v2/sports/football/nfl/teams](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams)

[site.api.espn.com/apis/site/v2/sports/football/nfl/teams/**:team_id**](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/3)

[site.api.espn.com/apis/site/v2/sports/football/nfl/teams/**:team_id**/roster](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/3/roster)

[site.api.espn.com/apis/site/v2/sports/football/nfl/teams/**:team_id**/schedule`{?season,seasontype}`](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/3/schedule?season=2020&seasontype=2)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/types/**:seasontype**/teams/**:team_id**/statistics](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/teams/24/statistics)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**/projection](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/athletes/3061612/projections)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/**:team_id**/odds/1002/past-performances?limit=140](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/8/odds/1002/past-performances?limit=140)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/**:game_id**/competitions/**:game_id**/competitors/**:team_id**/roster](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401220225/competitions/401220225/competitors/12/roster)[**_`?season=YYYY`_**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401220225/competitions/401220225/competitors/12/roster?season=2019)

[site.api.espn.com/apis/site/v2/sports/football/nfl/teams/**:team_id**?**enable=roster**](https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/3?enable=roster,projection,stats)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**/projection](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/23/projection)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/**:team_id**/odds/**:bet_provider_id**/past-performances?limit=200](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams/10/odds/1002/past-performances?limit=134)

## Leaders

[site.api.espn.com/apis/site/v3/sports/football/nfl/leaders`{?season,seasontype}`](https://site.api.espn.com/apis/site/v3/sports/football/nfl/leaders?season=2021&seasontype=2)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/leaders](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/types/2/leaders)

## Scoreboard

[site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard)[`{?dates=YYYYMMDD}`](https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=20180901)

## Search

[site.web.api.espn.com/apis/common/v3/search?region=us&lang=en&query=nfl&limit=5&mode=prefix](https://site.web.api.espn.com/apis/common/v3/search?region=us&lang=en&query=nfl&limit=5&mode=prefix)

[site.web.api.espn.com/apis/common/v3/search](https://site.web.api.espn.com/apis/common/v3/search)

[site.web.api.espn.com/apis/fantasy/v2/games/ffl/games?**dates={YYYYMMDD}-{YYYYMMDD}**&pbpOnly=true](https://site.web.api.espn.com/apis/fantasy/v2/games/ffl/games?dates=20210901-20211108&pbpOnly=true)

## News

[site.api.espn.com/apis/site/v2/sports/football/nfl/news](https://site.api.espn.com/apis/site/v2/sports/football/nfl/news)

## Header

[site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl](https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl)

## Misc

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/2/statisticslog](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/2/statisticslog)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/16)

[sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/**:year**/teams/**:team_id**/athletes?limit=200](https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2021/teams/18/athletes?limit=200)

---

## Resources

- [ESPN's hidden API endpoints](https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b), gist by by akeaswaran
- [nfl-nerd](https://github.com/nntrn/nfl-nerd) [(api)](https://github.com/nntrn/nfl-nerd/blob/master/src/api.js) by nntrn
- [Using ESPN's new Fantasy API (v3)](https://stmorse.github.io/journal/espn-fantasy-v3.html) by stmorse
