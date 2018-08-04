"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const react_router_dom_1 = require("react-router-dom");
const history_1 = require("./history");
const components_1 = require("./components");
const store_1 = require("./store");
/**
 * COMPONENT
 */
class Routes extends react_1.Component {
    componentDidMount() {
        this.props.loadInitialData();
    }
    render() {
        const { isLoggedIn } = this.props;
        return (React.createElement(react_router_1.Router, { history: history_1.default },
            React.createElement(components_1.Main, null,
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/login", component: components_1.Login }),
                    React.createElement(react_router_dom_1.Route, { path: "/signup", component: components_1.Signup }),
                    isLoggedIn &&
                        React.createElement(react_router_dom_1.Switch, null,
                            React.createElement(react_router_dom_1.Route, { path: "/home", component: components_1.Home })),
                    React.createElement(react_router_dom_1.Route, { component: components_1.Login })))));
    }
}
const mapState = (state) => {
    return {
        isLoggedIn: !!state.user.id
    };
};
const mapDispatch = (dispatch) => {
    return {
        loadInitialData() {
            dispatch(store_1.me());
        }
    };
};
exports.default = react_redux_1.connect(mapState, mapDispatch)(Routes);
//# sourceMappingURL=routes.js.map