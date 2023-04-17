import React, {useReducer} from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import firebase from './index';

const FirebaseState = ({children}) => {
  const initialState = {
    menu: [],
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  return (
    <FirebaseContext.Provider value={{menu: state.menu, firebase}}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
