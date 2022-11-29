# Flashcode

![Flashcode Logo](https://media.discordapp.net/attachments/980147436196597820/1047194817567916203/flashcode_logo.jpg?width=1228&height=1228)

## Table of Contents

- [Demo Website](#demo-website)
- [About the Project](#about-the-project)
- [Built With](#built-with)

## Demo Website

#### Visit Demo Website **[here](https://flashcode.itsmesovit.com)**

## About The Project

This project is the final project for AF390 class. The goal of this project is to create a flashcard app for leetcode problem practice. The app will be able to generate flashcards for the user to practice. The app will also be able to keep track of the user profile to show progress. Flashcards will be generated based on a probabilistic algorithm that will generate flashcards based on the user's ability to solve the cards.

## Installation

### Clone the repo

```bash
git clone https://github.com/sovitpy/flashcode.git
```

### Install NPM packages in both backend and frontend

```bash
cd backend
npm install
cd ../frontend
npm install
```

### Create a .env file in backend folder

```bash
cd backend
touch .env
```

### Add the following to the .env file

```bash
PORT = 3001
MONGODB_URI = <YOUR_MONGO_DB_URI>
JWT_SECRET = <YOUR_JWT_SECRET>
JWT_EXPIRE = <YOUR_JWT_EXPIRATION_TIME>
```

### Run the app

```bash
cd backend
npm start
cd ../frontend
npm start
```

## Built With

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Oracle Cloud](https://www.oracle.com/cloud/)
- [Docker](https://www.docker.com/)
