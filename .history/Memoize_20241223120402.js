

const memoize=(fn)=>{
    const cache = {}
    //check the cahce object 
    return function(...args){
        //if the args passed exist in the cache
        if(cache[args]){
            return cache[args]
        }

        const result = fn(...args)
        cache[args] = result;
        return result
    }
}

const slowFnc = num => {
    for(let i = 0; i < 0; i++){
        if(i === num){
            return i;
        }
    }
}

const fasterFnc = memoize(slowFnc)

console.time();
console.log(slowFnc(2000000000))
console.timeEnd()

// console.time();
// console.log(slowFnc(2000000000))
// console.timeEnd()



// console.time();
// console.log(slowFnc(2000000000))
// console.timeEnd()
