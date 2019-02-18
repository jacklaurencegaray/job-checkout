import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes'
import RootStore from './stores/RootStore'
import { Provider } from 'mobx-react'

ReactDOM.render(
    <Provider store={RootStore}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
