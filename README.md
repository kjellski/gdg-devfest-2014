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

And follow these _tags_, you'll get to a basic app sceleton that is ready to deploy:

* [step00](https://github.com/kjellski/gdg-devfest-2014/releases/tag/stop00_just_generated) - this is the initial created demo app, come back here
* [step01](https://github.com/kjellski/gdg-devfest-2014/releases/tag/step01_show_folder_structure) - explain how the folder structure is intendet to be used
* [step02](https://github.com/kjellski/gdg-devfest-2014/releases/tag/step02_create_endpoint_gdgs) - create a new endpoint: `yo angular-fullstack:endpoint gdg`, change model and add seeds
* [step03](https://github.com/kjellski/gdg-devfest-2014/releases/tag/step03_create_new_route) - create a new route: `yo angular-fullstack:route gdg`
* [step04](https://github.com/kjellski/gdg-devfest-2014/releases/tag/step04_get_post_backend) - add new route to the navbar controller, change the view for it, add the functionality to get data from backend and post to the backend
* [step05](https://github.com/kjellski/gdg-devfest-2014/releases) - have a look at the minification and build process
* [step06](gdg-devfest-2014.herokuapp.com) - deploy to heroku `yo angular-fullstack:heroku`