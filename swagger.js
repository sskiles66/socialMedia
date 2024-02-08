const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Posts',
      description: 'Description',
    },
    host: 'socialmediasite-ok41.onrender.com',
    schemes: ['https'],
};
  
const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)