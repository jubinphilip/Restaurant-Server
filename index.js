import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import router from './routes/routes.js'

const allowedOrigins = [
  'https://restaurant-client-one.vercel.app',
  'https://restaurant-client-mnmfmjw6q-jubinphilips-projects.vercel.app',
  'http://localhost:3000'
];

const corsOptions = {
  origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: 'GET,POST'
};
const app = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', router);

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
