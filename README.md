# My ARC CSS/JS Workflow

This repository uses [https://npmjs.org/package/node-sass](node-sass), providing a CSS precomiler to provide better modularity and flexibility.  Similarly, javascript is precomiled using [https://babeljs.io/](babel) to provide support for ES6 syntax and for its use of `import` for javascript modularity.

## Install
Clone the git repository and make sure to install the mode modules:

```shell  
git clone https://github.com/AirlinesReportingCorporation/myarc_static.git

cd myarc-static

npm install
```

## Usage
To compile use:

```shell
npm start
```

This command runs `concurrently \"node-sass src/css/main.scss -wo dest/css/style.css --output-style compressed\"  \"babel src/js/main.js --watch --out-file dest/js/main.js \"` and provides watchers for the `src/css/main.scss` and `src/js/main.js` files.  All depedencies should be imported into those two files.

## Folder Structure
```
myarc_static/
|-- login.html
|-- dashboard.html
|-- account_edit.html
|-- data.json
|
|-- src/
|   |-- css / 
|       |-- style.css
|       |-- partials / 
|           |-- _base.scss
|              |-- _base.scss
|              |-- _colors.scss
|              |-- _fonts.scss
|              |-- _headerfooter.scss
|              |-- _login.scss
|   |-- js / 
|       |-- main.js
|       |-- partials / 
|           |-- _TC-common.scss
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
|-- README.md
|-- .gitignore

```