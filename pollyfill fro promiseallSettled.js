function promisesAllSettled(promises){
  return new Promise((resolve,reject) => {
    let results = new Array(promises.length);
    let completed = 0;

    if(promises.length === 0){
      resolve([]);
    }

    promises.forEach((promise,index) => {
      Promise.resolve(promise())
        .then(res => results[index] = res)
        .catch(error => results[index] = error)
        .finally(() => {
          completed++;
          if(completed === promises.length){
            resolve(results);
          }
        })
    })
  })
}

function task(val,delay){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("executed..." + val)
      if(delay === 2000)reject("rejected" + val);
      else resolve(val);
    },delay)
  })
}

const arr = [() => task("A",1000), () => task("B",2000), () => task("C",3000), () => task("D",4000)]
console.log(promisesAllSettled(arr).then(res => console.log(res)));
