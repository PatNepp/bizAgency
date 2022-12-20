const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})

const video = document.querySelector('.video')
const button = document.querySelector('.video-bar-buttons i')
const videoBar = document.querySelector('.video-bar')

const playPause = () => {
    if (video.paused) {
        video.play()
        button.className = 'far fa-pause-circle'
        video.style.opacity = .7
    } else {
        video.pause()
        button.className = 'far fa-play-circle'
        video.style.opacity = .3
    }
    
}

button.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    const barWidth = (video.currentTime / video.duration) * 100
    videoBar.style.width = `${barWidth}%`

    if (video.ended) {
        button.className = 'far fa-play-circle'
        video.style.opacity = .3
    }
})



