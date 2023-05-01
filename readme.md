# HR Management System

This is a web-based HR management system that allows HR personnel to manage employee information, such as personal details, job information, and salary information.

## Installation

1. Clone the repository: `git clone https://github.com/skddj/hr-management-system.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open the application in your browser at `http://localhost:3000`

## Usage

1. Login with your credentials
2. Navigate to the desired section to manage employee information
3. Use the provided forms to add, edit, or delete employee information

## Code Explanation

The application is built using Node.js and Express.js on the backend, and React.js on the frontend. The backend handles API requests and database operations, while the frontend handles user interface and user input validation.

### Vulnerabilities

1. SQL Injection: The application is vulnerable to SQL injection attacks, as it does not properly sanitize user input before using it in SQL queries. This can be fixed by using parameterized queries or an ORM that automatically sanitizes input.
2. Cross-Site Scripting (XSS): The application is vulnerable to XSS attacks, as it does not properly sanitize user input before rendering it in the browser. This can be fixed by using a library like DOMPurify to sanitize user input before rendering it.
// To continue development on this project, follow these steps:
// 1. Make sure you are on the master branch: `git checkout master`
// 2. Pull the latest changes from the remote repository: `git pull`
// 3. Create a new branch for your feature or bug fix: `git checkout -b my-feature-branch`
// 4. Make your changes and commit them: `git commit -m "Add new feature"`
// 5. Push your changes to the remote repository: `git push origin my-feature-branch`
// 6. Create a pull request on GitHub and wait for code review and approval before merging your changes into the master branch.

This repo is forked by mrcaidev's repo, and change some code(like config, database, style...), thank you for your contribution!

