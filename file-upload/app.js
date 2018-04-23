const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('./index2.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    }

    if (req.url === '/submit') {
        let segment = []
        req.on('data', (chunk) => {
            segment.push(chunk)
        });

        req.on('end', () => {
            let buffer = Buffer.concat(segment)
            console.log(buffer)
            fs.writeFile('test.jpg', buffer, function (err) {
                res.writeHead(200)
                res.end()
            })

        })
    }
}).listen(3000)
