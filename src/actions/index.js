export  const selectUser = (user) =>{
    console.log("youClicked Barikalaaa", user.first);
    return {
        type:"USER_SELECTED",
        payload : user
    }
};