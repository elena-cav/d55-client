# d55-client

### Hosted API: https://d55-ec-test.herokuapp.com/

### Backend Repository: https://github.com/elena-cav/d55-server

### Hosted frontend: https://d55-test.netlify.app/

This is a frontend framework built as a tool for an Energy Company Account Manager to upload a CSV file of Customer Meter Readings and monitor the customers' energy

### Functionalities

- A user can upload a CSV file to the associated API and view a list of the successful and unsuccessful submissions
- A user can download a template CSV to upload the information in the correct format
- A user can visualise a list of all meter readings and sort them by reading, account id and meter reading id
- A user can visualise a list of all accounts and sort them by surname or account id
- A user can edit name, surname and email fo each account

### Error-handling

- 404 on non-existent path/a path for a non-existent account
- 400 wrong CSV format
- 413 Payload too large - CSV can be 500 records long max

## Setup

- Fork this repo
- Git clone URL on your machine
- npm install
- npm start
  - Runs the app in the development mode.
  - Open http://localhost:3000 to view it in the browser.
  - The page will reload if you make edits.
  - You will also see any lint errors in the console.
