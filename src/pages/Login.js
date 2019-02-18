
import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import AuthLayout from '../layout/AuthLayout'
import LoginCard from '../components/LoginCard'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

@inject('store') @observer
class Login extends Component {

    static propTypes = {
        store: PropTypes.any
    }

    constructor() {
        super()
        this.state = { error: null }
    }

    onFieldsChange = e => {
        this.props.store.AccountStore.setUsername(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault()
        if(this.props.store.AccountStore.username.toLowerCase() === 'admin')
            this.props.history.push('/admin')
        if(this.props.store.AccountStore.login())
            this.props.history.push('/')
        else
            this.setState({ error: 'Username is invalid. Must be one-word with only numbers with/and/or letters.' })
    }

    render() { 
        if(this.props.store.AccountStore.isLoggedIn)
            return <Redirect to='/' />
        else
            return (<AuthLayout>
                <LoginCard>
                    <h1>Login</h1>
                    <p>{ this.state.error || '' }</p>
                    <LoginForm 
                        buttonAction='Login' 
                        handleSubmit={this.onSubmit}
                        onFieldsChange={this.onFieldsChange} />
                </LoginCard>
            </AuthLayout>)
    }

}

export default withRouter(Login)
