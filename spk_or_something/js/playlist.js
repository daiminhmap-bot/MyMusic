const musiclist = document.querySelector('.musiclist');

const getData = async () => {
    const response = await fetch('./data/music.json');
    const data = await response.json();

    if (data) {
        musiclist.innerHTML = data.map(item => {
            return `
            <div  class="song-item col-3 gap-3 p-0">
                <div class="card h-100">
                    <img src="${item.img}" class="card-img-top w-100 h-50" alt="${item.title} By : ${item.artist}">
                    <div class="card-body">
                    <h1></h1>
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">By : ${item.artist}</p>
                        <a href="./song_detail_tyler.html?id=${item.id}" class="btn btn-success btn-lg w-100 the-shadow">Listen</a>
                    </div>
                </div>
            </div>
                `

        })
    }
}

getData();