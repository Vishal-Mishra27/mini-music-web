document.querySelectorAll('.card-img').forEach((img) => {

        img.addEventListener('mouseover', function () {
            const card = this.closest('.card');   // Find the closest parent element with class 'card'
            const gif = card.querySelector('.gif img'); // Find the .gif img element inside the found card
            gif.style.visibility = 'visible';
            var audio = card.querySelector('.audio')
            audio.play()

        });

        img.addEventListener('mouseleave', function () {
            const card = this.closest('.card');
            const gif = card.querySelector('.gif img');
            gif.style.visibility = 'hidden';
            var audio = card.querySelector('.audio')
            audio.pause()
        });
    });