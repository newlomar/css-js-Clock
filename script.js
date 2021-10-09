const getTime = () => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours() >= 10 ? currentDate.getHours() : '0' + String(currentDate.getHours())
  const currentMinutes = currentDate.getMinutes() >= 10 ? currentDate.getMinutes() : '0' + String(currentDate.getMinutes())
  const currentSeconds = currentDate.getSeconds() >= 10 ? currentDate.getSeconds() : '0' + String(currentDate.getSeconds())

  return { h: currentHour, m: currentMinutes, s: currentSeconds }

}

const displayCurrentTime = (element) => {
  
  const { h, m, s } = getTime();

  element.textContent = `${h}:${m}:${s}`
}

const updateClock = () => {

  const { h, m, s } = getTime();

  // + 90 no final é porque as barras começam em 9:45:45 (comente todo o script para visualizar)

  let hourStick = document.querySelector(".hour-hand")
  hourStick.style.transform = `rotate(${(Number(h) * 30) + (Number(m) / 2) + 90}deg)`

  let minutesStick = document.querySelector(".min-hand")
  minutesStick.style.transform = `rotate(${(Number(m) * 6) + (Number(s) / 10 ) + 90}deg)`
  

  let secondsStick = document.querySelector(".second-hand")
  secondsStick.style.backgroundColor = 'red'
  secondsStick.style.transform = `rotate(${(Number(s) * 6) + 90}deg)`

}

setInterval(() => {
  const h1 = document.querySelector("[data-js='h1'")
  displayCurrentTime(h1)
  updateClock()
}, 1000)

displayCurrentTime(h1)
updateClock()