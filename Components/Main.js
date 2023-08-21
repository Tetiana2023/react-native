import React, { useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import {authStateChangeUser } from '../redux1/auth/authOperations';

import {useSelector, useDispatch} from "react-redux";

export const Main = () => {
  const {stateChange} = useSelector((state)=> state.auth);
  const dispatch= useDispatch();


  useEffect(() => {
    dispatch(authStateChangeUser())
  }, []);
  const routing = useRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
