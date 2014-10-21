# GDG DevFest 2014 Talk

This is the code repo, notes and slide backup repository for my [GDG DevFest 2014 Talk](http://gdghamburg.github.io/devfest/) about the wonderful [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack).

The slides will be originally hosted [here](https://slides.com/kjellski/gdg-devfest-2014/).

# Follow along

The git repo has tags that are chronologically ordered with _stepXY_, where XY is rising as we advance through the talk.

# Notes

These are my talk notes. You'll see them while I present since I'll go back and forth arround my desktop and I'm already in my Sublime here ;)

## Presentation

The basics are explained, yeoman and how it works with grunt, bower and npm is out of the way.

## Demo Time

Here we are, go ahead and show and tell my future self:

First off, generate an app:

    cd /tmp/ && mkdir demo && cd demo
    yo angular-fullstack gdg-dev-fest2014

step00 - this is the initial created demo app, come back here
step01 - explain how the folder structure is intendet to be used
step02 - create a new endpoint: `yo angular-fullstack:endpoint gdg`, change model and add seeds
step03 - create a new route: `yo angular-fullstack:route gdg`
step04 - add new route to the navbar controller, change the view for it,
         add the functionality to get data from backend and post to the backend
step05 -