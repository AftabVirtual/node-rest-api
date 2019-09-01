# Project Title

NodeJs based Sample RESTful APIs.
## Getting Started

This sample project will help you to understand the correct way (or my way) of creating RESTful services using Nodejs. 
### Prerequisites
Basic javascript knowledge is more that sufficient.

### Installing
Download/clone the project and open it with Visual Studio or any other IDE.

Open terminal and run below commands

```
npm install
```


```
npm start
```


## Running the tests

After you have successfully setup the project on your machine you can now play with the API's using POSTMAN.

1. Get all tour details:
```
GET http://localhost:8091/tours
```
2. Get details by id:
```
GET http://localhost:8091/tours{id}
```
3. Add details:
```
POST http://localhost:8091/tours
```
Body:
```
{
  "id": ,
  "location": "Agra",
  "tourTitle": "TAJ Mahal",
  "tourCategory": "fun",
  "tourDescription": "Moon light View.",
  "price": 900,
  "currency": "INR"
}
```
4. Delete a tour:
```
DELETE http://localhost:8091/tours/{id}
```
5. Add partial details:

```
PATCH http://localhost:8091/tours/{id}
```

Body:

```
{
  "id": "0",
  "location": "Old Delhi",
  "tourTitle": "Taj Mahal",
  "tourCategory": "Fun",
  "tourDescription": "Moon light Taj View.",
  "price": 900,
  "currency": "INR"
}
```
