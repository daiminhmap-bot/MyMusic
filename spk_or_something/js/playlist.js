const fetchData = async() =>{
    let response = await fetch("../music.json")
    let data = await response.json();

    let musicList = document.querySelector("#music-list");

    musicList.innerHTML = data.map(item =>{
        return`
            <div class="music-list">
            <img scr="${item.image}" alt="${item.title}">
            <h2>${item.title}<h2/>
            <p>${item.artist}<p/>
            <div/>
        `
    }).join("");
}
fetchData()