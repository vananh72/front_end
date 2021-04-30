const getArrSeven = arr => {
    let count=0
    for(let i=1; i<=arr.length; i++){
        if(arr[i] == 7) count=1
    }
    if(count == 1) console.log ('Boom!')
    else {
        console.log('there is no 7 in the array')
    }
}