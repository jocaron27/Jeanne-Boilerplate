import React, {Component} from 'react'
import { Dispatch } from 'redux';
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, Home } from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {

  props: RoutesProps;

  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {
              isLoggedIn &&
                <Switch>
                  <Route path="/home" component={Home} />
                </Switch>
            }
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

type State = {
  user: User;
}

type User = {
  id: string;
}

type RoutesProps = RoutesState & RoutesDispatch;

type RoutesState = {
  isLoggedIn: boolean;
}

type RoutesDispatch = {
  loadInitialData: () => void;
}

const mapState = (state: State): RoutesState => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch: Dispatch<() => any>): RoutesDispatch => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes);
