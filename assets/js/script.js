document.addEventListener('DOMContentLoaded', function () {


    /*-------------------------------------------
        mobile menu 
     --------------------------------------------- */


    const toggleBtn = document.querySelector('.toggle-icon');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('open')
        toggleBtn.classList.toggle('open')
    })



    /*-------------------------------------------
         play video 
     --------------------------------------------- */

    document.querySelector('#playVideo').addEventListener('click', () => {
        // Hide the image and the play button
        var img = document.querySelector('.live-mid-img img');
        var sourceImg = document.querySelector('.source-img');
        var video = document.querySelector('.live-mid-img video');

        // Hide the image and the play button
        img.style.display = 'none';
        sourceImg.style.display = 'none';

        // Show the video and play it
        video.style.display = 'block';
        video.play();
    })


})
