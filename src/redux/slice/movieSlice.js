import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=308c11e272169fe6433efff7b9f31752"
  );
  return response.json();
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    });
  },
});

export default movieSlice.reducer;
