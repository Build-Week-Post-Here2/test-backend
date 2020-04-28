# test-backend
## DOCUMENTATION: 
https://documenter.getpostman.com/view/10351835/SzfDxQcp?version=latest

Post Here: Subreddit Predictor BW

Base URL: https://post-here-2.herokuapp.com/

Minimal api endpoints for Post Here 2 BW.


POST 
{{BaseUrl}}/api/auth/register

Post /api/auth/register Use this endpoint to register a new user.
Required: Username, password and email. optional: none

HEADERS
Content-Typeapplication/json
BODY raw
{
 
        "username": "usertest",
        "password": "test",
        "email": "user10@email.com"
}

POST 
{{BaseUrl}}/api/auth/login
POST /api/auth/login This endpoint logs the user in. User has to be registerd.

HEADERS
Content-Typeapplication/json
Authorization$2a$10$er2jsxF3L10FVdpXoZZfxuWwsls7lKaR/6YoebAfMI6yXGR5GQtFW
BODY raw
{
	"username": "usertest",
	"password": "test"
}




