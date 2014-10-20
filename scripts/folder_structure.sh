#!/bin/zsh

tree -L 3 -C --dirsfirst -I "node_modules|bower_components" $1
