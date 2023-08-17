import { createContext, useContext, useReducer } from "react"

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "NOTIFY":
      return action.payload
    case "CLEAR":
      return null
    default:
      return state
  }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
  return useContext(NotificationContext)[0]
}

export const useNotificationDispatch = () => {
  //En ole varma onko tämä järkevin tapa tehdä tämä, mutta ainakin tätä kautta timeouttia ei tarvitse määritellä joka komponentissa erikseen
  const dispatch = useContext(NotificationContext)[1]
  setTimeout( () => {
    dispatch({type: 'CLEAR'})
  },5000)
  return dispatch
}


export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, null)

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]} >
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext