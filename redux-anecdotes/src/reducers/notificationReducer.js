import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    createNotification: ((state, action) => action.payload),
    removeNotification: ((state, action) => null)
  }
  })

export const { createNotification, removeNotification } = notificationSlice.actions

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(createNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())
    },time)
  }
}

export default notificationSlice.reducer