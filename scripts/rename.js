const fs = require('fs');
const path = require('path');

if(module.id === '.') {
	const srcPath = path.resolve(__dirname, '../index.js');
	const destPath = path.resolve(__dirname, '../index.new.js');
	let rs = fs.createReadStream(srcPath);
	let ws = fs.createWriteStream(destPath);
	let newName = process.argv[2];
	rs.on('data', (data) => {
		let re = /window\.customElements\.define\('(.*)', CustomComponent\);/;
		let output = data.toString().replace(re, `window.customElements.define('${newName}', CustomComponent);`);
		ws.write(output);
	});
	rs.on('close', () => {
	});
	rs.on('end', () => {
		ws.end();
		fs.rmSync(srcPath);
		fs.renameSync(destPath, srcPath);
		console.log(`Rename component to: ${newName}`);
	});
	rs.on('error', (err) => {
		console.log('Error::::', err);
	});
}
