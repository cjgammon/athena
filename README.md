# Athena
Presentation Framework, for making slideshows with HTML.
<br/>

## Usage
 
Simply include `athena.js` and then call:
```
Athena.generate();
```
<br/>

## Configuration
 
Certain configuration variables can be changed by passing a configuration object to `generate()`.
```
let config = {
    slideSelector: '.slide',
    stepSelector: '.step',
    stepListItems: true
};
Athena.generate(config);
```

## Building

Install node_modules
```
npm i
```

Build Production
```
npm run build
```

Build Dev
```
npm run dev
```