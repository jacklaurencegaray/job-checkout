
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'proptypes'
import { withRouter } from 'react-router-dom'

@inject('store') @observer
class AdminAuthGuard extends Component {

    static propTypes = {
        store: PropTypes.any,
        children: PropTypes.node
    }

    componentDidMount() {
        if(this.props.store.AccountStore.username !== 'admin')
            this.props.history.push('/login')
    }

    render() {
        return this.props.children
    }
}

export default withRouter(AdminAuthGuard)
