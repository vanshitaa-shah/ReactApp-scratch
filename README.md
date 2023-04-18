# ReactApp-scratch

### Created dummy react app from scratch using webpack(bundler) and babel(transpiler).

### What is Webpack?
- webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser. The core function of webpack is that it takes a bunch of JavaScript files we write in our project and turns them into a single, minified file, so that it will be quick to serve.

### What is Babel?
- Babel is a JavaScript Transpiler​ mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

### Steps are as following:

- Initialize NPM project by running : This will create package.json file.

    ```bash
    npm init -y
    ```

- Install react and react-dom:

    ```bash
    npm install react react-dom
    ```

- Install following packages:

    ```bash
    npm install webpack webpack-dev-server webpack-cli
    ```

    This will install:

    - webpack module — which include all core webpack functionality.
    - webpack-dev-server — this development server automatically rerun webpack when our file is changed.
    - webpack-cli — enable running webpack from the command line.

- Configuring Babel, Install following packages :

    ```bash
    npm install  @babel/core @babel/preset-env @babel/preset-react babel-loader
    ```

    This will install:

    - @babel/core is the main dependency that includes babel transform script.
    - @babel/preset-env is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.
    - @babel/preset-react is used for transforming JSX and React class syntax into valid JavaScript code.
    - babel-loader is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.

- Create .babelrc file and include :

    ```bash
    {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    ```
- Create a webpack.config.js file and include :

    ```bash
    const HtmlWebpackPlugin = require("html-webpack-plugin");
    const path = require("path");

    module.exports = {
        entry: "./src/index.js",
        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
        ],
        resolve: {
            modules: [__dirname, "src", "node_modules"],
            extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    loader: require.resolve("babel-loader"),
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.png|svg|jpg|gif$/,
                    use: ["file-loader"],
                },
            ],
        },
        devServer: {
            port: 3000,
        },
        mode: 'development'
    };
    ```

    - loaders are included for CSS,js|jsx and images.

- Created folder structure like below :

        .
        ├── package.json
        ├── package-lock.json
        ├── public
        │   ├── img.png
        │   └── index.html
        ├── src
        │   ├── App.css
        │   ├── App.js
        │   └── index.js
        └── webpack.config.js

- Create start and build scripts:
     In package.json add following :

    ```bash
    "scripts": {
    "start": "webpack-dev-server --hot --open",
    "build": "webpack --config webpack.config.js --mode production"
    },
    ```

- Build the app:

    ```bash
        npm run build
    ```

    - It will create dist folder like below:

                ./dist
            ├── 5d2dc924dfd643401a10e785ced147cb.png
            ├── index.html
            ├── main.js
            └── main.js.LICENSE.txt

- Run the App:

    ```bash
        npm start
    ```

