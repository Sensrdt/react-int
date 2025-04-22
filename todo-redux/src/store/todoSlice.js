import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return await res.json()
})

const initialState = {
    items: []
}
const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodos: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload
            }
            state.items = [newTodo, ...state.items]
        },
        removeTodo: (state, action) => {
            console.log(state, action)
            const remainingValue = state.items.filter(v => v.id != action.payload)
            state.items = remainingValue;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            console.log(action.payload)
        state.items = action.payload;
        });
    },
})

export const {addTodos, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;