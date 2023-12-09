import axios from "axios"

const client = axios.create({
    baseURL: 'https://stranger-things-api.fly.dev/',
    timeout: 5000
})

const getCharacter = async ({ name = '' }) => {
    const uri = encodeURI(`api/v1/characters/?name=${name}`)
    return await client.get(uri)
}

export { getCharacter }