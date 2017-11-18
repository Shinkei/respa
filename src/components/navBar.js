import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from './../store';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            user: '',
            is_user_set: false
        };

        store.subscribe(() => {
            this.setState({
                user: store.getState().user,
                is_user_set: store.getState().is_user_set
            });
        });

        this.insertUser = this.insertUser.bind(this);
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <Link className="navbar-brand" to="/">ReSPAdo</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li>
                                <Link to="about">About</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {this.state.is_user_set ?
                                <li><a>{this.state.user}</a></li>
                                :
                                <div><li><input type="text" onChange={this.insertUser}></input></li><li><a onClick={() => this.setUser()}>Set User</a></li></div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    setUser() {
        store.dispatch({
            type: 'SET_USER',
            user: this.state.user,
            is_user_set: true
        });
    }

    insertUser(event) {
        this.setState({ user: event.target.value });
    }
}

export default NavBar;