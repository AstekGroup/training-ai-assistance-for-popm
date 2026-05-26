const path = require('path');

module.exports = {
    stylesheet: path.resolve(__dirname, '../assets/astek-theme.css'),
    pdf_options: {
        format: 'A4',
        margin: {
            top: '2.5cm',
            bottom: '1.5cm',
            left: '1.5cm',
            right: '1.5cm'
        },
        displayHeaderFooter: true,
        headerTemplate: `
      <div style="font-size: 10px; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; border-bottom: 0.5px solid #eee;">
        <span style="color: #009C49; font-weight: bold;">GROUPE ASTEK</span>
        <img src="file://${path.resolve(__dirname, '../assets/astek-logo.png')}" style="height: 30px;">
      </div>
    `,
        footerTemplate: `
      <div style="font-size: 8px; width: 100%; text-align: center; color: #666; padding-top: 5px;">
        Astek Group - Formation IA PO/PM - <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>
    `
    },
    md_file_encoding: 'utf-8',
    stylesheet_encoding: 'utf-8',
};
