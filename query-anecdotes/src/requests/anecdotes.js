import axios from "axios"

const baseURL = 'http://localhost:3001/anecdotes'

export const getAll = () => axios.get(baseURL).then(response => response.data)

export const addAnecdote = (entry) => axios.post(baseURL, entry).then(response => response.data)

export const voteAnecdote = (entry) => axios.put(`${baseURL}/${entry.id}`, entry).then(response => response.data)