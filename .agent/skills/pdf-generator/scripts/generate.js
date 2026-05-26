const { mdToPdf } = require('md-to-pdf');
const path = require('path');
const fs = require('fs');

// Resolve static assets relative to this script's directory
const logoPath = path.resolve(__dirname, '../assets/astek-logo.png');
const stylesheetPath = path.resolve(__dirname, '../assets/astek-theme.css');

if (!fs.existsSync(logoPath)) {
    console.error(`Error: Logo not found at ${logoPath}`);
    process.exit(1);
}

if (!fs.existsSync(stylesheetPath)) {
    console.error(`Error: Stylesheet not found at ${stylesheetPath}`);
    process.exit(1);
}

const logoBase64 = fs.readFileSync(logoPath, { encoding: 'base64' });
const logoDataUri = `data:image/png;base64,${logoBase64}`;

const config = {
    stylesheet: stylesheetPath,
    pdf_options: {
        format: 'A4',
        margin: {
            top: '3cm',
            bottom: '2cm',
            left: '2cm',
            right: '2cm'
        },
        displayHeaderFooter: true,
        printBackground: true,
        headerTemplate: `
            <div style="font-size: 10px; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; border-bottom: 0.5px solid #eee; height: 50px;">
                <span style="color: #009C49; font-weight: bold; font-family: 'Poppins', sans-serif;">GROUPE ASTEK</span>
                <img src="${logoDataUri}" style="height: 35px;">
            </div>
        `,
        footerTemplate: `
            <div style="font-size: 9px; width: 100%; text-align: center; color: #666; padding-top: 5px; font-family: 'Poppins', sans-serif;">
                Astek Group - Formation IA PO/PM - <span class="pageNumber"></span> / <span class="totalPages"></span>
            </div>
        `
    }
};

async function generate() {
    const args = process.argv.slice(2);
    const files = [];
    let landscape = false;
    let noBreakH2 = false;
    let noBreaks = false;

    for (const arg of args) {
        if (arg === '--landscape' || arg === '-l') {
            landscape = true;
        } else if (arg === '--no-break-h2' || arg === '-nb') {
            noBreakH2 = true;
        } else if (arg === '--no-breaks') {
            noBreaks = true;
        } else if (arg.startsWith('-')) {
            console.warn(`Warning: Unknown option "${arg}"`);
        } else {
            files.push(arg);
        }
    }

    if (files.length === 0) {
        console.log('Usage: node generate.js [options] <file1.md> [file2.md] ...');
        console.log('\nOptions:');
        console.log('  -l, --landscape    Set page orientation to landscape');
        console.log('  -nb, --no-break-h2 Disable automatic page breaks before H2 titles');
        console.log('  --no-breaks        Disable preserving simple line breaks from Markdown');
        console.log('\nExample: node generate.js --landscape -nb ../../ressources/plan.md');
        process.exit(0);
    }

    // Dynamic configuration based on flags
    const currentConfig = {
        ...config,
        marked_options: {
            breaks: !noBreaks
        },
        pdf_options: {
            ...config.pdf_options,
            landscape: landscape
        }
    };

    if (noBreakH2) {
        currentConfig.css = `
            h2 { 
                page-break-before: auto !important; 
                break-before: auto !important; 
                margin-top: 2em !important;
            }
        `;
    }

    for (const fileArg of files) {
        const sourcePath = path.resolve(process.cwd(), fileArg);

        if (!fs.existsSync(sourcePath)) {
            console.error(`Warning: Skipping "${fileArg}" - File not found.`);
            continue;
        }

        const ext = path.extname(sourcePath).toLowerCase();
        if (ext !== '.md' && ext !== '.markdown') {
            console.error(`Warning: Skipping "${fileArg}" - Not a markdown file.`);
            continue;
        }

        const destPath = sourcePath.replace(/\.(md|markdown)$/i, '.pdf');

        console.log(`Generating PDF for ${path.basename(sourcePath)}${landscape ? ' (Landscape)' : ''}${noBreakH2 ? ' (No H2 break)' : ''}...`);

        try {
            const pdf = await mdToPdf({ path: sourcePath }, currentConfig);
            if (pdf) {
                fs.writeFileSync(destPath, pdf.content);
                console.log(`✓ Successfully saved to: ${destPath}`);
            }
        } catch (error) {
            console.error(`✗ Error generating ${fileArg}:`, error.message);
        }
    }
}

generate().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
