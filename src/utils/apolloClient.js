import {ApolloClient, InMemoryCache} from '@apollo/client'

const createApolloCliente = () =>{
    return new ApolloClient({
        uri: 'http://132.1.50.43:4005/graphql',
        cache: new InMemoryCache()
    })
}

export default createApolloCliente