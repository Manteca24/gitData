import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null, 
  status: 'idle', 
  error: null, 
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    fetchUserPending: (state) => {
      state.status = 'loading';
      state.user = null;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    },
    fetchUserError: (state, action) => {
      state.status = 'failed';
      state.user = null;
      state.error = action.payload;
    },
  },
});


export const fetchGitHubUser = (username) => async (dispatch) => {
    dispatch(fetchUserPending());
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Error al buscar el usuario: ${response.status}`);
      }
      const data = await response.json();
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserError(error.message));
    }
  };


export const { fetchUserPending, fetchUserSuccess, fetchUserError } = githubSlice.actions;
export default githubSlice.reducer;