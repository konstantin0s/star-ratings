const ratings = {
  sony: 4.7,
  samsung: 3.4,
  visio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
}

const starsTotal = 5;

document.addEventListener('DOMContentLoaded', getRatings);

//Get ratings
function getRatings() {
  for (let rating in ratings) {
  //Get percentage
  const starPercentage = (ratings[rating] / starsTotal) * 100;

  //Round to nearest 10
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`
}
}
