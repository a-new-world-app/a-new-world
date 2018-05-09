# Google-project

## Overview
This is a game that is set in a future after an alien invasion.  The users are tasked with either A) Given a map with a path writing a series of directions with pictures that could lead the next person between waypoints B) Given said directions and pictures, following the waypoints and completing objectives, in the form of a game, at the waypoints.  Successful competion of objectives at waypoint gives rewards to follower.  Rewards for writer are given based on review of their directions.
## Background
The purpose of this project is to come up with a novel method by which to collect useful spatial language upon which an AI could be trained.  To that end the goals we would like to acheive in this proof-of-concept project are the following:
* The project should be able to collect a large number of high-quality directions
* The project should scale well with increased success not causing dramatically increased cost

## Rational
The reasoning behind our choice making it a game is that gamification has proven successful in croudsourcing data collection, eg. Foldit.  We have seperated the game into two different portions, collecting and rating directions, as we believe that as the amount of data collected going up increases a method would need to be in place to rate the data as improved data would likely improve the quality of the output AI. We are planning to offer in-game rewards to people for completion of either of these tasks as we believe that this would scale better than monitary compensation.

## Technologies
* Unity (2 people have gone through basic tutorials up to making an APK)
  * Unity is being used due to it appearing to be simple to create a reasonably interesting game given sprites
  * No people on our team are particulary skilled in Unity so project may be converted to 100% Java/Kotlin depending on difficulty.
* Kotlin (0 experience)
  * No people in our group are experienced in Kotlin but one, who knows Java, has expressed an interest in learning
  * Would be used, if needed, to make Unity game work on Android or for scenes requiring embedded map
  * If creating viable game on Unity proves difficult may be used to make game entirely
  * May not be used
* Java (2 with experience, 1 has built simplistic apps)
  * Would be used if learning curve on Kotlin is steaper than desired
  * Would be used, if needed, to make Unity game work on Android or for scenes requiring embedded map

## Gameplay
### Route Creation
![Map Input Wireframe](/assets/readmeAssets/Map_Input.jpg "Map Input Wireframe")
In this portion of the gameplay the user will be given an embedded map with a route.  They will be tasked with providing a series of directions and pictures, according to the guidelines provided, that would allow another user to follow same path without the embedded map.

### Route Following
![Map Following Wireframe](/assets/readmeAssets/Map_Following.jpg "Map Following Wireframe")
In this phase of the gameplay a user will be given a series of directions along with corresponding pictures.  They will use these directions to go between waypoints.  Users can click on the thumbnail image for a particular direction to see a full-screen view of the image.  Users also have the ability to rate images based on how helpful they are and request a new/different direction if the one provided is not sufficient.

### Waypoint Gameplay
![Action Gameplay](/assets/readmeAssets/Action_Gameplay.jpg "Action Gameplay")
The specifics of this portion will depend on how much time is necessary to complete the route creation and route following portions of coding.  Ideally we would like to build a simplistic stealth or shoot em up type game but as a backup we would make a simple decoding wordgame.  For scalability we would need this to be engaging to increase user base.

### Game order
Initial prompt for caution would appear before user is given login screen.  Upon logging in for for first time or clicking help button user would be directed to tutorial/introductory mission.  After completion or upon following logins user would be prompted to select either route creation or following.  Rewards for both of these would be modified depending on whether we needed people to do one or the other.  Rewards for creator would be dependant on positive ratings on their directions.  Rewards for follower would be contingent on successful completion of action gameplay and number of directions they needed.

## Timeframe
* 5/16 - 5/19: Learning necessary technologies and deciding which technologies we would need/desire to use in our app
* 5/20 - 5/22: Creation of basic backend to handle routes (1 person, 3 days)
* 5/20 - 5/24: Creation of Route Creation gameplay (1 person, 5 days)
* 5/20 - 5/24: Creation of Route Following gameplay/route review system (1 person, 5 days)
* 5/25 - 5/31: Creation of Waypoint Gameplay (2 people, 1 week)
* 5/25 - 5/31: Creation of rewards system and user/character page (1 person, 1 week)

## Goals
### Minimum Viable Goals
* Route Creation and Display functional and visibly appealing
* Routes able to be stored to database
* Rating system for routes functional
* Functional rewards system
* User/character page

### Additional Goals
* Waypoint Gameplay compelling enough to maintain user engagement
* Rewards system of badges to display on user page
* Inventory system in game
* Rewards systm to include items
* Waypoint Gameplay to include use of items
## Crowdsourcing Plan
To increase user base we plan to recruit people we know to try the app.  We also plan to make posts on websites relavant to SF or games in general.  We plan to train users using an in-game tutorial.  We plan to motivate users to create high-quality data by rewarding the creation of data based on how useful other members of the team find it to be.  We plan to motivate these reviews also using in-game rewards.
