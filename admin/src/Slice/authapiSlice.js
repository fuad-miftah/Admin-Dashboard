// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { routedb } from "../Constants";
// import axiosInstance from "../utils/axiosInstance";

// const USERS_URL = `${routedb}/auth`;

// // Define an initial state for the user slice
// const initialState = {
//     user: null,
//     status: "idle",
//     error: null,
// };

// // Create an async thunk for user login
// export const loginAsync = createAsyncThunk("user/login", async (userData) => {
//     try {
//         const response = await axiosInstance.post(`${USERS_URL}/login`, userData);
//         const { access_token } = response.data.data;
//         document.cookie = `access_token=${access_token}; path=/`;
//         return response.data.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// });

// // Create an async thunk for user logout
// export const logoutAsync = createAsyncThunk("user/logout", async () => {
//     try {
//         await axiosInstance.post(`${USERS_URL}/logout`);
//     } catch (error) {
//         throw error.response.data;
//     }
// });

// // Create a user slice
// const userSlice = createSlice({
//     name: "authapi",
//     initialState,
//     reducers: {
//         // Add any synchronous actions you need here
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginAsync.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(loginAsync.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.user = action.payload;
//                 state.error = null;
//             })
//             .addCase(loginAsync.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message;
//             })
//             .addCase(logoutAsync.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(logoutAsync.fulfilled, (state) => {
//                 state.status = "succeeded";
//                 state.user = null;
//                 state.error = null;
//             })
//             .addCase(logoutAsync.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message;
//             });
//     },
// });

// export default userSlice.reducer;
