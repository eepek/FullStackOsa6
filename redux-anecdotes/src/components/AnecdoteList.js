import { useDispatch, useSelector } from "react-redux"
import { initalizeAnecdotes, voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { useEffect } from "react"

const AnecdoteList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initalizeAnecdotes())
  },[dispatch])



  //6.5 sortataan haettu state votejen mukaan
  const { anecdotes, filtering } = useSelector(state => state)
  // console.log(filtering)
  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filtering))
  filteredAnecdotes.sort((a,b) => { return b.votes - a.votes})


  const vote = (anecdote) => {

    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`you upvoted '${anecdote.content}'`, 5000))
  }

  return (
    <div>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList