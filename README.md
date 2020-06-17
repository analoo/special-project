# Footsteps
https://track-footsteps.herokuapp.com/

footsteps is an easy and secure way for people to record daily the places they go and people they are with. If they get sick, they can quickly share their recent activity with trained contact tracers.  

Contact Tracing is an effective way of containing wide spread of diseases but many states are currently under staffed with contact tracers. Footsteps can help our healthcare system by making the process of locating contacts more simple without encroaching on individuals’ desire for privacy.

This project was built in less than two weeks for Girls In Tech Hackathon related to covid.


## Site Image
![site](#)

## Table of Contents

- [Technologies Used](#Technologies-Used)
- [Learning Points](#Learning-Points)
- [Code Snippets](#Code-Snippets)
- [Dependencies](#Dependencies)
- [Usage](#Usage)
- [Team](#Team)

## Technologies Used
- React - models and renders how the information displays in the browser.
- Sequelize - used to model, store and retrieve data
- MySQL - used to track application details
- Bootstrap - used to build a beautiful application
- Bcrypt - used to securely store user passwords and create secure cookies
- Git - version control system for tracking changes to code
- Github - to host the repository
- Axios - Promise based client for node.js
- Heroku - to host the deployed site
- Express - minimal and flexible web application framework
- NodeJs - JavaScript runtime built on Chrome's V8 JavaScript engine
- MomentJs - easily manipulate date time
- JavaScript - JavaScript is a prototype-based object-oriented program language 


## Learning Points
We built a simple application to ensure that we could build something that worked well and gave us an opportunity to learn new topics more in depth:

- Date and time is complicated. There is a difference between how time is captured and displayed. We ran into issues with trying to make a request to the database using strings that looked like date time.
- There are many methods of authenticating users. Pairing cookies with user context allowed us to create a seamless experience for users.

## Code-Snippets


## Dependencies
```
axios
bcrypt
chalk
concurrently
express
if-env
moment
mysql2
nodemon
request
require
router
sequelize
```
## Usage
- Click the [footsteps](https://track-footsteps.herokuapp.com/) link to go to the website.
- To test functionality, you can use the following login credentials:
    - email: test@mail.com, password: "password"
- Signup, Login, and Complete your Profile.
- Click on "New Activities" to add new information
- Go to activities page to review existing activities and edit or delete as needed

## Team
- [Nadine Bundschuh](https://github.com/nadineb1160) - Developer
- [Leila Bushman](https://www.linkedin.com/in/leilabushman/) - Product Management
- [Ana Medrano](https://github.com/analoo) - Developer


