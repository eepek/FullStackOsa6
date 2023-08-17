import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createEntry = async (event) => {
    event.preventDefault()
    const entry = event.target.anecdoteInput.value
    event.target.anecdoteInput.value = ''
    dispatch(createAnecdote(entry))
    dispatch(setNotification(`you created a new anecdote '${entry}'`, 5000))
  }


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createEntry}>
        <div><input name='anecdoteInput'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm