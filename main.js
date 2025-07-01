document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
        document.addEventListener('scroll', () => {
            window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
        });
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll('#navbar .scrollto');

    function navbarlinksActive() {
        navbarlinks.forEach(navbarlink => {

            if (!navbarlink.hash)
                return;

            let section = document.querySelector(navbarlink.hash);
            if (!section)
                return;

            let position = window.scrollY;
            if (navbarlink.hash != '#header')
                position += 200;

            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    /**
     * Mobile nav toggle
     */
    const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToogle) {
        mobileNavToogle.addEventListener('click', function (event) {
            event.preventDefault();

            document.querySelector('body').classList.toggle('mobile-nav-active');

            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
        el.addEventListener('click', function (event) {
            if (document.querySelector('.mobile-nav-active')) {
                event.preventDefault();
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('dropdown-active');

                let dropDownIndicator = this.querySelector('.dropdown-indicator');
                dropDownIndicator.classList.toggle('bi-chevron-up');
                dropDownIndicator.classList.toggle('bi-chevron-down');
            }
        })
    });

});



/*const Us = function () {
    var t = document.querySelector(".ind_map"),
            e = [{
                    x: 12.1,
                    y: 46.5,
                    content: "Ahmedabad"
                },
                {
                    x: 20.9,
                    y: 13,
                    content: "Poonch"
                },
                {
                    x: 23.5,
                    y: 21,
                    content: "Ludhiana"
                },
                {
                    x: 17.5,
                    y: 25,
                    content: "Sri Ganganagar"
                },
                {
                    x: 27.5,
                    y: 28,
                    content: "Delhi"
                },
                {
                    x: 28.8,
                    y: 30,
                    content: "Ghaziabad"
                },
                {
                    x: 28.9,
                    y: 32,
                    content: "Mathura"
                },
                {
                    x: 14.9,
                    y: 30,
                    content: "Bikaner"
                },
                {
                    x: 22.9,
                    y: 34,
                    content: "Jaipur"
                },
                {
                    x: 20.9,
                    y: 37,
                    content: "Ajmer"
                },
                {
                    x: 14.9,
                    y: 36,
                    content: "Jodhpur"
                },
                {
                    x: 30.5,
                    y: 37,
                    content: "Gwalior"
                },
                {
                    x: 23.9,
                    y: 39,
                    content: "Kota"
                },
                {
                    x: 16.5,
                    y: 42,
                    content: "Udaipur"
                },
                {
                    x: 22.9,
                    y: 47,
                    content: "Ujjain"
                },
                {
                    x: 28.5,
                    y: 46,
                    content: "Bhopal"
                },
                {
                    x: 34.2,
                    y: 46,
                    content: "Sagar"
                },
                {
                    x: 37.2,
                    y: 47,
                    content: "Jabalpur"
                },
                {
                    x: 44.2,
                    y: 50,
                    content: "Bilaspur"
                },
                {
                    x: 23,
                    y: 49,
                    content: "Indor"
                },
                {
                    x: 14.6,
                    y: 50,
                    content: "Vadodara"
                },
                {
                    x: 13.6,
                    y: 53,
                    content: "Surat"
                },
                {
                    x: 10.6,
                    y: 52,
                    content: "Bhavnagar"
                },
                {
                    x: 7.9,
                    y: 50,
                    content: "Rajkot"
                },
                {
                    x: 13.9,
                    y: 55,
                    content: "Vapi"
                },
                {
                    x: 16.9,
                    y: 57,
                    content: "Nasik"
                },
                {
                    x: 21.9,
                    y: 58,
                    content: "Aurangabad"
                },
                {
                    x: 26.9,
                    y: 55,
                    content: "Akola"
                },
                {
                    x: 28.9,
                    y: 54,
                    content: "Amravati"
                },
                {
                    x: 33.9,
                    y: 54,
                    content: "Nagpur"
                },
                {
                    x: 43.5,
                    y: 54,
                    content: "Raipur"
                },
                {
                    x: 42.9,
                    y: 60,
                    content: "Jagdalpura"
                },
                {
                    x: 32.5,
                    y: 67,
                    content: "Hyderabad"
                },
                {
                    x: 13.5,
                    y: 60,
                    content: "Mumbai"
                },
                {
                    x: 16.5,
                    y: 64,
                    content: "Pune"
                },
                {
                    x: 16.9,
                    y: 69,
                    content: "Kolhapur"
                },
                {
                    x: 28.2,
                    y: 81,
                    content: "Bengaluru"
                },
                {
                    x: 37.2,
                    y: 82,
                    content: "Chennai"
                },
                {
                    x: 35.8,
                    y: 86,
                    content: "Puducherry"
                },
                {
                    x: 33,
                    y: 90,
                    content: "Tiruchirappalli"
                },
                {
                    x: 29.9,
                    y: 93,
                    content: "Madurai"
                },
                {
                    x: 26.7,
                    y: 98,
                    content: "Thiruvanathapuram"
                },
            ];

    function i() {
        var t = document.querySelectorAll(".hot-spot"), i = document.querySelectorAll(".speech-bubble");
        t.forEach((function (t, n) {
            var s = e[n].x,
                    o = e[n].y,
                    r = e[n].content;
            var city = e[n].content;
            $("div.hot-spot:first").addClass('hot-spot-ahmedabad');
            t.style.top = "".concat(o, "%"),
                    t.style.left = "".concat(s, "%"),
                    i[n].textContent = r,
                    window.innerWidth >= 300 ? (i[n].style.top = "".concat(o, "%"), i[n].style.left = "".concat(s, "%")) : (i[n].style.top = "50%", i[n].style.left = "50%"),
                    document.body.addEventListener("click", (function (e) {
                        e.target === t ? i[n].classList.add("active") : i[n].classList.remove("active");
                        if (e.target === t)
                        {
                            var target = $('span.speech-bubble.active');
                            var city = $(target).html();
                            if (city == 'Ahmedabad')
                            {
                                $(target).addClass('speech-bubble-ahmedabad');
                            }
                        }
                    }));

        }))
    }
    !function () {
        for (var n = 0; n < e.length; n++) {
            var s = document.createElement("div");
            var cls = 'speech-bubble';
            s.classList.add("hot-spot"), t.append(s);
            var o = document.createElement("span");
            o.classList.add("speech-bubble"), t.append(o);
        }
        i()
    }(), window.addEventListener("load", i), window.addEventListener("resize", i)
};
document.addEventListener("DOMContentLoaded", (function () {
    Us()
}))*/

const Us = function () {
    var t = document.querySelector(".ind_map"),
        e = [{
                    x: 12.1,
                    y: 46.5,
                    content: "Ahmedabad"
                },
                {
                    x: 20.9,
                    y: 13,
                    content: "Poonch"
                },
                {
                    x: 23.5,
                    y: 21,
                    content: "Ludhiana"
                },
                {
                    x: 17.5,
                    y: 25,
                    content: "Sri Ganganagar"
                },
                {
                    x: 27.5,
                    y: 28,
                    content: "Delhi"
                },
                {
                    x: 28.8,
                    y: 30,
                    content: "Ghaziabad"
                },
                {
                    x: 28.9,
                    y: 32,
                    content: "Mathura"
                },
                {
                    x: 14.9,
                    y: 30,
                    content: "Bikaner"
                },
                {
                    x: 22.9,
                    y: 34,
                    content: "Jaipur"
                },
                {
                    x: 20.9,
                    y: 37,
                    content: "Ajmer"
                },
                {
                    x: 14.9,
                    y: 36,
                    content: "Jodhpur"
                },
                {
                    x: 30.5,
                    y: 37,
                    content: "Gwalior"
                },
                {
                    x: 23.9,
                    y: 39,
                    content: "Kota"
                },
                {
                    x: 16.5,
                    y: 42,
                    content: "Udaipur"
                },
                {
                    x: 22.9,
                    y: 47,
                    content: "Ujjain"
                },
                {
                    x: 28.5,
                    y: 46,
                    content: "Bhopal"
                },
                {
                    x: 34.2,
                    y: 46,
                    content: "Sagar"
                },
                {
                    x: 37.2,
                    y: 47,
                    content: "Jabalpur"
                },
                {
                    x: 44.2,
                    y: 50,
                    content: "Bilaspur"
                },
                {
                    x: 23,
                    y: 49,
                    content: "Indor"
                },
                {
                    x: 14.6,
                    y: 50,
                    content: "Vadodara"
                },
                {
                    x: 13.6,
                    y: 53,
                    content: "Surat"
                },
                {
                    x: 10.6,
                    y: 52,
                    content: "Bhavnagar"
                },
                {
                    x: 7.9,
                    y: 50,
                    content: "Rajkot"
                },
                {
                    x: 13.9,
                    y: 55,
                    content: "Vapi"
                },
                {
                    x: 16.9,
                    y: 57,
                    content: "Nasik"
                },
                {
                    x: 21.9,
                    y: 58,
                    content: "Aurangabad"
                },
                {
                    x: 26.9,
                    y: 55,
                    content: "Akola"
                },
                {
                    x: 28.9,
                    y: 54,
                    content: "Amravati"
                },
                {
                    x: 33.9,
                    y: 54,
                    content: "Nagpur"
                },
                {
                    x: 43.5,
                    y: 54,
                    content: "Raipur"
                },
                {
                    x: 42.9,
                    y: 60,
                    content: "Jagdalpura"
                },
                {
                    x: 32.5,
                    y: 67,
                    content: "Hyderabad"
                },
                {
                    x: 13.5,
                    y: 60,
                    content: "Mumbai"
                },
                {
                    x: 16.5,
                    y: 64,
                    content: "Pune"
                },
                {
                    x: 16.9,
                    y: 69,
                    content: "Kolhapur"
                },
                {
                    x: 28.2,
                    y: 81,
                    content: "Bengaluru"
                },
                {
                    x: 37.2,
                    y: 82,
                    content: "Chennai"
                },
                {
                    x: 35.8,
                    y: 86,
                    content: "Puducherry"
                },
                {
                    x: 33,
                    y: 90,
                    content: "Tiruchirappalli"
                },
                {
                    x: 29.9,
                    y: 93,
                    content: "Madurai"
                },
                {
                    x: 26.7,
                    y: 98,
                    content: "Thiruvanathapuram"
                },
            ];

    function i() {
        var t = document.querySelectorAll(".hot-spot"),
            i = document.querySelectorAll(".speech-bubble");
        t.forEach((function (t, n) {
            var s = e[n].x,
                o = e[n].y,
                r = e[n].content;
            $("div.hot-spot:first").addClass('hot-spot-ahmedabad');
            t.style.top = `${o}%`;
            t.style.left = `${s}%`;
            i[n].textContent = r;
            if (window.innerWidth >= 300) {
                i[n].style.top = `${o}%`;
                i[n].style.left = `${s}%`;
            } else {
                i[n].style.top = "50%";
                i[n].style.left = "50%";
            }
            document.body.addEventListener("click", function (e) {
                e.target === t ? i[n].classList.add("active") : i[n].classList.remove("active");
                if (e.target === t) {
                    var target = $('span.speech-bubble.active');
                    var city = $(target).html();
                    if (city == 'Ahmedabad') {
                        $(target).addClass('speech-bubble-ahmedabad');
                    }
                }
            });
        }));
    }

    // Only execute if the map container exists
    if (t) {
        for (var n = 0; n < e.length; n++) {
            var s = document.createElement("div");
            s.classList.add("hot-spot");
            t.append(s);

            var o = document.createElement("span");
            o.classList.add("speech-bubble");
            t.append(o);
        }
        i();

        window.addEventListener("load", i);
        window.addEventListener("resize", i);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    Us();
});

