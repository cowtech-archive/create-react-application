const initialState = {};

export function reducer(state, {type/* , payload*/}){ // eslint-disable-line func-style
  let newState = state;

  if(typeof newState === 'undefined')
    newState = initialState;

  switch(type){
    default:
      break;
  }

  return newState;
}
