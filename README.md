# React & Backbone workshop

##Outline

### Pre-requisites
- [What's NPM](https://www.npmjs.com/)
- [What's bower](http://bower.io/)
- [CommonJS / Node-style modules](http://nodejs.org/docs/latest/api/modules.html#modules_modules)
### Setup

- Clone the repo
- Install npm: ```brew install npm ```
- Install react tools: ```npm install react-tools```
- [Download React](http://facebook.github.io/react/downloads.html) (choose the development version)

### Intro

- Where does it fit in our eco system?
- Why?
- How?
  - component keys
  - [diff algorithm](http://calendar.perfplanet.com/2013/diff/)
- JSX & React Tools

### Modules and Tools

- CommonJS / Node-style modules
- Automation tools: Gulp and Grunt

### From Prototype to static React

- Checkout the step branch: ``` git checkout prototype ```
- Let's turn our prototype into working React components

### Props vs State

- state can be dynamically set, props can't
- state will trigger render
- [component life cycle](http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)
- [component specifications](http://facebook.github.io/react/docs/component-specs.html#component-specifications)

### The API
- Let's explore our API

### From static React to Dynamic React

- Checkout the step branch: ``` git checkout static ```
- Let's think of state
- Let's decide on component state vs props
- Let's call our API

### Backbone JS

- [Backbone vs MVC](http://backbonejs.org/#FAQ-mvc)
- Collections
- Models
- Router
- Replace Backbone view with React

### Event driven development (Backbone Events)
- let's communicate through events
- [Backbone's events](http://backbonejs.org/#Events)

### Backbone and React in action

- Checkout the step branch: ``` git checkout dynamic ```
- Let's call our API using Backbone
- Let's update our state based on Backbone events
