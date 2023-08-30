import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'


const initialState = {
    loading: false,
    users: [],
    error: ''
}
// generates pending, fullfiled and rejected
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios 
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data)
})

const userslice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.loading = []
            state.loading = action.error.message
        })
    }
})

export default userslice.reducer
