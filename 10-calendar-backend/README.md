# Backend for the Journal Application
## This is the backend for a MERN stack application.
### To be able to deploy this in Heroku:
* Allow the ip address in the Network Access tab in the project, in https://cloud.mongodb.com/.
* Add the environment variables using Heroku CLI, simply open command propmt and type: `heroku config:set PORT=4000`, and so on for every env variable.

### To view the logs of the application run in command propmt:
* `heroku logs -n 1000 --tail`

