/**
 * @description A function that combines functions
 * @param  {...any} funcs A list of functions grouped together
 */
function composeFn(...funcs) {
  const length = funcs.length;

  for (let i = 0; i < length; i++) {

    if (typeof funcs[i] !== 'function') {
      throw new Error(`index position ${i} must be a function`);
    }
  }

  return function (...args) {
    const result = funcs[0](...args);
    for (let i = 0; i < length; i++) {
      result = funcs[i](result)
    }
    return result
  }
}


