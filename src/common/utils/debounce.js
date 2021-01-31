//防抖懂函数，请求太频繁降低服务器的压力
export function debounce(func,delay){
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
