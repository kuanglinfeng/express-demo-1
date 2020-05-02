import express from 'express'

const app = express()

app.get('/', function (request, response) {
  response.send('你好')
})

app.post('/xxx', (request, response, next) => {

})

const port: number = 5555

app.listen(port, function () {
  console.log(`服务运行在http://localhost:${ port }`)
})
