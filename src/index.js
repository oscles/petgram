import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { client } from './ApolloConfig'
import { App } from './App'
import { Provider } from './Context'

ReactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
