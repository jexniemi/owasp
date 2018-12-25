This is a web-application made to demonstrate 5 of the OWASP Top 10 Application Security Risks – 2017. The application consists of two separate parts, the frontend made with React.js and the backend made with Node.js (using express), both of which are intended to be used only on your local machine and in development mode to demostrate the OWASP application security risks.

## INSTRUCTIONS

The frontend and backend should be started separately in separate terminal windows. You need to have the following software installed in order to run the project:

* Node.js / NPM (Node Package Manager, installed along with Node.js)

### Windows

-

### Linux 

-

### Mac

- 

## The application

Suppose there is a lottery, where participants can draw raffle tickets that contain codes. There is only one winning code and that can be checked by the administrator via a hidden page. This application's core functionality is to give the lotter participants a possibility to submit their name, e-mail and the code found in their raffle ticket via a form. After they have submitted their details, the winner will be later on contacted by the administrator, who has check if any of the codes submitted by the users match the winning code.

Keep in mind that this application does not use a real database, so any data submitted to the backend will be cleared if the application is restarted. Also, there is some data hard coded directly to the backend (such as the winning raffle code, and possibly some user details, you should never do this!!), as it will be there only for demonstration purposes. In a real-world situation this data would be hidden in the database, but the hard coded data is suitable for our usage.

## OWASPS security risks found in the application

### Sensitive Data Exposure

The supposedly secret winning code is directly viewable by anyone at http://localhost:4100/secretCode (localhost:4100 being the backend address that is used local development mode, in production it would be available as well). Also, all the submits by any all users are available at http://localhost:4100/submits, the data in each submit also contains sensitive user information that could be compromised, such as their names and e-mail addresses. This issue could be fixed by showing the data only to a verified user (the admin), so that each request to these endpoints would require the user to send authorization header (containing their token that would be verified at the backend for example) along with their request.