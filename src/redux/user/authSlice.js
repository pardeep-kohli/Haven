// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  isLoggedIn: true,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
    updateUserImage: (state, action) => {
      // Update the profile image URL in the userData
      if (state.userData) {
        state.userData.image = action.payload;
      }
    },
  },
});

export const { loginSuccess, logout,updateUserImage  } = authSlice.actions;

// Async action to load userData from AsyncStorage
export const loadUserDataFromAsyncStorage = () => async (dispatch) => {
  try {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      dispatch(loginSuccess(parsedUserData));
    }
  } catch (error) {
    console.log("Error loading user data from AsyncStorage:", error);
  }
};

// Async action to store userData in AsyncStorage
export const storeUserDataInAsyncStorage = (userData) => async (dispatch) => {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(userData));
    dispatch(loginSuccess(userData));
  } catch (error) {
    console.log("Error storing user data in AsyncStorage:", error);
  }
};

export const clearUserDataFromAsyncStorage = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem("userData");
    dispatch(logout());
  } catch (error) {
    console.log("Error clearing user data from AsyncStorage:", error);
  }
};

export default authSlice.reducer;
