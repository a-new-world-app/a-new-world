# Google-project

## Overview
This is a game that is set in a future after an alien invasion.  The users are tasked with either A) Given a map with a path writing a series of directions with pictures that could lead the next person between waypoints B) Given said directions and pictures, following the waypoints and completing objectives, in the form of a game, at the waypoints.  Successful competion of objectives at waypoint gives rewards to both writer and reader of waypoints.
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
  * Would be used, if needed, to make Unity game work on Android
  * If creating viable game on Unity proves difficult may be used to make game entirely
  * May not be used
* Java (2 with experience, 1 has built simplistic apps)
  * Would be used if learning curve on Kotlin is steaper than desired
  * Would be used, if needed, to make Unity game work on Android

## Gameplay
### Login/Tutorial
  