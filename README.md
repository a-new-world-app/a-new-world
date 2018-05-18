# Google-project

## Overview
This is a game that is set on an alien planet that you landed along with your robot assistant.  You start the game with one robot that is OK at many things.  You then build more that are good at different things.  Goal of the game is to get as many robot assistants as you can.  Motivation for creating and reviewing routes will be the collection of resources that will allow the creation of additional robots.

## Background
The purpose of this project is to come up with a novel method by which to collect useful spatial language upon which an AI could be trained.  To that end the goals we would like to acheive in this proof-of-concept project are the following:
* The project should be able to collect a large number of high-quality directions
* The project should scale well with increased success not causing dramatically increased cost

## Rational
The reasoning behind our choice making it a game is that gamification has proven successful in croudsourcing data collection, eg. Foldit.  We have seperated the game into two different portions, collecting and rating directions, as we believe that as the amount of data collected going up increases a method would need to be in place to rate the data as improved data would likely improve the quality of the output AI. We are planning to offer in-game rewards to people for completion of either of these tasks as we believe that this would scale better than monitary compensation.

## Team Members
* Ian Macleod
  * Three years web development experience
  * Knowledge of Node.js
  * Will be in charge of basic background and Oauth as well as assisting on frontend. page
* TingTing Jiang
  * Proficient in server interaction and database storage 
  * Will be in charge of interface for the creation of routes
* Jon Halloran
  * Will be in charge of interface to allow users to create route directions
  * Will work on waypoint gameplay and user progress screen
  * Will work with Ian on any necessary integration using Java


## Technologies
* React Native
  * Will be used for basic interface
  * Chosen to due teams knowledge of JS/React.js
* JavaScript/Node.js
  * Chosen due to teams experience with OAuth in Node and team experience with JS
* MongoDB
  * Chosen due to ease of use with Node.js
  * NoSQL database structure is ideal for what we would want to send to Google
* Java 
  * Will be used for any functions that require native coding for performance reasons

## Gameplay
### Route Creation
![Map Input Wireframe](/assets/readmeAssets/Map_Input.jpg "Map Input Wireframe") \
In this portion of the gameplay the user will be given an embedded map with a route.  They will be tasked with providing a series of directions and pictures, according to the guidelines provided, that would allow another user to follow same path without the embedded map.  In-game motivation will be 

### Route Following
![Map Following Wireframe](/assets/readmeAssets/Map_Following.jpg "Map Following Wireframe")\
In this phase of the gameplay a user will be given a series of directions along with corresponding pictures.  They will use these directions to go between waypoints.  Users can click on the thumbnail image for a particular direction to see a full-screen view of the image.  Users also have the ability to rate images based on how helpful they are and request a new/different direction if the one provided is not sufficient.

### Robot Task Assignment
There will be various different types of robots in the game that will be differently able to do tasks.  Tasks will range from resource collection to research.  Users will be able to assign robots to various tasks that will allow them to be productive when user is not logged in.

### Waypoint Gameplay
![Action Gameplay](/assets/readmeAssets/Action_Gameplay.jpg "Action Gameplay")\
The specifics of this portion will depend on how much time is necessary to complete the route creation and route following portions of coding.  At waypoints users would get resources/robots/the away 

### Game order
Initial prompt for caution would appear before user is given login screen.  Upon logging in for for first time or clicking help button user would be directed to tutorial/introductory mission.  After completion or upon following logins user would be prompted to select either route creation or following.  Rewards for both of these would be modified depending on whether we needed people to do one or the other.  Rewards for creator would be dependant on positive ratings on their directions.  Rewards for follower would be contingent on successful completion of action gameplay and number of directions they needed.

## Timeframe
* 5/16 - 5/19: Learning necessary technologies and deciding which technologies we would need/desire to use in our app
* 5/20 - 5/20: Creation of basic backend to handle routes (1 person, 1 day)
* 5/20 - 5/24: Creation of Route Creation gameplay (1 person, 5 days)
* 5/21 - 5/22: Creation of Robot management gameplay
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
* User referal
* User interaction with help quests

## Crowdsourcing Plan
To increase user base we plan to recruit people we know to try the app.  We also plan to make posts on websites relavant to SF or games in general.  We plan to train users using an in-game tutorial.  We plan to motivate users to create high-quality data by rewarding the creation of data based on how useful other members of the team find it to be.  We plan to motivate these reviews also using in-game rewards.  We would also be very interested in integrating any suggestions the Google team may have to crowdsource volunteers.
