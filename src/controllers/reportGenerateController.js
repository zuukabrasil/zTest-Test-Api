const json2csv = require('json2csv').parse;
const exceljs = require('exceljs');

module.exports = {

    async testCaseReportGenerate (req, res) {
        try {
            // Recupera todos os casos de teste
            const testCases = await getAllTestCase();
    
            // Verifica o formato solicitado
            const format = req.params.format;
    
            // Verifica se há dados para exportar
            if (testCases.length === 0) {
                return res.status(404).json({ message: "Nenhum caso de teste encontrado." });
            }
    
            // Exporta os dados para o formato solicitado
            if (format === 'csv') {
                const csv = json2csv(testCases);
                res.header('Content-Type', 'text/csv');
                res.attachment('testcases.csv');
                return res.send(csv);
            } else if (format === 'excel') {
                const workbook = new exceljs.Workbook();
                const worksheet = workbook.addWorksheet('TestCases');
                worksheet.columns = Object.keys(testCases[0]).map(key => ({ header: key, key: key }));
                testCases.forEach(testCase => {
                    worksheet.addRow(testCase);
                });
                res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                res.attachment('testcases.xlsx');
                return workbook.xlsx.write(res).then(() => {
                    res.status(200).end();
                });
            } else {
                return res.status(400).json({ message: "Formato de exportação inválido. Use 'csv' ou 'excel'." });
            }
        } catch (error) {
            console.error("Erro ao exportar casos de teste:", error);
            return res.status(500).json({ message: "Erro interno do servidor ao exportar casos de teste." });
        }
    },
    async projectReportGenerate (req, res) {
        try {
            // Recupera todos os projetos
            const projects = await getAllProjects();
    
            // Verifica o formato solicitado
            const format = req.params.format;
    
            // Verifica se há dados para exportar
            if (projects.length === 0) {
                return res.status(404).json({ message: "Nenhum projeto encontrado." });
            }
    
            // Exporta os dados para o formato solicitado
            if (format === 'csv') {
                const csv = json2csv(projects);
                res.header('Content-Type', 'text/csv');
                res.attachment('projects.csv');
                return res.send(csv);
            } else if (format === 'excel') {
                const workbook = new exceljs.Workbook();
                const worksheet = workbook.addWorksheet('Projects');
                worksheet.columns = Object.keys(projects[0]).map(key => ({ header: key, key: key }));
                projects.forEach(project => {
                    worksheet.addRow(project);
                });
                res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
                res.attachment('projects.xlsx');
                return workbook.xlsx.write(res).then(() => {
                    res.status(200).end();
                });
            } else {
                return res.status(400).json({ message: "Formato de exportação inválido. Use 'csv' ou 'excel'." });
            }
        } catch (error) {
            console.error("Erro ao exportar projetos:", error);
            return res.status(500).json({ message: "Erro interno do servidor ao exportar projetos." });
        }
    }
}