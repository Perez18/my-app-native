import React, { useState ,useEffect} from 'react'

const useRepositories = () => {
    const [repositories, setrepositories] = useState(null)

    const fetchRepositores = async () => {

        const response = await fetch('http://172.30.96.1:5000/api/repositories');
        const data = await response.json()
        setrepositories(data)
    }

    useEffect(() => {
        fetchRepositores()
    }, [])

    const repositoriesNodes = repositories
        ? repositories?.edges.map(edge => edge.node)
        : []


    return {
        repositories: repositoriesNodes
    }

}

export default useRepositories