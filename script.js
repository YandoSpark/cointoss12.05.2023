fetch('./kronEllerMynt.json')
.then((response) => response.json())
.then((json) => {
    console.log(json);
    var title = document.querySelector(".result")
    var counter = document.querySelector(".counter")
    var img1 = document.querySelector("#mynt")
    var img2 = document.querySelector("#kron")
    var img3 = document.querySelector("#winner")
    var reset = document.querySelector(".reset")
    var imgarray = [img1, img2]
    var winner = imgarray[Math.floor(Math.random() * imgarray.length)]
    console.log(winner);

    counter.innerHTML = 0;

    img1.src = json[0].images.mynt
    img2.src = json[0].images.kron
    img3.src = winner.src

    img1.addEventListener("click", function () {
        if (img1.src == json[0].images.mynt) {
            if (img3.src == img2.src) {
                title.innerHTML = "Winner";
                img3.src = imgarray[Math.floor(Math.random() * imgarray.length)].src;
                counter.innerHTML = parseInt(counter.innerHTML) + 1;
            } else {
                title.innerHTML = "Loser";
                img3.src = imgarray[Math.floor(Math.random() * imgarray.length)].src;
            }
        }
    });

    img2.addEventListener("click", function () {
        if (img2.src == json[0].images.kron) {
            if (img3.src == img2.src) {
                title.innerHTML = "Winner";
                img3.src = imgarray[Math.floor(Math.random() * imgarray.length)].src;
                counter.innerHTML = parseInt(counter.innerHTML) + 1;
            } else {
                title.innerHTML = "Loser";
                img3.src = imgarray[Math.floor(Math.random() * imgarray.length)].src;
            }
        }
    });

    reset.addEventListener('click', function(){
        window.location.reload()
    })
});
