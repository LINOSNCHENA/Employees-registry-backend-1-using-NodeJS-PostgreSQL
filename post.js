const request = require('request');
const json = {};

request.post({ url: 'http://localhost:6060/employees', body: json, json: true,}, 
            function (error, response, body) { 
                if (err) {
                    return console.error('upload failed:', err);
                  }
                  console.log('Upload successful!  Server responded with:', body);
            });

request.get('http://localhost:6060/employees')
            .on('response', function(response) {
              console.log(response.statusCode) // 200
              console.log(response.headers['content-type']) // 'image/png'
            })
            .pipe(request.put('http://mysite.com/img.png'))


 request({method: 'PUT',
          preambleCRLF: true,
          postambleCRLF: true,
          uri: 'http://localhost:6060/employees',
    multipart: {
        chunked: false,
        data: [
          {
            'content-type': 'application/json',
            body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
          },
          { body: 'I am an attachment' }
        ]
      }
    },
    function (error, response, body) {
      if (error) {
        return console.error('upload failed:', error);
      }
      console.log('Upload successful!  Server responded with:', body);
    })