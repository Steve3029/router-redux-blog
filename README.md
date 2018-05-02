# react-app-boilerplate
## This is a React app project template. The goal it creates is as follows:
+ It explicitly uses webpack-dev-server as a development server, which allows the project to be developed independently. The project would be able to integrate with any kind of backend technologies, such as node.js, ASP.NET Core.
+ Do not have to follow the default folder structure like create-react-app. Through config webpack.config.js, you can assign a specific folder as your public path. 
  Example: 
  ```
  devServer: {
    contentBase: path.join(__dirname, 'your folder')
  }
  ```
+ You could import CSS style files from inside your components, and you could import CSS style of 3-party package (from node-modules) as well.
## Install instruction
+ clone the boilerplate
```
git clone https://github.com/Steve3029/react-app-boilerplate.git
```
+ install dependencies
```
npm install
```
+ testing - enter into the folder of boilerplate, then run "npm start" command
```
cd react-app-boilerplate
npm start
```
+ open your browser and access http://localhost:8080, then you will get "Welcom to React World!" on the page.