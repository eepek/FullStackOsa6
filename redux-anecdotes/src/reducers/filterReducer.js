import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    createFilter: ((state, action) => action.payload)
    //   console.log(JSON.parse(JSON.stringify(state)))
    //   console.log(JSON.parse(JSON.stringify(action)))
    //   (state) => action.payload
    //   console.log(JSON.parse(JSON.stringify(state)))
    // }
  }
})

export const { createFilter } = filterSlice.actions
export default filterSlice.reducer

// export const createFilter = (entry) => {
//   return {
//     type: 'ADD FILTER',
//     payload: entry
//   }
// }

// const reducer = (state = '', action) => {
//   // console.log('filter state atm: ', state)
//   switch(action.type) {
//     case 'ADD FILTER':
//       return action.payload
//   default:
//     return state
//   }
// }

// export default reducer