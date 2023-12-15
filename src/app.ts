import express from 'express'
import todosRoutes from './routes/todos'
import bodyParser from 'body-parser'
//install  @types/'whatever package you are using'
const app = express()

app.use(bodyParser.json())
app.use(todosRoutes)

app.listen(3000)