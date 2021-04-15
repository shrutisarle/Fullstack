const fs = require('fs'); 
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
let aboutMessage = "Inventory Tracker API v1.0";

const productDB = [
  // {
  //   id: 1, category: 'Jeans', name: 'HIGHEST WAIST MOM JEAN', price: 59,
  //   image: 'https://www.ae.com/us/en/p/women/high-waisted-jeans/highest-waist-mom-jeans/highest-waist-mom-jean/0436_2487_973?menu=cat4840004',
  // },
  // {
  //   id: 2, category: 'Jackets', name: 'Hooded Corduroy Jacket', price: 34,
  //   image: 'https://www.forever21.com/us/shop/catalog/product/f21/outerwear_coats-and-jackets/2000392334',
  // },
]; 

const resolvers = {
  Query: {
    about: () => aboutMessage,
    productList,
  },
  Mutation: {
    setAboutMessage,
    productAdd
  },
};

function productAdd(_, { product }) {
  product.id = productDB.length + 1;
  productDB.push(product);
  return product;
} 

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

function productList() {
  return productDB;
} 

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
});
const app = express();
app.use(express.static('public'));
server.applyMiddleware({ app, path: '/graphql' });
app.listen(3000, function () {
  console.log('App started on port 3000');
});