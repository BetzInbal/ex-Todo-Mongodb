import exp from 'express'
import userRouter from './routes/userRouter'


const app = exp()

app.use(exp.json())

app.use('/user', userRouter)



app.listen(process.env.PORT)