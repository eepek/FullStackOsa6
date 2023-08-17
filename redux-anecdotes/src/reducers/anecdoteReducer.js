import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // upVote(state, action) {
    //   return state.map(anecdote =>  anecdote.id !== action.payload.id ? anecdote : action.payload )
    // },
    setAnecdotes: ((state, action) => action.payload),
    appendAnecdote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { upVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initalizeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = entry => {
  return async dispatch => {
    const serverResponse = await anecdoteService.create(asObject(entry))
    dispatch(appendAnecdote(serverResponse))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    // const upVotedOne = {
    //   content: anecdote.content,
    //   id: anecdote.id,
    //   votes: anecdote.votes + 1
    // }
    await anecdoteService.upVote({ ...anecdote,votes: anecdote.votes+1 })
    dispatch(initalizeAnecdotes())
  }
}

export default anecdoteSlice.reducer
