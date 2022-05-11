window.onload = () => {
	keyboardCommands()
	initSpoiler()
	randomNames()
}

const keyboardCommands = () => {
	// Next/Prev page
	var prevPage, nextPage = null
	nextPage = document.getElementById("next-command-link").href
	prevPage = window.location.href
	prevPage = prevPage.split('/')
	if(prevPage[prevPage.length - 1] == 1) {
		prevPage = null
	} else {
		prevPage[prevPage.length - 1] = Number(prevPage[prevPage.length - 1]) - 1
		prevPage = prevPage.join('/')
	}
	  
	document.addEventListener('keydown', async (e) => {

		switch (e.key) {
			case "ArrowRight":
				nextPage ? window.location.href = nextPage : null
				break
				
			case "ArrowLeft":
				prevPage ? window.location.href = prevPage : null
				break
				
			case " ":
			case "Spacebar":
				const spoilers = document.getElementsByClassName('spoiler')
				for (let spoiler of spoilers) {
					spoiler.querySelector('input').click()
				}
				break
				
			default:
				break
		}
	})
}

const initSpoiler = () => {
	const spoilers = document.getElementsByClassName('spoiler')
	for (let spoiler of spoilers) {
		const input = spoiler.querySelector('input')
		input.addEventListener("click", (e) => {
			const element = e.currentTarget
			element.parentNode.parentNode.classList.toggle("closed")
			element.parentNode.parentNode.classList.toggle("open")
			if(element.value == element.getAttribute("data-close")) {
				element.value = element.getAttribute("data-open")
			} else if(element.value == element.getAttribute("data-open")) {
				element.value = element.getAttribute("data-close")
			}
		})
	}
}

const randomNames = () => {
	const intervalTime = 40
	const elements = document.getElementsByClassName("glitch")
  const chars = "QWERTYUIOPASDFGHJKLZXCVBNM"
	var string = ''
	for (let element of elements) {
		setInterval(() => {
			string = ''
			for (let i = 0; i < 6; i++) {
				string += chars.charAt(Math.floor(Math.random() * chars.length))
			}
			element.innerHTML = string
		}, intervalTime)
	}
}