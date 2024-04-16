const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Calculator endpoint
app.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      return res.status(400).send('Invalid operation');
  }

  res.json({ result });
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator server is running on http://localhost:${port}`);
});
