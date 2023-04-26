# NodeJS-Application

> Node.js Application with Express and MongoDB Backend and React/Next.js Frontend

This project involves creating a Node.js application using the Express framework and MongoDB database, and connecting it to a frontend application developed using either React or Next.js. The main objective of the project is to fetch data from the MongoDB database and display it on the frontend in a table format, based on certain criteria. 

### Tech stack used: 

> NodeJS, ExpressJS, React, JavaScript, MongoDB, NPM

### Functionality

The main objective of the project is to fetch data from the MongoDB database and display it on the frontend in a table format, based on certain criteria.

### Working

The sample data provided in the "sample_data.json" file will be used to populate the database. The project involves implementing several API endpoints that efficiently and quickly retrieve the required data based on specific conditions, such as users with certain income levels and car brands, users with specific last names and email criteria, and top cities with the highest number of users and their average income.

### APIs are: 

> /query1
This API is used to retrieve data from the mongodDB database based on the query given i.e. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

> /query2
This API is used to retrieve data from the mongodDB database based on the query given i.e. Male Users which have phone price greater than 10,000.

> /query3
This API is used to retrieve data from the mongodDB database based on the query given i.e. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

> /query4
This API is used to retrieve data from the mongodDB database based on the query given i.e. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

> /query5
This API is used to retrieve data from the mongodDB database based on the query given i.e. Show the data of top 10 cities which have the highest number of users and their average income.

### Screenshots
(These screenshots do not show the complete data)

> Table page
![Table page](https://github.com/VisheshGrg/NodeJS-Application/blob/main/images/Screenshot%20from%202023-04-26%2019-04-31.png)
![Table page](https://github.com/VisheshGrg/NodeJS-Application/blob/main/images/Screenshot%20from%202023-04-26%2019-04-40.png)
![Table page](https://github.com/VisheshGrg/NodeJS-Application/blob/main/images/Screenshot%20from%202023-04-26%2019-04-57.png)
![Table page](https://github.com/VisheshGrg/NodeJS-Application/blob/main/images/Screenshot%20from%202023-04-26%2019-05-06.png)
![Table page](https://github.com/VisheshGrg/NodeJS-Application/blob/main/images/Screenshot%20from%202023-04-26%2019-05-16.png)

