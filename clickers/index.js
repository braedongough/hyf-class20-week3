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
