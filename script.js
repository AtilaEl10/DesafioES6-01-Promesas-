const getAlbum = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        const response = await fetch(url)
        const album = await response.json()
        album.forEach(element => {
            if(element.id <= 20) {
                console.log(element.title);
            }
        });    
    } catch (error) {
        console.log(error);
    }
}

const albumTime = async () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Informacion enviada")
        }, 3000)
})

const getAlbumTime = async (albumTime) => {
    const albumTimeValor = await albumTime()
    console.log(albumTimeValor);
}

getAlbum()
getAlbumTime(albumTime)