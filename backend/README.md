# CaloryPal Backend

## Introduction
CaloryPal utilizes REST APIs powered by Node.js and Express to query the data base using the CRUD operations to converse and send data between the front end and the database.

## API Details :
### Accepted Parameters
The API will respond to the following 'Accept:' values with appropriate content.
- text/plain - Content will be returned as a plain string.
- application/json - Content will be returned as a JSON object.
- text/html - Content will be returned as an HTML page containing key:value pairs in an unordered list.

### Operations

| Method | Path     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/calories/` | Fetches all the calorie datas from the database |
| `POST` | `/api/calories/` | creates and stores a calorie data in the database |
| `GET` | `/api/calories/:id` | Fetches specific calorie data with help of the id from the database |
| `PATCH` | `/api/calories/:id` | Updates specific calorie data with help of the id to the database |
| `DELETE` | `/api/calories/:id` | Deletes specific calorie data with help of the id from the database |
| `POST` | `/api/user/login` | Would make a login POST request to the database by crosschecking user info and returning a tokenised password to login |
| `POST` | `/api/user/signup` | Would make a login POST request to the database as well as save the user details to the database whilst returning tokenised password to login |

## Testing
Test CRUD operations, Accept parameters, and construct requests with [Postman](https://www.postman.com/)