document.addEventListener("DOMContentLoaded", () => {

    const gate = document.getElementById("gate");
    const site = document.getElementById("site");

    const menu = document.querySelector(".menu-takeover");
    const menuOpen = document.querySelector(".menu-open");
    const menuClose = document.querySelector(".menu-close");

    const progress = document.querySelector(
        ".scroll-progress span"
    );

    const reveals = document.querySelectorAll(
        ".reveal"
    );

    const projects = document.querySelectorAll(
        ".project-item"
    );

    const previews = document.querySelectorAll(
        ".preview-media"
    );


    /* =====================================================
       INTRO
    ====================================================== */

    if (gate && site) {

        gate.addEventListener("click", () => {

            gate.classList.remove("ready");

            gate.style.pointerEvents = "none";

            setTimeout(() => {

                gate.style.opacity = "0";

                site.classList.add("entered");

                setTimeout(() => {

                    gate.remove();

                }, 650);

            }, 350);

        });

    }


    /* =====================================================
       MENU
    ====================================================== */

    function openMenu() {

        if (!menu) return;

        menu.classList.add("open");

        document.body.style.overflow = "hidden";

    }


    function closeMenu() {

        if (!menu) return;

        menu.classList.remove("open");

        document.body.style.overflow = "";

    }


    if (menuOpen) {

        menuOpen.addEventListener(
            "click",
            openMenu
        );

    }


    if (menuClose) {

        menuClose.addEventListener(
            "click",
            closeMenu
        );

    }


    if (menu) {

        menu.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMenu
                );

            });

    }


    /* =====================================================
       REVEAL ON SCROLL
    ====================================================== */

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    reveals.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       SCROLL PROGRESS
    ====================================================== */

    function updateProgress() {

        if (!progress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (documentHeight <= 0) {

            progress.style.transform =
                "scaleX(0)";

            return;

        }

        const percentage =
            scrollTop / documentHeight;

        progress.style.transform =
            `scaleX(${percentage})`;

    }


    window.addEventListener(
        "scroll",
        updateProgress,
        {
            passive: true
        }
    );


    updateProgress();


    /* =====================================================
       PROJECT PREVIEW
    ====================================================== */

    const previewContainer =
        document.querySelector(
            ".project-preview"
        );


    function showPreview(projectName) {

        if (!previewContainer) return;

        let found = false;


        previews.forEach(preview => {

            const name =
                preview.dataset.preview;


            if (name === projectName) {

                preview.classList.add(
                    "active"
                );

                found = true;

            } else {

                preview.classList.remove(
                    "active"
                );

            }

        });


        if (found) {

            previewContainer.classList.add(
                "visible"
            );

        }

    }


    function hidePreview() {

        if (!previewContainer) return;

        previewContainer.classList.remove(
            "visible"
        );


        previews.forEach(preview => {

            preview.classList.remove(
                "active"
            );

        });

    }


    projects.forEach(project => {

        const projectName =
            project.dataset.project;


        project.addEventListener(
            "mouseenter",
            () => {

                showPreview(projectName);

            }
        );


        project.addEventListener(
            "mouseleave",
            hidePreview
        );


        project.addEventListener(
            "focus",
            () => {

                showPreview(projectName);

            }
        );


        project.addEventListener(
            "blur",
            hidePreview
        );

    });


    /* =====================================================
       ESCAPE
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


});
