import { useSelector } from "react-redux"


const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const notification = useSelector(state => state.notification)
  console.log(notification)

  if (notification) {
  return (
    <div style={style}>
      {notification}
    </div>
  )
  } else {
    return null
  }
}

export default Notification