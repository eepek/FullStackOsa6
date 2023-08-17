import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (entry) => {
  const response = await axios.post(baseUrl, entry)
  return response.data
}

const upVote = async (entry) => {
  const response = await axios.put(`${baseUrl}/${entry.id}`, entry)
  return response.data
}

export default { getAll, create, upVote }