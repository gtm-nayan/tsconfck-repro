import { TSConfckCache, parse } from 'tsconfck';

const cache = new TSConfckCache();

// reading the value immediately after one resolves gives inconsistent results
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


// after waiting for both to resolve gives consistent results
// const [foo, bar] = await Promise.all([
//     parse('src/routes/foo.ts', { cache, ignoreNodeModules: true }),
//     parse('src/routes/bar.ts', { cache, ignoreNodeModules: true })
// ]);
// console.log(foo.tsconfig, bar.tsconfig);