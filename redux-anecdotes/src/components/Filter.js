import { useDispatch } from "react-redux"
import { createFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    const filterEntry = event.target.value
    dispatch(createFilter(filterEntry))
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter