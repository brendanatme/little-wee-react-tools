
const { execSync } = require('child_process');

const bump = process.argv[2];

console.log('Releasing...');

console.log('Running bundle...');
execSync(`npm run bundle`, err => console.log(err));

console.log(`Bumping version by: ${bump}...`);
execSync(`npm version ${bump}`, err => console.log(err));

console.log('Publishing to NPM...');
execSync(`npm publish`, err => console.log(err));

console.log('Success!');
