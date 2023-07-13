/**
 * @description 寄生式实现继承的函数
 * @param {*} Subtype 子类
 * @param {*} Suptype 父类
 */
function inherit(Subtype, Suptype) {
  // Subtype.prototype = Object.create(Suptype.prototype)
  Subtype.prototype = createObject(Suptype.prototype)
  Object.defineProperty(Subtype.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Subtype
  })
}

/**
 * @description 创建新的函数
 * @param {*} o 对象
 * @returns 新的构造函数
 */
function createObject(o) {
  function F() { }
  F.prototype = o
  return new F()
}