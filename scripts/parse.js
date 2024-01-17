import { TSConfckCache, parse } from 'tsconfck';

const cache = new TSConfckCache();
(async () => {
	console.log('1-start');
	console.log(await parse('src/routes/foo.ts', { cache, ignoreNodeModules: true }));
	console.log('1-end');
})();
(async () => {
	console.log('2-start');
	console.log(await parse('src/routes/bar.ts', { cache, ignoreNodeModules: true }));
	console.log('2-end');
})();
