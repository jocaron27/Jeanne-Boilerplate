"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBrowserHistory_1 = require("history/createBrowserHistory");
const createMemoryHistory_1 = require("history/createMemoryHistory");
const history = process.env.NODE_ENV === 'test' ? createMemoryHistory_1.default() : createBrowserHistory_1.default();
exports.default = history;
//# sourceMappingURL=history.js.map