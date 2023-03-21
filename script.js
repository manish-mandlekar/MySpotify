var mmj = document.querySelector('#mmj');
var pl = document.querySelector('#pl')
var st = document.querySelector('#st')
var bc = document.querySelector('#st i')
var tc = document.querySelector('.tc')
var second = document.querySelector('#second')
var wkb = document.querySelector('#wkb')
var simg = document.querySelector('#simg')
var ij = document.querySelector('#ij')
var third = document.querySelector('#third')
var ac = document.querySelector('.ac')
var fourth = document.querySelector('#fourth')
var sc = document.querySelector('.sc')
var sdga = document.querySelector('#sdga')
var fifth = document.querySelector('#fifth')
var rc = document.querySelector('.rc')
var rd = document.querySelector('#rd')
var list = document.querySelector('.list')
var input = document.querySelector("#input")
var element = document.querySelector('.element')
var iail = document.querySelector('#iail')
var video = document.querySelector('#video')
var raatan = document.querySelector('#rl')
var abl = document.querySelector('#abl')
var arr = [
    { name: 'Maan Meri Jaan' },
    { name: 'Rattan Lambiyan' },
    { name: 'Ijazat' },
    { name: "Apna bana le" },
    { name: 'Rubicon Drill' },
];

function fillBox(arr) {
    var temp = '';
    arr.forEach((elem) => {
        temp += `<div id="st" class="element">
        <h2>${elem.name}</h2>  <i class="ri-play-circle-line bc"></i>
    </div>`
    })
    list.innerHTML = temp;
}
fillBox(arr);

input.addEventListener('keydown', function (e) {
    const addValue = e.target.value;
    const newArr = arr.filter((user) => user.name.includes(addValue));
    fillBox(newArr);
})

list.addEventListener('click', function (e) {
    console.log(e.target.parentNode.childNodes[3]);
    if (e.target.textContent == 'Maan Meri Jaan') {
        simg.innerHTML = `<img src="${'https://imgs.search.brave.com/kA6L_uc_Dd33PyHxk0rhmz6BBiBsGgeO5hIm7LNTvb8/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/bHlyaWNzYm9naWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL21hYW4t/bWVyaS1qYWFuLWx5/cmljcy5qcGc'}" alt="">`
        video.innerHTML = `<video muted autoplay loop src="${'./maanja.mp4'}"></video>`
        if (mmj.paused) {
            mmj.play();
            raatan.pause();
            ij.pause();
            abl.pause();
            rd.pause();
            e.target.parentNode.childNodes[3].classList.add('ri-pause-circle-line')
            e.target.parentNode.childNodes[3].classList.remove('ri-play-circle-line')
        } else {
            mmj.pause();
            e.target.parentNode.childNodes[3].classList.add('ri-play-circle-line')
            e.target.parentNode.childNodes[3].classList.remove('ri-pause-circle-line')
        }
    } else if (e.target.textContent == 'Rattan Lambiyan') {
        simg.innerHTML = `<img src="${'https://imgs.search.brave.com/l_n23O8ADr1dpeUhOQuDgFys4aYPpUjUOa8j8OSrINg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly90aW1l/c29maW5kaWEuaW5k/aWF0aW1lcy5jb20v/cGhvdG8vODQ4OTA0/NDEvc2l6ZS0xMzIw/NTUvODQ4OTA0NDEu/anBn'}" alt="">`
        video.innerHTML = `<video muted autoplay loop src="${'./sheershan.mp4'}"></video>`
        if (raatan.paused) {
            raatan.play();
            mmj.pause();
            ij.pause();
            abl.pause();
            rd.pause();
            e.target.parentNode.childNodes[3].classList.remove('ri-play-circle-line')
            e.target.parentNode.childNodes[3].classList.add('ri-pause-circle-line')

        } else {
            raatan.pause();
            e.target.parentNode.childNodes[3].classList.remove('ri-pause-circle-line')
            e.target.parentNode.childNodes[3].classList.add('ri-play-circle-line')
        }
    } else if (e.target.textContent == 'Ijazat') {
        simg.innerHTML = `<img src="${'https://imgs.search.brave.com/VznWD8ftVwmZNJArW05y9eP7ypW3_nZ5XU9q0JqIs_k/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS8x/NVdqRG5SbFRBRS9t/YXhyZXNkZWZhdWx0/LmpwZw'}" alt="">`
        video.innerHTML = `<video muted autoplay loop src="${'./sunny.mp4'}"></video>`

        if (ij.paused) {
            ij.play();
            raatan.pause();
            mmj.pause();
            abl.pause();
            rd.pause();
            e.target.parentNode.childNodes[3].classList.remove('ri-play-circle-line')
            e.target.parentNode.childNodes[3].classList.add('ri-pause-circle-line')
        } else {
            ij.pause();
            e.target.parentNode.childNodes[3].classList.add('ri-play-circle-line')
            e.target.parentNode.childNodes[3].classList.remove('ri-pause-circle-line')

        }
    } else if (e.target.textContent == "Apna bana le") {
        simg.innerHTML = `<img src="${'https://imgs.search.brave.com/2UKzSY0ikmrAQYde9Jr0Q3z-TVWijXEOW3qFVTXrPWo/rs:fit:1024:576:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lmx5/cmljc2JvZ2llLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8xMS9hcG5hLWJh/bmEtbGUtbHlyaWNz/LmpwZz9yZXNpemU9/MTAyNCUyQzU3NiZz/c2w9MQ'}" alt="">`
        video.innerHTML = `<video muted autoplay loop src="${'./apna.mp4'}"></video>`

        if (abl.paused) {
            abl.play();
            ij.pause();
            raatan.pause();
            mmj.pause();
            rd.pause();
            e.target.parentNode.childNodes[3].classList.add('ri-pause-circle-line')
            e.target.parentNode.childNodes[3].classList.remove('ri-play-circle-line')
        } else {
            abl.pause();
            e.target.parentNode.childNodes[3].classList.add('ri-play-circle-line')
            e.target.parentNode.childNodes[3].classList.remove('ri-pause-circle-line')

        }
    } else if (e.target.textContent == 'Rubicon Drill') {
        simg.innerHTML = `<img src="${'https://imgs.search.brave.com/jQwIzjTBTkkA6KOyPmc8vfOPS4O8MWP8WxpS5O1NhJQ/rs:fit:780:470:1/g:ce/aHR0cHM6Ly93b2x5/cmljcy5jb20vd3At/Y29udGVudC91cGxv/YWRzL1J1Ymljb24t/RHJpbGwtTHlyaWNz/LUhhcm1hbi1CcmFy/LVBhcm1pc2gtVmVy/bWEtV28tTHlyaWNz/LTc4MHg0NzAuanBn'}" alt="">`
        video.innerHTML = `<video muted autoplay loop src="${'./rubicon.mp4'}"></video>`

        if (rd.paused) {
            rd.play();
            ij.pause();
            raatan.pause();
            mmj.pause();
            abl.pause()
            rce.target.parentNode.childNodes[3].classList.add('ri-pause-circle-line')
            rce.target.parentNode.childNodes[3].classList.remove('ri-play-circle-line')
        } else {
            rd.pause();
            rce.target.parentNode.childNodes[3].classList.add('ri-play-circle-line')
            rce.target.parentNode.childNodes[3].classList.remove('ri-pause-circle-line')

        }
    }
})








