# Restaurant-Reservations
Here is an app for taking in restaurant reservations and saving them to the server. It is interesting and useful for learning express routing and making AJAX calls with Jquery. Where it falls short is the aspect of data storage; we have no connection to any sort of database, so after the server is refreshed in the bash terminal, the previous "data" will be lost. Below, I will walk you through the step-by-step process of how the files are structured.

As a first step, I created the front-end visuals for home page, reservation form, and reservation views. This is what the HTML files contain.

On the server.js file, after requiring node packages at the top, I needed to create a variable that would hold a restaurant guest's information. As you can see in the file, var tables is an array which holds the guest's name, phone number, e-mail, and id #. I also included an empty array called "waitlist", so that I could control how many people could hold reservations at a time. On line 56, you can see that if the number of objects(aka reservations) in the tables array exceeds 5, we will start pushing guests into the waitlist array.

In this file I also used Express.JS to create a basic server. This includes routes for getting and posting the table reservation data. I required the node package "path", which allows one to create route files which display different HTML documents. This way, you can have different layouts on different pages.

Finally, inside the HTML files, there are "<script>" tags which contain our AJAX calls using jQuery. This is how we will actually get and post data, appending it to the page in an HTML format.

Thanks for checking out my code, and please let me know if there is anything I can improve upon.
Happy coding!
