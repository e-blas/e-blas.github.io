/* =====================================================
   EBLAS
   Motion system
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    const intro = document.getElementById("intro");
    const enterButton = document.getElementById("enterButton");
    const site = document.getElementById("site");


    /* =================================================
       INITIAL STATE
    ================================================= */

    document.body.classList.add("locked");

    gsap.set(site, {
        opacity: 0
    });


    /* =================================================
       INTRO ENTRANCE
    ================================================= */

    const introEntrance = gsap.timeline();

    introEntrance
        .from(".intro__header span", {
            y: 15,
            opacity: 0,
            duration: .8,
            stagger: .08,
            ease: "power3.out"
        })

        .from(".intro__enter", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=.5")

        .from(".intro__footer span", {
            y: 15,
            opacity: 0,
            duration: .7,
            stagger: .08,
            ease: "power3.out"
        }, "-=.6");


    /* =================================================
       ENTER
    ================================================= */

    enterButton.addEventListener("click", () => {

        const enterTimeline = gsap.timeline({

            onComplete: () => {

                intro.style.display = "none";

                document.body.classList.remove("locked");

                initScrollAnimations();

            }

        });


        enterTimeline

            .to(".intro__enter", {
                opacity: 0,
                y: -15,
                duration: .4,
                ease: "power2.in"
            })

            .to(".intro__header, .intro__footer", {
                opacity: 0,
                duration: .4
            }, "-=.25")

            .to(intro, {
                clipPath: "inset(0 0 100% 0)",
                duration: 1.25,
                ease: "power4.inOut"
            })

            .to(site, {
                opacity: 1,
                duration: .2
            }, "-=.65")

            .to(".hero__eyebrow", {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power4.out"
            }, "-=.25")

            .to(".hero h1", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out"
            }, "-=.55");

    });


    /* =================================================
       SCROLL ANIMATIONS
    ================================================= */

    function initScrollAnimations() {


        /* ---------------------------------------------
           MARQUEE
        --------------------------------------------- */

        const marquee =
            document.querySelector(".marquee-track");

        if (marquee) {

            gsap.to(marquee, {

                xPercent: -50,

                duration: 28,

                repeat: -1,

                ease: "none"

            });

        }


        /* ---------------------------------------------
           HERO PARALLAX
        --------------------------------------------- */

        gsap.to(".hero h1", {

            yPercent: -12,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: true

            }

        });


        /* ---------------------------------------------
           PROJECTS
        --------------------------------------------- */

        document.querySelectorAll(".project")
            .forEach((project) => {

                const visual =
                    project.querySelector(
                        ".project__visual"
                    );

                const title =
                    project.querySelector(
                        ".project__visual-title"
                    );

                const meta =
                    project.querySelector(
                        ".project__meta"
                    );

                const bottom =
                    project.querySelector(
                        ".project__bottom"
                    );


                /* Visual reveal */

                gsap.fromTo(
                    visual,

                    {
                        y: 60,
                        opacity: 0,
                        scale: .96
                    },

                    {
                        y: 0,
                        opacity: 1,
                        scale: .985,

                        duration: 1.2,

                        ease:
                            "power4.out",

                        scrollTrigger: {

                            trigger: project,

                            start: "top 85%",

                            once: true

                        }

                    }
                );


                /* Metadata */

                gsap.from(
                    meta,

                    {
                        y: 15,
                        opacity: 0,

                        duration: .7,

                        ease:
                            "power3.out",

                        scrollTrigger: {

                            trigger: project,

                            start: "top 90%",

                            once: true

                        }

                    }
                );


                /* Bottom information */

                gsap.from(
                    bottom,

                    {
                        y: 20,
                        opacity: 0,

                        duration: .8,

                        ease:
                            "power3.out",

                        scrollTrigger: {

                            trigger: project,

                            start: "top 75%",

                            once: true

                        }

                    }
                );


                /* Image parallax */

                gsap.to(
                    visual,

                    {

                        yPercent: -5,

                        ease: "none",

                        scrollTrigger: {

                            trigger: project,

                            start: "top bottom",

                            end: "bottom top",

                            scrub: true

                        }

                    }
                );


                /* Project title */

                gsap.to(
                    title,

                    {

                        yPercent: -10,

                        ease: "none",

                        scrollTrigger: {

                            trigger: project,

                            start: "top bottom",

                            end: "bottom top",

                            scrub: true

                        }

                    }
                );

            });


        /* ---------------------------------------------
           SECTION HEADINGS
        --------------------------------------------- */

        document.querySelectorAll(
            ".section-intro h2"
        ).forEach((heading) => {

            gsap.from(
                heading,

                {

                    y: 45,

                    opacity: 0,

                    duration: 1,

                    ease:
                        "power4.out",

                    scrollTrigger: {

                        trigger: heading,

                        start: "top 85%",

                        once: true

                    }

                }
            );

        });


        /* ---------------------------------------------
           MYSELF
        --------------------------------------------- */

        gsap.from(
            ".myself__large",

            {

                y: 60,

                opacity: 0,

                duration: 1.2,

                ease:
                    "power4.out",

                scrollTrigger: {

                    trigger: ".myself__large",

                    start: "top 80%",

                    once: true

                }

            }
        );


        gsap.from(
            ".myself__details p",

            {

                y: 30,

                opacity: 0,

                duration: .9,

                stagger: .12,

                ease:
                    "power3.out",

                scrollTrigger: {

                    trigger: ".myself__details",

                    start: "top 80%",

                    once: true

                }

            }
        );


        /* ---------------------------------------------
           SERVICES
        --------------------------------------------- */

        document.querySelectorAll(
            ".service"
        ).forEach((service) => {

            gsap.from(
                service,

                {

                    y: 25,

                    opacity: 0,

                    duration: .7,

                    ease:
                        "power3.out",

                    scrollTrigger: {

                        trigger: service,

                        start: "top 90%",

                        once: true

                    }

                }
            );

        });


        /* ---------------------------------------------
           CONTACT
        --------------------------------------------- */

        gsap.from(
            ".contact__email",

            {

                y: 40,

                opacity: 0,

                duration: 1.2,

                ease:
                    "power4.out",

                scrollTrigger: {

                    trigger: ".contact__main",

                    start: "top 80%",

                    once: true

                }

            }
        );


    }


});
