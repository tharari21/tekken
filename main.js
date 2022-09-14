const fighters = [
  "heihachi",
  "bryan",
  "anna",
  "feng",
  "steve",
  "hwoarang",
  "jin",
  "lars",
  "paul",
  "eddy",
  "yoshimitsu",
  "panda",
  "ganryu",
  "king",
  "kuma",
  "miguel",
];
const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`;
}
const fightersGrid = document.getElementById('fighters-grid');
console.log("fighters grid", fightersGrid);

fighters.forEach((fighter) => {
    const card = document.createElement('div')
    card.className = 'fighter-thumb' 
    const img = document.createElement('img')
    img.style.width = "100%";
    img.style.height = '100%'
    img.src = fighterUrl(fighter)
    card.append(img)
    fightersGrid.append(card)
})
