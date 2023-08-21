import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReducer";

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });

      const { uid, displayName } = await auth.currentUser;

      const userUpdateProfile = {
        userId: uid,
        nickName: displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    } catch (error) {
      console.log("error.message", error.message);
    }
  };
export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
     
    } catch (error) {
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await signOut(auth);
  dispatch(authSingOut())
};

export const authStateChangeUser = () => async (dispatch, getState) => {
    await onAuthStateChanged((user)=>setUser(user));
    if(user){
      const userUpdateProfile = {
        userId: user.uid,
        nickName: user.displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile))
      dispatch(authSlice.actions.authStateChange({stateChange:true}))
    }
};
