//Required Modules
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');

const laptopController = require('./controllers/LaptopController');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const dotenv = require('dotenv');
dotenv.config();

// Db Connection
const connectDb = require('./config/db');
connectDb();
app.use(express.json());

app.get('/api/products', async (req, res) => {
  let laptopsData = await laptopController.getLaptops();
  res.send(laptopsData);
});

app.get('/api/products/:id', async (req, res) => {
  const product = await laptopController.getLaptopsById(req.params.id);
  res.send(product);
});

// APP Deployment ***************************************************

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send(' API is running');
  });
}
// *******************************************************************
//server listenner
app.listen(PORT, console.log(`My Server works on PORT ${PORT}`));

// Paths
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
