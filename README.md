# test-backend
## DOCUMENTATION: 
https://documenter.getpostman.com/view/10351835/SzmY8M1Y?version=latest 

Post Here: Subreddit Predictor BW

Base URL: https://posthere2.herokuapp.com/

Minimal api endpoints for Post Here 2 BW.


### POST 
*{{BaseUrl}}/api/auth/register

*Post /api/auth/register Use this endpoint to register a new user.
*Required: Username, password and email. optional: none

*HEADERS
*Content-Typeapplication/json
*BODY raw
```
{
 
        "username": "usertest",
        "password": "test",
        "email": "user10@email.com"
}
```
### POST 
*{{BaseUrl}}/api/auth/login
*This endpoint logs the user in.
*User has to be registerd.

*HEADERS
*Content-Typeapplication/json
*Authorization: token required
*BODY raw

```
{
	"username": "usertest",
	"password": "test"
}
```
### POST 
*{{BaseUrl}}/api/posts/user/:id
*POST request /api/posts/user/1 
*This endpoints add a new recipe to user 1 by id. 
*User has to be logged in.

*HEADERS
*Content-Type: token required
*BODY raw

```
{
	"title": "New Post",
	"body": "This is the first post for a subreddit predictor "
}
```
### GET 
* /api/posts/user/:id
* {{BaseUrl}}/api/posts/user/1
* GET request /api/post/user/1 
* This endpoint will get all the posts from user with id 1. 
* User has to be logged in and have posts saved.

HEADERS
Content-Typeapplication/json
Authorization: token is required



