# Social Media API

## Description
This is a back-end API for a social network. This command-line application leverages Mongoose, Express, and Moment.js to perform CRUD operations on the database. To interact with the API, you can use tools like Insomnia and MongoDB Compass.

## User Story 
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
1. Have insomnia and MongoDB Compass is installed on your computer
2. in your terminal of the project us `npm install express mongoose moment`.

## Usage
- Type npm init -y into terminal to create a new .json file
- Type npm i into terminal
- Type npm i express mongoose moment in the terminal
- Type npm start into the terminal
- Once you see that the server is running open up your MongoDB Compass and Insomnia 

## Credits
- ChatGPT for helping me solve bugs, understanding the file structure, and explaining to me why I used some code it provided me to make the project function.

- Freecodecamp to understand more about NoSql databases and to better understand MongoDB and Mongoose.

- W3schools to help with refreshing myself with javascript.
