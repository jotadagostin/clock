const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const secondsPercetage = currentDate.getSeconds() / 60;
  const minutesPercetage = (secondsPercetage + currentDate.getMinutes()) / 60;
  const hoursPercetage = (minutesPercetage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercetage);
  setRotation(minutesHand, minutesPercetage);
  setRotation(hoursHand, hoursPercetage);
};

setClock();

setInterval(setClock, 1000);
