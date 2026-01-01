const moods = [
  "😊 Happy",
  "😴 Sleepy",
  "🤓 Learning",
  "😎 Confident",
  "🥺 Cute",
  "🚀 Ready for Internship"
];

function changeMood() {
  const randomIndex = Math.floor(Math.random() * moods.length);
  document.getElementById("mood").textContent = moods[randomIndex];
}
