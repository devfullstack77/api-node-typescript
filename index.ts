import Server from './server'

const port = '3000'

Server.app.listen(port, function () {
  console.log(`Api on port: ${port}`)
})
