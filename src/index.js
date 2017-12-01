import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './js/reducers';
import {Provider} from 'react-redux';
import App from "./js/components/App";
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const store = createStore(allReducers);

const client = new ApolloClient({
    link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cjamxmdwg0mhu0157td7ecrqh'}),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ApolloProvider>
    , document.getElementById('app'));
