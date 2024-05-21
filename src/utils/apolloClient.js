import {ApolloClient, InMemoryCache} from '@apollo/client'

const createApolloCliente = () =>{
    return new ApolloClient({
        uri: 'http://192.168.52.104:4005/graphql',
        cache: new InMemoryCache()
    })
}

export default createApolloCliente