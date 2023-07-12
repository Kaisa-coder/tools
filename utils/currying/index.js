/**
 * @description A function that curries a function
 * @param {*} func Functions that need to be curried
 * @returns Return a curried function
 */
function currying(func) {
  function curryFn(...args) {
    if (args.length >= func.length) {
      return func(...args)
    } else {
      return function (...newArgs) {
        return curryFn(...args.concat(newArgs))
      }
    }
  }
  return curryFn
}
