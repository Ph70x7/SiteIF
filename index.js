console.log("%JavaScript by : fssamuelbs", "color: green; font-family:sans-serif; font-size: 100px; font-weight: bold; text-align: center");

window.sr = ScrollReveal({ reset: true });

sr.reveal('.Tt', {
    rotate: { x: 5, y: 0, z: 0 },
    duration: 800
});


sr.reveal('.Countein', {
    rotate: { x: 5, y: 0, z: 0 },
    duration: 800
});

sr.reveal('.botões', {
    rotate: { x: 20, y: 0, z: 0 },
    duration: 800
});

sr.reveal('.arrow', {
    rotate: { x: 20, y: 0, z: 0 },
    duration: 1800
});

sr.reveal('.one', {
    rotate: { x: 20, y: 0, z: 0 },
    duration: 800
});


const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,

   
    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 5 * 1000
    }
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topo").style.display = "block";
    } else {
        document.getElementById("topo").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 1; 
    document.documentElement.scrollTop = 1; 
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.remove("hidden");
    } else {
        scrollButton.classList.add("hidden");
    }
}

function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - (currentScroll / 30)); }

}

