# MyARC CSS/JS Workflow
Static Files for MyARC Update

This repository uses [https://npmjs.org/package/node-sass](node-sass), providing a CSS precomiler to better modularity.  Similarly, javascript is precomiled using [https://babeljs.io/](babel) to provide support for ES6 syntax and for its use of `import` for javascript modularity.

## Install
Clone the git repository and make sure to install the mode modules:

```shell  
git clone https://github.com/AirlinesReportingCorporation/myarc_static.git

cd minified-scripts

npm install
```

##Usage
To compile use:

```shell
npm start
```

This command runs `concurrently \"node-sass src/css/main.scss -wo dest/css/style.css --output-style compressed\"  \"babel src/js/main.js --watch --out-file dest/js/main.js \"` and provides watchers for the `src/css/main.scss` and `src/js/main.js` files.  All depedencies should be imported into those two files.

### Folder Structure
```
myarc_static/
|
|-- src/
|   |-- css / 
|       |-- style.css
|   		|-- partials / 
|       		|-- _base.scss
|       		|-- _colors.scss
|       		|-- _fonts.scss
|   |-- js / 
|       |-- main.js
|   		|-- partials / 
|       		|-- _TC-common.scss
|
|-- dest/
|   |-- css / 
|       |-- style.css
|   |-- js / 
|       |-- main.js
|
|-- webpack.config.js
|
|-- package.json

```