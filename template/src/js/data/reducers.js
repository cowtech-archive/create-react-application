const initialState = {};

export function reducer(state, {type/*, payload*/}){
  let newState = state;

  if(typeof newState === 'undefined')
    newState = initialState;

  switch(type){

  }

  return newState;
}
