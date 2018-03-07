// 执行一个 function

class RunFunc {
  constructor(func, context=null) {
    this.func = func
    this.context = context
  }

  call(context, ...args) {
    if (isFunc(this.func)) {
      this.func.call(context, ...args)  
    } else {
      setTimeout(() => {
        this._elseCall()  
      }, 0)
    }
    return this
  }

  apply(context, ...args) {
    if (isFunc(this.func)) {
      this.func.apply(context, [...args])  
    } else {
      setTimeout(() => {
        this._elseCall()
      }, 0)
    }
    return this
  }

  else(defaultFunc) {
    this.defaultFunc = defaultFunc
    return this
  }

  _elseCall() {
    if (isFunc(this.defaultFunc)) {
      this.defaultFunc.call(this.context)
    } else {
      throw new Error('arguments is not a function')
    }
  }
}

export function isFunc(func) {
  return Object.prototype.toString.call(func) === '[object Function]' && typeof(func) === 'function'         
}

export function funcIf(func, context) {
  return new RunFunc(func, context)   
}