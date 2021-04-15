# Fullstack_Assignment 5
Product Inventory Using React Router, MongoDB

Here we will focus on routing and adding update and delete APIs to your application.

### Routing
Demonstrate your knowledge of route parameters by adding a new page for the image display. When the user clicks the View link in grid, they should redirect to the new page and the product appears by programmatically setting an <img> tag to the URL that we're storing in the database.

### Edit / Update
Create an edit / update page. This will require you to perform a few tasks:

Create an Update API

Create a Delete API

•	Modify the schema by adding a new mutation entry point. This should just take in the ID of the field to be deleted and return a Boolean value to indicate successful deletion.

•	Connect the API to its resolver in api_handler.js (assuming you named your file as such).

•	Create a remove() function (not delete() because delete is a reserved keyword) and implement the actual resolver in your main .js file.

•	Don't forget to export the delete function as remove.

•	Add a Delete button within every row in your grid. When the user clicks the Delete button it should delete that product.
