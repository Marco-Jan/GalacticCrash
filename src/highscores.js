
export function saveHighscore(score, playerName) {
  let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

  const existingEntry = highscores.find(entry => entry.name === playerName);

  if (existingEntry) {
      if (score > existingEntry.score) {
          existingEntry.score = score;
      }
  } else {
      highscores.push({ name: playerName, score });
  }

  
  highscores.sort((a, b) => b.score - a.score);

  // Beschränke die Liste auf  5
  highscores = highscores.slice(0, 5);

  // Speichere die aktualisierte Liste im Local Storage
  localStorage.setItem('highscores', JSON.stringify(highscores));
}


export function getHighscores() {
  return JSON.parse(localStorage.getItem('highscores')) || [];


}