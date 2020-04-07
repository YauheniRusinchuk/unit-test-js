class Ajax {
  static echo(data) {
    return new Promise((res, rej) => {
      setTimeout(()=>{
        if(data) {
          res(data)
        }else {
          rej(new Error("Error"))
        }
      }, 150)
    })
  }
}


module.exports = Ajax;