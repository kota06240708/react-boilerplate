import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import '@babel/polyfill';
import '../styles/_base.sass';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./component/App', () => {
        render(App);
    });
}
