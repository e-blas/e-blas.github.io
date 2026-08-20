document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    const intro = document.getElementById("intro");
    const introEnter = document.getElementById("introEnter");
    const site = document.getElementById("site");

    document.body.classList.add("locked");


    /* ==================================================
       INTRO
    ================================================== */

    const introTimeline = gsap.timeline();

    introTimeline
        .from(".intro-top span", {
            y: 15,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out"
        })
        .from(".intro-enter", {
            y: 20,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out"
        }, "-=0.4")
        .from(".intro-bottom span", {
            y: 15,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out"
        }, "-=0.5");


    /* ==================================================
       ENTER
    ================================================== */

    introEnter.addEventListener("click", () => {

        const reveal = gsap.timeline({
            onComplete: () => {

                intro.style.display = "none";

                document.body.classList.remove("locked");

                startSiteAnimations();

            }
        });


        reveal
            .to(".intro-enter", {
                opacity: 0,
                y: -15,
                duration: 0.35,
                ease: "power2.in"
            })
            .to(".intro-top, .intro-bottom", {
                opacity: 0,
                duration: 0.35
            }, "-=0.2")
            .to(intro, {
                clipPath: "inset(0 0 100% 0)",
                duration: 1.15,
                ease: "power4.inOut"
            })
            .to(site, {
                opacity: 1,
                duration: 0.2
            }, "-=0.55")
            .to(".hero-label", {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            }, "-=0.2")
            .to(".hero h1", {
                y: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power4.out"
            }, "-=0.5");

    });


    /* ==================================================
       SITE ANIMATIONS
    ================================================== */

    function startSiteAnimations() {


        /* ----------------------------------------------
           TICKER
        ---------------------------------------------- */

        const ticker = document.querySelector(".ticker-track");

        if (ticker) {

            gsap.to(ticker, {
                xPercent: -50,
                duration: 30,
                repeat: -1,
                ease: "none"
            });

        }


        /* ----------------------------------------------
           HERO PARALLAX
        ---------------------------------------------- */

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


        /* ----------------------------------------------
           SECTION HEADINGS
        ---------------------------------------------- */

        gsap.utils.toArray(".section-heading").forEach((heading) => {

            gsap.from(heading, {

                y: 40,

                opacity: 0,

                duration: 1,

                ease: "power4.out",

                scrollTrigger: {

                    trigger: heading,

                    start: "top 85%",

                    once: true

                }

            });

        });


        /* ----------------------------------------------
           PROJECTS
        ---------------------------------------------- */

        gsap.utils.toArray(".project").forEach((project) => {

            const image =
                project.querySelector(".project-image");

            const info =
                project.querySelector(".project-info");

            const meta =
                project.querySelector(".project-meta");

            const name =
                project.querySelector(".project-name");


            if (!image || !info || !meta || !name) {
                return;
            }


            /* Reveal */

            gsap.from(image, {

                y: 60,

                opacity: 0,

                scale: 0.97,

                duration: 1.1,

                ease: "power4.out",

                scrollTrigger: {

                    trigger: project,

                    start: "top 85%",

                    once: true

                }

            });


            gsap.from(meta, {

                y: 15,

                opacity: 0,

                duration: 0.7,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: project,

                    start: "top 90%",

                    once: true

                }

            });


            gsap.from(info, {

                y: 20,

                opacity: 0,

                duration: 0.8,

                ease: "power3.out",

                scrollTrigger: {

                    trigger: project,

                    start: "top 80%",

                    once: true

                }

            });


            /* Image parallax */

            gsap.to(image, {

                yPercent: -5,

                ease: "none",

                scrollTrigger: {

                    trigger: project,

                    start: "top bottom",

                    end: "bottom top",

                    scrub: true

                }

            });


            /* Project title parallax */

            gsap.to(name, {

                yPercent: -10,

                ease: "none",

                scrollTrigger: {

                    trigger: project,

                    start: "top bottom",

                    end: "bottom top",

                    scrub: true

                }

            });

        });


        /* ----------------------------------------------
           MYSELF
        ---------------------------------------------- */

        const lead = document.querySelector(".myself-lead");

        if (lead) {

            gsap.from(lead, {

                y: 50,

                opacity: 0,

                duration: 1.1,

                ease: "power4.out",

                scrollTrigger: {

                    trigger: lead,

                    start: "top 80%",

                    once: true

                }

            });

        }


        gsap.utils.toArray(".myself-description p")
            .forEach((paragraph) => {

                gsap.from(paragraph, {

                    y: 25,

                    opacity: 0,

                    duration: 0.8,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: paragraph,

                        start: "top 85%",

                        once: true

                    }

                });

            });


        /* ----------------------------------------------
           SERVICES
        ---------------------------------------------- */

        gsap.utils.toArray(".service")
            .forEach((service) => {

                gsap.from(service, {

                    y: 20,

                    opacity: 0,

                    duration: 0.7,

                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: service,

                        start: "top 90%",

                        once: true

                    }

                });

            });


        /* ----------------------------------------------
           CONTACT
        ---------------------------------------------- */

        const email =
            document.querySelector(".contact-email");

        if (email) {

            gsap.from(email, {

                y: 40,

                opacity: 0,

                duration: 1.1,

                ease: "power4.out",

                scrollTrigger: {

                    trigger: email,

                    start: "top 80%",

                    once: true

                }

            });

        }


        ScrollTrigger.refresh();

    }

});
