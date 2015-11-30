var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;


var client = new Twitter({
    consumer_key: 'Dgw7oFgeYIY6ZAqqBuEGKevF0',
    consumer_secret: 'AFG2qD9EuZd8lF3eamTYEli5AlZfqRHMD8uMhA14uVqwcKLzqt',
    access_token_key: '2391869784-Z4BUE8KE0UcuLCk9dYuPlub8F1xQs26skqeOjiu',
    access_token_secret: 'G7zwvDvMh7rQ3ihTfdNW7FoLG17SjGqMJ1gVQrVYpHTr7'
});
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*' });
    client.get('search/tweets', {q: 'lolcat'}, function(error, tweets){
        response.end(JSON.stringify(tweets));
    });
}).listen(port);
