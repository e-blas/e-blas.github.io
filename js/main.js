document.addEventListener("DOMContentLoaded", () => {


    gsap.registerPlugin(ScrollTrigger);


    const gate =
        document.getElementById("gate");

    const site =
        document.getElementById("site");


    document.body.classList.add("locked");


    /* =====================================================
       INTRO
    ===================================================== */

    const introTimeline =
        gsap.timeline();


    introTimeline

        .from(".gate-mark", {

            opacity: 0,

            y: 25,

            duration: .9,

            ease: "power4.out"

        })


        .from(".gate-title", {

            opacity: 0,

            y: 12,

            duration: .6,

            ease: "power3.out"

        }, "-=.5")


        .from(".gate-hint", {

            opacity: 0,

            y: 12,

            duration: .6,

            ease: "power3.out"

        }, "-=.3");



    /* =====================================================
       ENTER
    ===================================================== */

    gate.addEventListener("click", () => {


        const timeline =
            gsap.timeline({

                onComplete: () => {

                    gate.style.display = "none";

                    document.body.classList.remove(
                        "locked"
                    );

                    initializePage();

                }

            });


        timeline


            .to(".gate-mark", {

                y: -25,

                opacity: 0,

                duration: .55,

                ease: "power3.in"

            })


            .to(
                ".gate-title, .gate-hint",
                {

                    opacity: 0,

                    duration: .35

                },
                "-=.3"
            )


            .to(gate, {

                clipPath:
                    "inset(0 0 100% 0)",

                duration: 1.15,

                ease:
                    "power4.inOut"

            })


            .to(
                site,
                {

                    opacity: 1,

                    duration: .01

                },
                "-=.65"
            )


            .from(
                ".hero-content",
                {

                    opacity: 0,

                    y: 40,

                    duration: 1,

                    ease: "power4.out"

                },
                "-=.3"
            );


    });



    /* =====================================================
       PAGE
    ===================================================== */

    function initializePage() {


        /* =================================================
           TICKER
        ================================================= */

        const ticker =
            document.querySelector(
                ".ticker-track"
            );


        if (ticker) {

            gsap.to(ticker, {

                xPercent: -50,

                duration: 35,

                repeat: -1,

                ease: "none"

            });

        }



        /* =================================================
           HERO
        ================================================= */

        gsap.to(".hero-title", {

            yPercent: -8,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: true

            }

        });



        /* =================================================
           SECTION HEADINGS
        ================================================= */

        gsap.utils
            .toArray(".section-heading")
            .forEach((heading) => {

                gsap.from(heading, {

                    opacity: 0,

                    y: 30,

                    duration: .9,

                    ease: "power4.out",

                    scrollTrigger: {

                        trigger: heading,

                        start: "top 88%",

                        once: true

                    }

                });

            });



        /* =================================================
           PROJECTS
        ================================================= */

        gsap.utils
            .toArray(".project")
            .forEach((project) => {


                const image =
                    project.querySelector(
                        ".project-image"
                    );


                const info =
                    project.querySelector(
                        ".project-info"
                    );


                gsap.from(image, {

                    opacity: 0,

                    y: 40,

                    duration: 1,

                    ease: "power4.out",

                    scrollTrigger: {

                        trigger: project,

                        start: "top 88%",

                        once: true

                    }

                });


                gsap.from(info, {

                    opacity: 0,

                    y: 15,

                    duration: .7,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: project,

                        start: "top 80%",

                        once: true

                    }

                });


            });



        /* =================================================
           ABOUT
        ================================================= */

        gsap.from(".about-lead", {

            opacity: 0,

            y: 35,

            duration: 1,

            ease: "power4.out",

            scrollTrigger: {

                trigger: ".about-lead",

                start: "top 85%",

                once: true

            }

        });



        gsap.utils
            .toArray(".about-columns p")
            .forEach((paragraph) => {

                gsap.from(paragraph, {

                    opacity: 0,

                    y: 20,

                    duration: .7,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: paragraph,

                        start: "top 90%",

                        once: true

                    }

                });

            });



        /* =================================================
           SKILLS
        ================================================= */

        gsap.utils
            .toArray(".skill")
            .forEach((skill) => {

                gsap.from(skill, {

                    opacity: 0,

                    y: 18,

                    duration: .65,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: skill,

                        start: "top 92%",

                        once: true

                    }

                });

            });



        /* =================================================
           CONTACT
        ================================================= */

        gsap.from(".contact-email", {

            opacity: 0,

            y: 30,

            duration: 1,

            ease: "power4.out",

            scrollTrigger: {

                trigger: ".contact-email",

                start: "top 85%",

                once: true

            }

        });


        ScrollTrigger.refresh();

    }

});
