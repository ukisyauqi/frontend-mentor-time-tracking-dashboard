const hoursComponents = document.querySelectorAll(".component-hours");
const timeComponents = document.querySelectorAll(".component-time");
const btnChangeTime = document.querySelectorAll(".btnChangeTime") 

let data;
readTextFile("./data.json", (text) => {
  data = JSON.parse(text);
  dailyOnClick();
});

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

function dailyOnClick() {
  const len = data.length;
  for (let i = 0; i < len; i++) {
    hoursComponents[i].innerHTML = data[i].timeframes.daily.current + "hrs";
    timeComponents[i].innerHTML =
      "Last Day - " + data[i].timeframes.daily.previous + "hrs";
  }
  btnChangeTime[0].classList = "btnChangeTime"
  btnChangeTime[1].classList = "btnChangeTime opacity-70"
  btnChangeTime[2].classList = "btnChangeTime opacity-70"
}
function weeklyOnClick() {
  const len = data.length;
  for (let i = 0; i < len; i++) {
    hoursComponents[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
    timeComponents[i].innerHTML =
      "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
  }
  btnChangeTime[0].classList = "btnChangeTime opacity-70"
  btnChangeTime[1].classList = "btnChangeTime"
  btnChangeTime[2].classList = "btnChangeTime opacity-70"
}
function monthlyOnClick() {
  const len = data.length;
  for (let i = 0; i < len; i++) {
    hoursComponents[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
    timeComponents[i].innerHTML =
      "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
  }
  btnChangeTime[0].classList = "btnChangeTime opacity-70"
  btnChangeTime[1].classList = "btnChangeTime opacity-70"
  btnChangeTime[2].classList = "btnChangeTime"
}
