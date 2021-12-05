const btnOne = document.getElementById('btn-one')
const btnTwo = document.getElementById('btn-two')
const btnThree = document.getElementById('btn-three')

let count = 0

const increaseCount = () => {
  console.log(count++)
}

btnOne.addEventListener('click', increaseCount)
btnTwo.addEventListener('click', increaseCount)

const logAfter3 = () => {
  console.log('after 3 seconds')
}

btnThree.addEventListener('click', () => {
  setTimeout(logAfter3, 3000)
})

const onDOMLoad = () => {
  console.log('DOM fully loaded and parsed')
}

document.body.addEventListener('DOMContentLoaded', onDOMLoad)

const allXCoords = []
const allYCoords = []

const collectMostCoordinate = (event) => {
  const xCoords = event.pageX
  const yCoords = event.pageY

  allXCoords.push(xCoords)
  allYCoords.push(yCoords)
}

document.addEventListener('mousemove', collectMostCoordinate)

setTimeout(() => {
  document.removeEventListener('mousemove', collectMostCoordinate)

  // Calculate our average
  const sumOfXCoords = allXCoords.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  }, 0)

  const sumOfYCoords = allYCoords.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  }, 0)

  const averageX = sumOfXCoords / allXCoords.length
  const averageY = sumOfYCoords / allYCoords.length

  console.log(averageX, averageY)
}, 3000)
