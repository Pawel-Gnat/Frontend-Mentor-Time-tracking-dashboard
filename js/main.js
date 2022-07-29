const profileCard = document.querySelector('.profile')
const taskCards = document.querySelectorAll('.data-container')
const dailyBtn = document.querySelector('#daily_btn')
const weeklyBtn = document.querySelector('#weekly_btn')
const monthlyBtn = document.querySelector('#monthly_btn')
const currentTasks = document.querySelectorAll('.data-container__bottom-area--current')
const lastTasks = document.querySelectorAll('.data-container__bottom-area--last')

async function worktimeData() {
	const response = await fetch('./data.json')
	const data = await response.json()

	function selectBtn(btn) {
		document.querySelectorAll('.timeframe__btn').forEach(button => {
			button.classList.remove('active')
		})
		btn.classList.add('active')
	}

	function displayDaily() {
		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.daily.current + 'hrs'

			lastTasks[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs'
		}
		dailyBtn.classList.add('active')
	}
	displayDaily()

	dailyBtn.addEventListener('click', e => {
		// function animateCards(card) {
		// 	taskCards.forEach(card => {
		// 		card.style.animation = '1s forwards ease-in cardsMove'
		// 		card.classList.remove('movecard')
		// 	})
		// 	card.classList.add('movecard')
		// 	card.style.removeProperty('animation')
		// }

		taskCards.forEach(card => {
			card.style.removeProperty('animation')
			card.style.animation = '1s forwards ease-in cardsMove'
		})

		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.daily.current + 'hrs'

			lastTasks[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs'
		}

		selectBtn(dailyBtn)
	})

	weeklyBtn.addEventListener('click', e => {
		taskCards.forEach(card => {
			card.style.animation = '1s forwards ease-in cardsMove'
		})

		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.weekly.current + 'hrs'

			lastTasks[i].innerText = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
		}

		selectBtn(weeklyBtn)
	})

	monthlyBtn.addEventListener('click', e => {
		taskCards.forEach(card => {
			card.style.animation = '1s forwards ease-in cardsMove'
		})

		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.monthly.current + 'hrs'

			lastTasks[i].innerText = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
		}

		selectBtn(monthlyBtn)
	})
}
worktimeData()

window.onload = function () {
	profileCard.style.animation = '1.5s 1s forwards ease profileSlideIn'

	taskCards.forEach(card => {
		card.style.animation = '1s 2s forwards ease cardsSlideIn'
	})
}
