## About

The scariest thing about React is setting it all up. The amount of configuration is at times crippling.

This is not YARB (Yet Another React Boilerplate).

Rather, this project attempts to break down the process of setting up a React app so others may follow along with the commits in a replayable fashion.

>Note: This is not comprehensive some assumptions may be made and some details may be omitted.

>Also, I may have gotten some of the steps wrong. Look out for changes in the following commits if you're confused about something.

#### Prereqs
* install node.js + npm

#### Set up WebPack
This is probably the first thing you'll run into.
* http://webpack.github.io/docs/tutorials/getting-started/#config-file

```bash
npm install -g webpack webpack-dev-server
npm install --save css-loader style-loader

# running 'webpack' will now compile './build/index.js'
# give it a shot. go on. awwwyeah

webpack
```


#### Install React, Set Up Babel
React is cool. ES6 is cool. React + ES6 = 2 cool for school.
* https://facebook.github.io/react/docs/getting-started.html
* https://babeljs.io/docs/setup/#webpack

```bash
npm install --save react react-dom babel-loader babel-core babel-preset-react babel-preset-es2015

# Now is a good time to use webpack-dev server to make life easier
webpack-dev-server --progress --colors --watch
```

#### Install Redux
Redux is simple. Learn all about it here:
* http://redux.js.org/
* https://egghead.io/series/getting-started-with-redux

React-Redux hooks React with Redux and makes life easier!
```bash
npm install --save redux react-redux
```

#### Intall React Router

* https://github.com/reactjs/react-router
* https://github.com/reactjs/react-router-tutorial/tree/start/lessons
* https://github.com/reactjs/react-router-redux

```bash
npm install --save react-router react-router-redux
```
