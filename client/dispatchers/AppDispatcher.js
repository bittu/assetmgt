import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register(cb) {
	return flux.register(cb);
}

export function waitFor(ids) {
  return flux.waitFor(ids);
}

export function dispatch(type, action = {}) {
  if (!type) {
    throw new Error('You forgot to specify type.');
  }

  // In production, thanks to DefinePlugin in webpack.config.production.js,
  // this comparison will turn `false`, and UglifyJS will cut logging out
  // as part of dead code elimination.
  if (process.env.NODE_ENV !== 'production') {
    // Logging all actions is useful for figuring out mistakes in code.
    // All data that flows into our application comes in form of actions.
    // Actions are just plain JavaScript objects describing “what happened”.
    // Think of them as newspapers.
    if (action.error) {
      console.error('**', type, action);
    } else {
      console.log('**', type, action);
    }
  }

  flux.dispatch({ type, ...action });
}

export function dispatchAsync(promise, types, action = {}) {
  const { request, success, failure } = types;

  dispatch(request, action);
  //NB: unable to use Promise.catch() syntax here
  promise.then(
    //dispatches the action for the async-promise-resolved
    //with a hash of the async-promise params and the response body
    (body) => dispatch(success, { ...action, body }),
    (error) => dispatch(failure, { ...action, error })
  )
}
