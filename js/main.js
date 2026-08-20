/* =========================================
   EBLAS
   Main interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================
       INTRO
    ====================================== */

    const intro = document.querySelector(".intro");
    const introLines = document.querySelectorAll(".intro__line");
    const site = document.querySelector(".site");

    const introTimeline = gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });


    introTimeline
        .to(introLines, {
            y: "0%",
            duration: 1.2,
            stagger: 0.12
        })

        .to(introLines, {
            y: "-110%",
            duration: 1,
            stagger: 0.08,
            delay: 0.5
        })

        .to(intro, {
            yPercent: -100,
            duration: 1.3,
            ease: "power4.inOut"
        })

        .set(site, {
            visibility: "visible"
        })

        .from(".hero__title h1", {
            y: "110%",
            duration: 1.5,
            ease: "power4.out"
        });




    /* =====================================
       MARQUEE
    ====================================== */

    const marqueeTrack =
        document.querySelector(".marquee__track");

    if (marqueeTrack) {

        gsap.to(marqueeTrack, {
            xPercent: -50,
            duration: 25,
            ease: "none",
            repeat: -1
        });

    }


    /* =====================================
       HERO PARALLAX
    ====================================== */

    gsap.to(".hero__title h1", {

        yPercent: -25,

        ease: "none",

        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }

    });


    /* =====================================
       PROJECT REVEALS
    ====================================== */

    document.querySelectorAll(".project").forEach((project) => {

        const image =
            project.querySelector(".project__image");

        const number =
            project.querySelector(".project__number");

        const info =
            project.querySelector(".project__info");


        gsap.from(image, {

            scale: 1.12,

            opacity: 0,

            duration: 1.4,

            ease: "power3.out",

            scrollTrigger: {

                trigger: project,

                start: "top 85%",

                toggleActions: "play none none reverse"

            }

        });


        gsap.from([number, info], {

            y: 40,

            opacity: 0,

            duration: 1,

            stagger: 0.1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: project,

                start: "top 75%",

                toggleActions: "play none none reverse"

            }

        });


        /* Project image parallax */

        gsap.to(image, {

            yPercent: -8,

            ease: "none",

            scrollTrigger: {

                trigger: project,

                start: "top bottom",

                end: "bottom top",

                scrub: true

            }

        });

    });


    /* =====================================
       SECTION HEADINGS
    ====================================== */

    document.querySelectorAll(".section-heading h2")
        .forEach((heading) => {

            gsap.from(heading, {

                y: 80,

                opacity: 0,

                duration: 1.2,

                ease: "power4.out",

                scrollTrigger: {

                    trigger: heading,

                    start: "top 85%"

                }

            });

        });


    /* =====================================
       SERVICES
    ====================================== */

    document.querySelectorAll(".service")
        .forEach((service) => {

            gsap.from(service, {

                y: 50,

                opacity: 0,

                duration: 0.9,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: service,

                    start: "top 90%"

                }

            });

        });


    /* =====================================
       CAPABILITIES
    ====================================== */

    document.querySelectorAll(".capabilities__grid > div")
        .forEach((column) => {

            gsap.from(column, {

                y: 50,

                opacity: 0,

                duration: 1,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: column,

                    start: "top 90%"

                }

            });

        });


    /* =====================================
       CONTACT
    ====================================== */

    gsap.from(".contact__main p", {

        scale: 0.8,

        opacity: 0,

        duration: 1.3,

        ease: "power4.out",

        scrollTrigger: {

            trigger: ".contact",

            start: "top 70%"

        }

    });

});
