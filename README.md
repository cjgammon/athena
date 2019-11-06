# athena
Presentation Framework, for making slideshows with HTML.
<br/>

## usage
______
 
Simply include `athena.js` and then call:
```
Athena.generate();
```
<br/>

## configuration
______
 
Certain configuration variables can be changed by passing a configuration object to `generate()`.
```
let config = {
    slideSelector: '.slide',
    stepSelector: '.step',
    stepListItems: true
};
Athena.generate(config);
```