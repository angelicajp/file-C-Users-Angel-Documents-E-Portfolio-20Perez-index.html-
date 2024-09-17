//turn pages when click next or prev button
const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

pageTurnBtns.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
        } else {
            pageTurn.classList.add('turn');
        }

        // Update zIndex after the transition is complete
        setTimeout(() => {
            pageTurn.style.zIndex = pageTurn.classList.contains('turn') ? 20 + index : 20 - index;
        }, 500); // Adjust this timing to match your CSS transition duration
    };
});


// Script for handling the modal display
// Open modal and zoom in image
function openModal(imageId) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var img = document.querySelector("img[alt='" + imageId + "']");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Close modal and zoom out image
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure page starts on the first page
    document.querySelector('.book-page').classList.remove('turn');
  });

  function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

 function showPage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

//tell me
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) * 200 + 100)

    })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0; 

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
    return pageNumber;
}

//backprofile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500) 
    }, (index + 1) * 200 + 100)
})
}

//open animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
},2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800)

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

//openign animation (all page roight anim)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500) 
    }, (index + 1) * 200 + 2100)
})
