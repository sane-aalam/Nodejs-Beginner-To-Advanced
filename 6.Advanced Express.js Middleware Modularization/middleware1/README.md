

## What is Middleware?

  1.Middleware in Express.js is like a gatekeeper for your API routes. <br/>
  2.Modify req and res objects <br/>
  3.Execute code before sending a response <br/>
  4.Terminate request-response cycles <br/>
  5.Call the next middleware in the stack <br/>

##  Types of Middleware
Application-level Middleware → Applied to all routes or specific routes in the app. <br/>
Router-level Middleware → Applied to specific route groups using express.Router(). <br/>
Built-in Middleware → Comes with Express (e.g., express.json()). <br/>
Error-handling Middleware → Handles errors and exceptions. <br/>
Third-party Middleware → Installed via npm (e.g., morgan, cors). <br/>