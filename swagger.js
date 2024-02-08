const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Posts',
      description: 'Description',
    },
    host: 'localhost:4040',
    schemes: ['http'],
};
  
const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)