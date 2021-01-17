//  check token and load user
export const loadUser = () => (dispatch, getState ) => {
    // user Loading
    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatchEvent({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}


// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


// setup config/headers
export const tokenConfig = getState => {
    //  Get token from localStorage 
   const token = getState().auth.token;

    // Header 
   const config = {
       headers: {
           "Content-Type" : "application/json"
       }
   }

    // if token , add to header
   if(token){
       config.headers['x-auth-token'] = token;
   }


   return config;
}