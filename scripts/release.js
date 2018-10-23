
const { execSync } = require('child_process');

const bump = process.argv[2];

console.log('Releasing...');

console.log('Running bundle...');
execSync(`npm run bundle`, err => console.log(err));

console.log(`Bumping version by: ${bump}...`);
execSync(`cd dist; npm version ${bump}`, err => console.log(err));

console.log('Copying package.json...');
execSync(`cp package.json dist/package.json`, err => console.log(err));

console.log('Copying .npmignore...');
execSync(`cp .npmignore dist/.npmignore`, err => console.log(err));

console.log('Publishing to NPM...');
execSync(`cd dist; npm publish`, err => console.log(err));

console.log('Pushing to Git...');
execSync(`git push`, err => console.log(err));

console.log('Success!');
