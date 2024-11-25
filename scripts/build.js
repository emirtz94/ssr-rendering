const { exec } = require('child_process');
const fse = require('fs-extra');

exec('npm run cleanup', () => {
    copyAssets();
    compile();
});

const copyAssets = () => {
    fse.ensureDirSync('./build/public');
    fse.copySync('./src/public', './build/public');

    fse.ensureDirSync('./build/views');
    fse.copySync('./src/views', './build/views');
}

const compile = () => {
    const command = 'npx tsc';

    exec(command, (error, _stdout, stderr) => {
        if(error) {
            console.log(`error: ${error.message}`);
            return;
        } 

        if(stderr) {
            console.log(`stderr: ${stderr}`);
        }

        console.log('Typescript sources compiled')
    })
}