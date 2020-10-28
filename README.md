# my-diarium-backend
My Diarium is something like a journal where users make a record of their daily activities which we then refer to as memories

[![CircleCI](https://circleci.com/gh/iMichaelOwolabi/my-diarium-backend.svg?style=svg)](https://circleci.com/gh/iMichaelOwolabi/my-diarium-backend) [![Coverage Status](https://coveralls.io/repos/github/iMichaelOwolabi/my-diarium-backend/badge.svg?branch=develop)](https://coveralls.io/github/iMichaelOwolabi/my-diarium-backend?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/21e47ca8cf6b4b257297/maintainability)](https://codeclimate.com/github/iMichaelOwolabi/my-diarium-backend/maintainability)

### Setup Instruction
- Clone the repository
- cd into the project folder by running ```cd my-diarium``` on the terminal
- Install dependencies by running ```npm install```
- Download posgreSQL database engine
- Create a database and start the Postgres server
- Create a .env file at the root of the project
- Copy all the contents of the .env.sample file and fill them accordingly
- migrate database table by running ```npm run migration```
- Start the development server by running ```npm run dev```

**You should see "🚀 my diarium running on port port number" on the terminal**

Congratulations! You have successfully setup the server
