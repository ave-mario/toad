# TOAD

Toad is one of several applications that automate the work flow of hotel. This is a frontend employee-side app based on [React.js](https://reactjs.org/).

## Requirements

The project uses `npm`. Before using the application you should download and install
[Node.js](https://nodejs.org/en/). Node.js uses `npm` by default.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find `git` [here](https://git-scm.com/downloads))

If the installation was successful, you should be able to run the following command.

```
$ node --version
v10.15.3
```

```
$ npm --version
6.4.1
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

```
$ npm install npm -g
```

## Get started

To get started you can simply clone the repository:

```
$ git clone https://github.com/ave-mario/toad.git
```

Then switch to folder `toad`:

```
$ cd toad
```

After that you are able to install all requirement dependencies. Just do it:

```
$ npm install
```

You are done with installation. Good job!

## Configure App

### Server

In the root folder of project open `src/config/api.js` and configure **port** and **route**. You need it to send requests to the server.

> Note: server side app you can find [here](https://github.com/ave-mario/bowser).

### Client

The application runs on port _3333_ by default. If you want to change it open `package.json`, find scripts part and change **port** as you like:

```
...
"scripts":{
  ...
  "start":"set PORT=YOUR_PORT && react-scripts start",
  ...
}
```

## Running the project

Just write the next command from root folder:

```
$ npm start
```

## Running the tests

You can run tests with some options:

```
$ npm run test /* to start tests once*/
$ npm run test:watch /* to start tests in watch mode. It means that test will fire on every changes in files*/
$ npm run test:update /* to update snapshots*/
$ npm run test:coverage /* to see code coverage by tests*/
```

## Simple build for production

You can _build_ the application with:

```
$ npm build
```

## Licence

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.
