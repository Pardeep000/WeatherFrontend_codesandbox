import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//
let apiUrl = "https://lblq5t.sse.codesandbox.io";
// First, create the thunk
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userObj, thunkAPI) => {
    console.log("userObj from registerUser", userObj);
    //
    const obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(userObj)
    };
    //
    let endpoint = "/newuser";
    //
    let data = await fetch(apiUrl + endpoint, obj);
    let data2 = await data.json();
    console.log("api-response from thunk", data2);
    //
    return data2;
  }
);

const initialState = {
  //signupUser
  dataArray: [],
  signupmsg: "",
  signuperror: null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSmsg: (state) => {
      state.signupmsg = "";
      console.log("Signup_msg has been cleared");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.dataArray = state.dataArray.concat(action.payload);

      if (Object.keys(action.payload)[0] === "error") {
        console.log("error exists...");
        state.signupmsg = action.payload.error[0].msg;
      } else if (Object.keys(action.payload)[0] === "msg") {
        state.signupmsg = action.payload.msg;
      }
      //end of builder
    });
    builder.addCase(registerUser.pending, (state, action) => {});
    builder.addCase(registerUser.rejected, (state, action) => {
      console.log("error payload", action.payload);
      state.signuperror = action.payload;
    });
  }
});

export const { clearSmsg, clearLmsg } = usersSlice.actions;
export default usersSlice.reducer;
