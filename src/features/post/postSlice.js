import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Predictable",
      content:
        "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
    },
    {
      id: 2,
      title: "Centralized",
      content:
        "Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.",
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectPost = (state) => state.post.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
