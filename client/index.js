"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.scss");
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const routes_1 = require("./routes");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(routes_1.default, null)), document.getElementById('app'));
//# sourceMappingURL=index.js.map