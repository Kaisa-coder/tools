/**
 * @description A function that combines functions
 * @param  {...funcs} funcs A list of functions grouped together
 */
function composeFn(...funcs) {
  const length = funcs.length;

  for (let i = 0; i < length; i++) {

    if (typeof funcs[i] !== 'function') {
      throw new Error(`index position ${i} must be a function`);
    }
  }

  return function (...args) {
    // const result = funcs[0](...args);
    const result = funcs[0].apply(this, args);

    for (let i = 0; i < length; i++) {
      // result = funcs[i](result)
      result = funcs[i].apply(this, [result])

    }
    return result
  }
}


