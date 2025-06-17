import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import connnectDB from './config/db.js';
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'

dotenv.config();

const app= express();

const PORT=process.env.PORT || 5001;

//middlewares
app.use(cors({
    origin: "http://localhost:5173",
})
);
app.use(express.json());//this middle ware will parse JSON bodies:req.body
app.use(rateLimiter)



//simple custom middleware example
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes",notesRoutes)

connnectDB().then(()=>{
        app.listen(PORT,()=>{
        console.log('server has started at port ',PORT)
    });
});



//BEFORE REFACTORING AND WITHOUT ROUTES FOLDER AND CONTROLLERS

// app.get('/api/notes',
//     (req,res)=>{
//         res.status(200).send("you have 10 notes",)
//     }
// )
// app.post('/api/notes',
//     (req,res)=>{
//         res.status(201).json({message:"post created successfully"})
//     }
// )
// app.put('/api/notes:id',
//     (req,res)=>{
//         res.status(200).json({message:"post updated successfully"})
//     }
// )
// app.delete('/api/notes',
//     (req,res)=>{
//         res.status(200).json({message:"post deleted successfully"})
//     }
//  )
