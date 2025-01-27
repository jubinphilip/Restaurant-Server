import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import router from './routes/routes.js'

const allowedOrigins = [
    'https://restaurant-client-git-main-jubinphilips-projects.vercel.app/',
    'https://restaurant-client-mnmfmjw6q-jubinphilips-projects.vercel.app/',
    'http://localhost:3000'
];

const app = express();

app.use(cors({
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', router);

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
