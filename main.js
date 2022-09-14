const fighterGrid = document.querySelector(".fighter-grid");
const fighters = ["bryan", "anna", "bob", "kazuya"]
const fighterUrl = (name) => {
    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`;
}
const renderFighterCard = (name) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = name;
    const p = document.createElement('p')
    p.textContent = name;
    const img = document.createElement('img')
    img.className= 'fighter-image'
    img.src = fighterUrl(name)
    card.append(img, p);
    fighterGrid.append(card)

}

fighters.forEach(renderFighterCard)