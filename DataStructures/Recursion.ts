let position = 0

function log(message: string, branch: boolean) {
  const color = branch ? '#aa0000' : '#0000aa'
  const branchName = branch ? 'right' : 'left'
  console.log(`%c ${branchName}: ${message}`, `color: ${color}`)
}

function fibonnaci(n: number, branch: boolean, previous: number): number {
  log('branch: ' + branch + ' previous: ' + previous + ' current n: ', branch)
  if (n === 0) {
    position++
    return 0
  }
  if (n === 1) {
    position++
    return 1
  }
  return fibonnaci(n - 1, false, n) + fibonnaci(n - 2, true, n)
}

const theNumber = 5

console.log(fibonnaci(theNumber, false, theNumber))
console.log('position')
console.log(position)
