// API ROUTES

const request = require('request');
const json = {};

request.post({ url: 'http://localhost:3030/employees', body: json, json: true,}, 
            function (error, response, body) { 
                if (err) {
                    return console.error('upload failed:', err);
                  }
                  console.log('Upload successful!  Server responded with:', body);
            });                                                                        // POST #1

request.get('http://localhost:3030/employees')
            .on('response', function(response) {
              console.log(response.statusCode)              // 200
              console.log(response.headers['content-type']) 
            })
            .pipe(request.put('http://localhost:3030/employees'))                     // GET #2


request({method: 'PUT',
          preambleCRLF: true,
          postambleCRLF: true,
          uri: 'http://localhost:3030/employees',
    multipart: {
        chunked: false,
        data: [
          {
            'content-type': 'application/json',
            body: JSON.stringify({foo: 'bar',
            _attachments: {'message.txt': {follows: true, length: 30, 'content_type': 'text/plain' }}})
          },
          { body: 'I am an attachment' }
        ] // Data ends
      }
    },
    function (error, response, body) {
      if (error) {
        return console.error('upload failed:', error);
      }
      console.log('Upload successful!  Server responded with:', body);
    })                                                                      // PUT #3