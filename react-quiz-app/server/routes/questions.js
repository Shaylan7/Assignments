const data = require('../data/data.js')
const userRoutes = (app, fs) => {
    // variables
    // const dataPath = './data/data.json';
  
    // READ
    //load file once and have it in memory 
    app.get('/game', (req, res) => {
            console.log('hello')
           res.send(data) 
    //   fs.readFile(dataPath, 'utf8', (err, data) => {
    //     if (err) {
    //       throw err;
    //     }
  
    //     res.send(JSON.parse(data));
      });
    };
  
  module.exports = userRoutes;
  