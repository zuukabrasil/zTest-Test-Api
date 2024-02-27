const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');



const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

const connectDB = require('./config/db');
connectDB();

// Routes
const projectRoutes = require('./src/routes/projectRoutes');
const testCaseRoutes = require('./src/routes/testCaseRoutes');
const executedTestCaseRoutes = require('./src/routes/executedTestCaseRoutes');
const reportGenerateRoutes = require('./src/routes/reportGenerateRoutes')

app.use('/api/projects', projectRoutes);
app.use('/api/testcase', testCaseRoutes);
app.use('/api/executedtestcase/:id/status', executedTestCaseRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/reports/testcases/export/:format', reportGenerateRoutes);
app.use('/reports/projects/export/:format', reportGenerateRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
