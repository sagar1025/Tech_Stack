//when this reducer is first run, the state is undefined.
//the default value of the reducer cannot be undefined, so we are setting it to null in the
//argument state = null

export default (state = null, action) => {
  //everytime a button in the list is pressed, this reducer is called.

  //console.log(action);
  //return null;

  switch (action.type)
  {
      case 'select_library':
            return action.payload;
      default:
            //if an action that is not recognized is sent, then just return the state that was
            //returned last time
            return state;
  }

};
