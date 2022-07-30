const profileCard = document.querySelector('.profile') // main card with displayed profile
const taskCards = document.querySelectorAll('.data-container') // an element of cards with work and time information (animated)
const dailyBtn = document.querySelector('#daily_btn') // daily button
const weeklyBtn = document.querySelector('#weekly_btn') // weekly button
const monthlyBtn = document.querySelector('#monthly_btn') // monthly button
const currentTasks = document.querySelectorAll('.data-container__bottom-area--current') // current time spend with appropriate selected task
const lastTasks = document.querySelectorAll('.data-container__bottom-area--last') // last time spend with appropriate selected task

async function worktimeData() {
	// async function fetching my json file
	const response = await fetch('./data.json')
	const data = await response.json()

	function selectBtn(btn) {
		// function selecting all my time buttons and toggle active class (white color on click)
		document.querySelectorAll('.timeframe__btn').forEach(button => {
			button.classList.remove('active')
		})
		btn.classList.add('active')
	}

	function displayDaily() {
		// daily display task, displayed as a first view
		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.daily.current + 'hrs'

			lastTasks[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs'
		}
		dailyBtn.classList.add('active')
	}
	displayDaily()

	dailyBtn.addEventListener('click', e => {
		taskCards.forEach(card => {
			// inline adding my animation to my task cards on button click, then remove that style
			card.style.animation = '1s forwards ease-in cardsMove'

			setTimeout(function () {
				card.style.removeProperty('animation')
				card.style.bottom = '0'
			}, 1000)
		})

		for (let i = 0; i < data.length; i++) {
			// loop adding data from json file inside my task cards
			setTimeout(function () {
				currentTasks[i].innerText = data[i].timeframes.daily.current + 'hrs'

				lastTasks[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs'
			}, 500)
		}

		selectBtn(dailyBtn) // call selectbtn function (active class add)
	})

	weeklyBtn.addEventListener('click', e => {
		taskCards.forEach(card => {
			card.style.animation = '1s forwards ease-in cardsMove'

			setTimeout(function () {
				card.style.removeProperty('animation')
				card.style.bottom = '0'
			}, 1000)
		})

		for (let i = 0; i < data.length; i++) {
			setTimeout(function () {
				currentTasks[i].innerText = data[i].timeframes.weekly.current + 'hrs'

				lastTasks[i].innerText = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
			}, 500)
		}

		selectBtn(weeklyBtn)
	})

	monthlyBtn.addEventListener('click', e => {
		taskCards.forEach(card => {
			card.style.animation = '1s forwards ease-in cardsMove'

			setTimeout(function () {
				card.style.removeProperty('animation')
				card.style.bottom = '0'
			}, 1000)
		})

		for (let i = 0; i < data.length; i++) {
			setTimeout(function () {
				currentTasks[i].innerText = data[i].timeframes.monthly.current + 'hrs'

				lastTasks[i].innerText = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
			}, 500)
		}

		selectBtn(monthlyBtn)
	})
}
worktimeData() // call async function

window.onload = function () {
	// function starts while page has been loaded
	profileCard.style.animation = '1.5s 1s forwards ease profileSlideIn'

	taskCards.forEach(card => {
		card.style.animation = '1s 2s forwards ease cardsSlideIn'
	})
}
