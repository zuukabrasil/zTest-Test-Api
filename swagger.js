const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
    info: {
        version: "1.0.0",
        title: "zTest-Test-API",
        description: "Some description..."
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],

};

const outputFile = './swagger-output.json';
const projectController = ['src/controllers/projectController.js'];
const testCaseController = ['src/controllers/testCaseController.js'];

swaggerAutogen(outputFile,projectController, testCaseController, doc).then(() => {
    require('./index');           // Your project's root file
});