# About Wonderful Wunderpus
Wonderful Wunderpus is a web-based platform desgined for anyone who is looking for a job and needs a centralized place for tracking their job applications. Wonderful Wunderpus allows the user to create/log in to their account, view job postings fetched from [Remotive Jobs Api](https://github.com/remotive-com/remote-jobs-api), create applications, assign priorities to applications, update application status as they move through the pipeline, and delete applications as desired.

# Screenshots
## Login
![Login.png](https://i.postimg.cc/kgyd7FTc/Login.png)

## Dashboard 1
![Dashboard.png](https://i.postimg.cc/Vkw8yHWv/Dashboard.png)

## Dashboard 2
![Dashboard2.png](https://i.postimg.cc/xjkJqcDH/Dashboard2.png)

## Add Application
![Add-Application.gif](https://i.postimg.cc/kgqVgsvY/Add-Application.gif)

## Application Form
![newjob.gif](https://i.postimg.cc/6pr3sZsV/newjob.gif)

## Update Application Status
![Update-Status.gif](https://i.postimg.cc/Pr8J4c2R/Update-Status.gif)

## Remove Application
![removejob.gif](https://i.postimg.cc/nLnLnLZy/removejob.gif)


# Built with
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [React Google Login](https://www.npmjs.com/package/react-google-login)
- [Material-UI](https://mui.com/)

# Getting Started
1. Clone this repo
```
  git clone https://github.com/Team-Wunderpuss-2-0/Wunderpus.git
```
2. From the project root directory, run `npm install` to install dependencies
3. In the root directory, create a `.env` file and add the following
```
MONGO_URI = 'YOUR MONGODB URI'
```
4. In the `client/components/LoginTemplate.js` file, replace `javascript const CLIENT_ID = 'YOUR CLIENT_ID'` with your Google OAUTH client id
5. Run `npm run dev` and go to http://localhost:8080 to open the application

