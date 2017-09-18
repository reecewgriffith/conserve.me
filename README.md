# Conserve.me

## Made for a Hackathon, placing in Top 10
https://devpost.com/software/conserve-me

## Team
- Reece W. Griffith 
  - Front-end 
  - https://github.com/reecewgriffith
- Andrew Rojas 
  - Back-end 
  - https://github.com/amrojas
- Claudia Moncaliano 
  - Integration 
  - https://github.com/cjmoncaliano

## Inspiration
Two of our developers are from Southern California, where a major drought has been putting strains on water supplies since 2014. Strict regulations were put on water usage. Citizens were even fined hundreds of dollars for washing their cars on unauthorized days. Water bills increased dramatically. Everyone was making efforts to conserve water to avoid the fees but also to protect the well-being of their state. Our team believes protecting the environment should be fun and easy. It should also be trackable, so that individuals can make a more precise and calculated effort to improve the state of the environment. Live a more sustainable life with Conserve.me. Track your waste and conservation efforts and challenge your friends to see who can gain the most green karma. Set goals for shorter showers, less plastic bottle usage, carpooling, and more! Improve the your world.

## What it does
This application tracks simple tasks (self-reported by user) that can improve environmental sustainability, like carpooling, taking shorter showers, and avoiding non-reusable water bottles. It also rewards the user for good (green) acts and punishes them for negative ones. There is a built in point system that calculates a users overall point value (Green Karma) based on their actions and adds it to their profile. These points are also analyzed over set time periods to allow the user to see their overall trends in waste and conservation, which will allow them to improve their overall efforts.

## How We built it
The Front-end of the application is done in the Ionic Framework, a native mobile application development platform that utilizes typescript to simultaneously create apps for iOS, Android, and Windows devices. Standard HTML and CSS are also used for styling and structure. The popular charting library, Chart.js, was used on our analytics page to give the user a dynamic and beautiful way of visualizing the outcomes of their actions.

The Back-end is done in Laravel with PHP. We created a user model and tokenized login. We have also create posts, and put and get requests to communicate with the Ionic Front-end.

## Challenges We ran into
The most difficult part of this project was connecting the front and back-ends together. This is still a source of difficulty, but we plan to improve it in the future.

## Accomplishments that We're proud of
We are proud of our aesthetically pleasing user interface. We are also happy that we were able to use a native framework to develop an application for two platforms at once. We are proud of our work done in the back-end portion, because we had little experience connection back-end to front in mobile applications.

## What We learned
Each team member contributed different things to this project. We all learned a little bit about our teammates part of the application. We also gained experience communication throughout the stack.

## What's next for Conserve.me
We hope to get involved with some IoT devices that can connect directly to our application. There are many household "smart" devices being used these days. If we could connect a thermostat, refrigerator, lighting systems, or even a designated Conserve.me recycling can that would communicate directly with the application, it would make self recording a thing of the past for users. A can is recycled and the user receives 100 Green Karma Points. Their GPS shows us they drove for 15 minutes, but they select carpool when notified by our app, giving them more points to show off to their friends. Eventually, Conserve.me will move into the social sphere, with sharing features and friend progress feeds, to get even more groups of people involved in the green movement.

## Built With
- ionic
- typescript
- html
- scss
- javascript
- laravel
- php
- apple
- android
 
## How to use Ionic

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

