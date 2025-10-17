const detailContainer = document.querySelector('.detail')

const getDetailMusic = async () =>{
    const path = new URLSearchParams(window.location.search);
    const musicId = path.get('id');
    const response = await fetch('../data.json');
    const data = await response.json();
    const findMusicId = data.find(item => item.id.toString()=== musicId.toString())

    detailContainer.innerHTML = `
    
    
    `
}
getDetailMusic