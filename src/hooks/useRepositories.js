import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {

    const { data = [], loading, error, refetch } = useQuery(GET_REPOSITORIES);

    if(loading) return 'return'
    const { repositories = null } = data

    // console.log(repositories);
    const repositoriesNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : []

    return {
        loading,
        error,
        repositories: repositoriesNodes,
        refetch
    }

}

export default useRepositories