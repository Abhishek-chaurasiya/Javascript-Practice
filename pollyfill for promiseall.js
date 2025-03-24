function myPromiseAll(promises){
  return new Promise((resolve,reject) => {
    let results = [];
    let completed = 0;
    if(!promises.length){
      resolve([]);
    }

    promises.forEach((promise,index) => {
       Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if(completed === promises.length){
            resolve(results);
          }
        })
        .catch(error => {
           reject(error);
        })
    })
    
  })
}
module.exports = myPromiseAll;
