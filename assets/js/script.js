document.addEventListener('DOMContentLoaded', function () {


    // /*-------------------------------------------
    //     mobile menu 
    //  --------------------------------------------- */


    // const toggleBtn = document.querySelector('.toggle-icon');

    // toggleBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.querySelector('.mobile-menu').classList.toggle('open')
    //     toggleBtn.classList.toggle('open')
    // })


    // document.querySelectorAll('.mobile-main-menu > li > a').forEach(mainMenuItem => {
    //     mainMenuItem.addEventListener('click', function (e) {
    //         e.preventDefault();  // Prevent the default link behavior

    //         // Toggle the open class on the clicked item
    //         const parentLi = mainMenuItem.parentElement;
    //         const isOpen = parentLi.classList.contains('open');
    //         document.querySelectorAll('.mobile-main-menu > li').forEach(li => li.classList.remove('open'));

    //         if (!isOpen) {
    //             parentLi.classList.add('open');
    //         }
    //     });
    // });


    // document.querySelectorAll('.mobile-sub-menu > li > a').forEach(subMenuItem => {
    //     subMenuItem.addEventListener('click', function (e) {
    //         e.preventDefault();  // Prevent the default link behavior

    //         // Toggle the open class on the clicked item
    //         const parentLi = subMenuItem.parentElement;
    //         const isOpen = parentLi.classList.contains('open');
    //         document.querySelectorAll('.mobile-sub-menu > li').forEach(li => li.classList.remove('open'));

    //         if (!isOpen) {
    //             parentLi.classList.add('open');
    //         }
    //     });
    // });

    // /*-------------------------------------------
    //      Sticky Header
    //  --------------------------------------------- */

    // let win = $(window);
    // let sticky_id = $(".header-bottom");
    // win.on('scroll', function () {
    //     let scroll = win.scrollTop();
    //     if (scroll < 245) {
    //         sticky_id.removeClass("sticky-header");
    //     } else {
    //         sticky_id.addClass("sticky-header");
    //     }
    // });


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
