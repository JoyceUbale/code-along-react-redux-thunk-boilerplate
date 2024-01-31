// here users is the success data from API and error is the failed API request data.
export const fetchUserData = (users) => ({type:"FETCH_DATA",payload:users});
export const showError = (error) => ({type:"ERROR",payload:error});