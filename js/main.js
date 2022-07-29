const profileCard = document.querySelector('.profile')
const dailyBtn = document.querySelector('#daily_btn')
const weeklyBtn = document.querySelector('#weekly_btn')
const monthlyBtn = document.querySelector('#monthly_btn')
const allTimeBtns = document.querySelectorAll('.timeframe__btn')
const currentTasks = document.querySelectorAll('.data-container__bottom-area--current')
const lastTasks = document.querySelectorAll('.data-container__bottom-area--last')

async function worktimeData() {
	const response = await fetch('./data.json')
	const data = await response.json()

	function displayDaily() {
		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.daily.current + 'hrs'

			lastTasks[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs'
		}

		// dailyBtn.style.opacity = '0'
		dailyBtn.classList.add('active')
	}
	displayDaily()

	dailyBtn.addEventListener('click', e => {
		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.daily.current + 'hrs'

			lastTasks[i].innerText = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs'
		}
	})

	weeklyBtn.addEventListener('click', e => {
		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.weekly.current + 'hrs'

			lastTasks[i].innerText = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
		}
	})

	monthlyBtn.addEventListener('click', e => {
		for (let i = 0; i < data.length; i++) {
			currentTasks[i].innerText = data[i].timeframes.monthly.current + 'hrs'

			lastTasks[i].innerText = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
		}
	})
}
worktimeData()

window.onload = function () {
	profileCard.style.animation = '1.5s 1s forwards ease profileSlideIn'
}

// remember you have used IDs on your timeframe buttons
