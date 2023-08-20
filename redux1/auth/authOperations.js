import db from '../../firebase/config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // updateProfile,
    // onAuthStateChanged,
    // signOut,
 } from "firebase/auth";
import {auth} from '../../firebase/config';


export const authSignUpUser = ({ email, password})=> async (dispatch, getState)=>  {
try{
 await createUserWithEmailAndPassword(auth, email, password) 
// const user = await db.auth().createUserWithEmailAndPassword(email, password) 
}catch (error){
    console.log('error.message', error.message)
}

};
export const authSignInUser = ()=> async (dispatch, getState)=>  {
    try{
        await signInWithEmailAndPassword(auth, email, password) 
       // const user = await db.auth().createUserWithEmailAndPassword(email, password) 
       }catch (error){
           console.log('error.message', error.message)
       }
       
};

export const authSignOutUser = ()=> async (dispatch, getState)=>  {};
