## About

The scariest thing about React is setting it all up. The amount of configuration is at times crippling.

This is not YARB (Yet Another React Boilerplate).

Rather, this project attempts to break down the process of setting up a React app so others may follow along with the commits in a replayable fashion.

>Note: This is not comprehensive some assumptions may be made and some details may be omitted.

#### Prereqs
install node.js, npm

#### Set up WebPack
This is probably the first thing you'll run into.
http://webpack.github.io/docs/tutorials/getting-started/#config-file
```bash
npm install -g webpack webpack-dev-server
npm install --save css-loader style-loader

# running 'webpack' will now compile './build/index.js'
# give it a shot. go on. awwwyeah

webpack
```
