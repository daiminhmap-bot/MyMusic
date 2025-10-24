const detailContainer = document.querySelector('.detail')

const getDetailMusic = async () =>{
    const path = new URLSearchParams(window.location.search);
    const musicId = path.get('id'); 
    const response = await fetch('./data/music.json');
    const data = await response.json();
    const findMusicId = data.find(item => item.id.toString()=== musicId.toString())
    // console.log(findMusicId);

    detailContainer.innerHTML = `
     <div class="container detail">
        <h1>${findMusicId.title}</h1>
        <div class="song-info">
            <p class="lead">Artist: <strong>${item.artist}</strong></p>
            <img src="${findMusicId.img}" class="song-cover" alt="${findMusicId.title} by ${findMusicId.artist}">
            <audio controls>
                <source src="${findMusicId.mp3}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>

        <div class="song-meta">
            <h5>About this song</h5>
            <p><strong>Genre:</strong>${findMusicId.genre}</p>
            <p><strong>Album:</strong> ${findMusicId.album}p>
            <p><strong>Awards:</strong> ${findMusicId.awards} </p>
            <p><strong>Message:</strong> ${findMusicId.message}</p>
        </div>

        <div class="lyrics">
            <h5>Lyrics : </h5>
            <p>${findMusicId.lyrics}</p>
        </div>
    </div>
    
    `
}
getDetailMusic();