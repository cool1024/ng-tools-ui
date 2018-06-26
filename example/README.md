# Example

## Demo
[https://www/cool1024.com/ng](https://www/cool1024.com/ng)

## Build
`npm run build`<br>
`ng build --base-href /ng/ --deploy-url //www.cool1024.com/ng/ --prod`

## Module Analyse --has some error
`ng build --stats-json`

## Map Analyse
`ng build --prod --source-map`<br>
`ls dist/*.bundle.js`<br>
`node_modules/.bin/source-map-explorer dist/main.*.bundle.js`

## View Analyse
`npm run view`

## Run
```cmd
// default
npm run serve

// aot
ng serve --aot

// public
ng serve --aot --host 0.0.0.0
```

