/**
 * @description A function that curries a function
 * @param {*} func Functions that need to be curried
 * @returns Return a curried function
 */
function currying(func) {
  function curryFn(...args) {
    if (args.length >= func.length) {
      // return func(...args)
      return func.apply(this, args);
    } else {
      return function (...newArgs) {
        // return curryFn(...args.concat(newArgs))
        return curryFn.apply(this, args.concat(newArgs));
      }
    }
  }
  return curryFn
}
