function myCoolFunction(callback) {
  console.log('calling the function')

  if (typeof callback === 'function') {
    return callback()
  } else {
    return `The callback wasn't a function, it was ${typeof callback}`
  }
}

const getNumber5 = () => {
  return 5
}

console.log(myCoolFunction(getNumber5()))

function addEventListener(eventType, callback) {
  const event = {
    pageY: 100,
    pageX: 200,
  }

  if (eventType === 'mousemove') {
    callback(event)
  }
}

addEventListener('mousemove', (event) => {
  braedon.pageX
})
