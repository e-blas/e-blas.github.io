document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    const intro = document.getElementById("intro");

    const enter = document.getElementById("introEnter");

    const site = document.getElementById("site");


    /* =====================================================
       INTRO
    ===================================================== */

    gsap.set(site, {
        opacity: 0
    });


    const introIn = gsap.timeline();


    introIn

        .from(".intro-header span", {

            opacity: 0,

            y: 12,

            duration: .7,

            stagger: .08,

            ease: "power3.out"

        })


        .from(".intro-enter", {

            opacity: 0,

            y: 12,

            duration: .8,

            ease: "power3.out"

        }, "-=.4")


        .from(".intro-footer span", {

            opacity: 0,

            y: 12,

            duration: .7,

            stagger: .08,

            ease: "power3.out"

        }, "-=.5");



    /* =====================================================
       ENTER
    ===================================================== */

    enter.addEventListener("click", () => {


        const out = gsap.timeline({

            onComplete: () => {

                intro.style.display = "none";

                document.body.classList.remove("locked");

                initializeSite();

            }

        });


        out


            .to(".intro-enter", {

                opacity: 0,

                y: -10,

                duration: .35,

                ease: "power2.in"

            })


            .to(
                ".intro-header, .intro-footer",
                {

                    opacity: 0,

                    duration: .35

                },

                "-=.2"
            )


            .to(intro, {

                clipPath:
                    "inset(0 0 100% 0)",

                duration: 1.15,

                ease:
                    "power4.inOut"

            })


            .to(site, {

                opacity: 1,

                duration: .01

            }, "-=.65")


            .to(".hero-kicker", {

                opacity: 1,

                duration: .7,

                ease:
                    "power3.out"

            }, "-=.15")


            .to(".hero h1", {

                opacity: 1,

                duration: 1.1,

                ease:
                    "power4.out"

            }, "-=.5");

    });



    /* =====================================================
       SITE
    ===================================================== */

    function initializeSite() {


        /* =================================================
           TICKER
        ================================================= */

        const ticker =
            document.querySelector(".ticker-track");


        if (ticker) {

            gsap.to(ticker, {

                xPercent: -50,

                duration: 32,

                repeat: -1,

                ease: "none"

            });

        }



        /* =================================================
           HERO PARALLAX
        ================================================= */

        gsap.to(".hero h1", {

            yPercent: -10,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: true

            }

        });



        /* =================================================
           SECTION INTRO
        ================================================= */

        gsap.utils
            .toArray(".section-intro")
            .forEach((section) => {

                gsap.from(section, {

                    opacity: 0,

                    y: 35,

                    duration: .9,

                    ease: "power4.out",

                    scrollTrigger: {

                        trigger: section,

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


                const meta =
                    project.querySelector(
                        ".project-meta"
                    );


                const info =
                    project.querySelector(
                        ".project-info"
                    );


                if (!image || !meta || !info) {

                    return;

                }



                gsap.from(image, {

                    opacity: 0,

                    y: 45,

                    scale: .985,

                    duration: 1,

                    ease: "power4.out",

                    scrollTrigger: {

                        trigger: project,

                        start: "top 88%",

                        once: true

                    }

                });



                gsap.from(meta, {

                    opacity: 0,

                    y: 10,

                    duration: .6,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: project,

                        start: "top 90%",

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

                        start: "top 82%",

                        once: true

                    }

                });



                gsap.to(image, {

                    yPercent: -3,

                    ease: "none",

                    scrollTrigger: {

                        trigger: project,

                        start: "top bottom",

                        end: "bottom top",

                        scrub: true

                    }

                });

            });



        /* =================================================
           MYSELF
        ================================================= */

        gsap.from(".myself-lead", {

            opacity: 0,

            y: 40,

            duration: 1,

            ease: "power4.out",

            scrollTrigger: {

                trigger: ".myself-lead",

                start: "top 85%",

                once: true

            }

        });



        gsap.utils
            .toArray(".myself-text p")
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

            y: 35,

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
