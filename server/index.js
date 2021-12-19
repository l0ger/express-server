const express = require('express')
const errorHandlers = require('./middleware/error-handlers.middleware');
const activityRoutes = require('./routes/v1/activity.routes');
const app = express()
const cors = require('cors');
const port = 3005

app.use(cors());

app.get('/', (req, res) => res.send('Hi there!'));
app.use('/activity', activityRoutes);
app.use(errorHandlers.defaultErrorHandler);

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))