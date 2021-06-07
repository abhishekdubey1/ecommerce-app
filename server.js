const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// eslint-disable-next-line no-console
const print = console.log.bind(console);

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  print('Server connected to mongoDb');
});
mongoose.connection.on('error', error => {
  print(`
	**************************************************************************
	Error is:
	${error}
	**************************************************************************
	`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  print(`App running on port ${port}...`);
});

// async function callApi() {
//   if (fakeData.length) {
//     for (let i = 0; i < fakeData.length; i++) {
//       // eslint-disable-next-line no-await-in-loop
//       const newProduct = await Product.create(fakeData[i]);
//       console.log(newProduct);
//     }
//   }
// }
