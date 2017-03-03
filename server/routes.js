//solved with this solution: http://stackoverflow.com/a/27767658/2320153
module.exports = [

  //loading the main page
  {
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
          reply.file('public/html/index.html');
          console.log(`Main page loaded.`);
      }
  },

  //loading any of the "regular" sites
  {
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: 'public/html',
              listing: true
          }
      }
  },


  //serving files for HTML and for outer access
  {
      method: 'GET',
      path: '/files/{file*}',
      handler: {
          directory: {
              path: 'public/files',
              listing: true
          }
      }
  }

];
