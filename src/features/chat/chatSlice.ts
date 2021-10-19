import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { RootState } from "../../app/store";

export interface User {
    client: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
    name: string;
}

const initialState: User = {
    client: undefined,
    name: ''
}

export const connectAsync = createAsyncThunk('chat/connect', async () => {
    let client = await io('localhost:8080')
    return client;
});

export const ChatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
    }, extraReducers: (builder) => {
        builder.addCase(connectAsync.fulfilled, (state, action) => {
            console.log(action);
        })
    }
})

export const { setName } = ChatSlice.actions;

export const chatSlice = (state: RootState) => state;

export default ChatSlice.reducer;
