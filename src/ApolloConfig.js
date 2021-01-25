import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgram-server-24iykciv5.now.sh/graphql',
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))

  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

export const client = new ApolloClient({
  link: from([authMiddleware, errorMiddleware, httpLink]),
  cache: new InMemoryCache(),
})
