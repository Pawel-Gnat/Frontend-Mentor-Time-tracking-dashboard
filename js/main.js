const profileCard = document.querySelector('.profile')
const dailyCurrentWorkTime = document.querySelector('.data-container__bottom-area-daily--current')
const dailyLastWorkTime = document.querySelector('.data-container__bottom-area-daily--last')
const weeklyCurrentWorkTime = document.querySelector('.data-container__bottom-area-weekly--current')
const weeklyLastWorkTime = document.querySelector('.data-container__bottom-area-weekly--last')
const monthlyCurrentWorkTime = document.querySelector('.data-container__bottom-area-monthly--current')
const monthlyLastWorkTime = document.querySelector('.data-container__bottom-area-monthly--last')

async function worktimeData() {
	const response = await fetch('./data.json')
	const data = await response.json()

	dailyCurrentWorkTime.innerText = data[0].timeframes.daily.current + 'hrs'

	dailyLastWorkTime.innerText = 'Yesterday - ' + data[0].timeframes.daily.previous + 'hrs'

	weeklyCurrentWorkTime.innerText = data[0].timeframes.weekly.current + 'hrs'

	weeklyLastWorkTime.innerText = 'Last Week - ' + data[0].timeframes.weekly.previous + 'hrs'

	monthlyCurrentWorkTime.innerText = data[0].timeframes.monthly.current + 'hrs'

	monthlyLastWorkTime.innerText = 'Last Month - ' + data[0].timeframes.monthly.previous + 'hrs'
}
worktimeData()

window.onload = function () {
	profileCard.style.animation = '1.5s 1s forwards ease profileSlideIn'
}

// remember you have used IDs on your timeframe buttons
