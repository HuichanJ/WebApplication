const http = require('http');
const mathUtils = require*('./mathUtils');

const sum = mathUtils.add(500, 300);
const difference = mathUtils.subtract(100, 400);
const product = mathUtils.multiply(61, 75);

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./dirs/lab5.html', (err,data) => {
        if (err){
            console.log(err.message);
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

    server.listen(3000, 'localhost', () => {
        console.log("Server is listening");
    });