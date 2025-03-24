function setIntervalPolyfill(callback,delay,...args){
  let intervalId = {active : true};
  
  function repeat(){
    if(!intervalId.active)return;
    callback(...args);
    intervalId.timeoutId = setTimeout(repeat,delay);
  }

  intervalId.timeoutId = setTimeout(repeat,delay);
  return intervalId;
}

function clearIntervalPollyfill(intervalId){
  if(intervalId && intervalId.timeoutId){
    intervalId.active = false;
    clearTimeout(intervalId.timeoutId)
  }
}

console.log("start");

const intervalId = setIntervalPolyfill(() => {
  console.log("executing")
},1000)

setTimeout(() => {
  console.log("clearing interval");
  clearIntervalPollyfill(intervalId);
},5000)
