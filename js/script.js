/* =========================================================
   MAGAZAWA TECH HUB - MAIN JAVASCRIPT
========================================================= */

console.log("MAGAZAWA TECH HUB website loaded successfully.");


/* =========================================================
   LESSON 10 & 11 - EXPLORE BUTTON
========================================================= */

const exploreButton = document.getElementById("exploreButton");
const heroTitle = document.getElementById("heroTitle");

if (exploreButton && heroTitle) {

    exploreButton.addEventListener("click", function(event) {

        event.preventDefault();

        heroTitle.textContent =
            "Welcome to MAGAZAWA TECH HUB!";

    });

}


/* =========================================================
   LESSON 12 - SHOW MORE / HIDE
========================================================= */

const toggleButton = document.getElementById("toggleButton");
const offerMessage = document.getElementById("offerMessage");

if (toggleButton && offerMessage) {

    toggleButton.addEventListener("click", function() {

        if (offerMessage.style.display === "none") {

            offerMessage.style.display = "block";

            toggleButton.textContent = "Hide";

        } else {

            offerMessage.style.display = "none";

            toggleButton.textContent = "Show More";

        }

    });

}


/* =========================================================
   CONTACT FORM
========================================================= */

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const contactButton = document.getElementById("contactButton");
const contactResult = document.getElementById("contactResult");


if (
    contactName &&
    contactEmail &&
    contactMessage &&
    contactButton &&
    contactResult
) {

    contactButton.addEventListener("click", function() {

        const name = contactName.value.trim();
        const email = contactEmail.value.trim();
        const message = contactMessage.value.trim();


        if (name === "") {

            contactResult.textContent =
                "Please enter your name.";

            contactResult.style.color = "red";

            return;

        }


        if (email === "") {

            contactResult.textContent =
                "Please enter your email address.";

            contactResult.style.color = "red";

            return;

        }


        if (!email.includes("@") || !email.includes(".")) {

            contactResult.textContent =
                "Please enter a valid email address.";

            contactResult.style.color = "red";

            return;

        }


        if (message === "") {

            contactResult.textContent =
                "Please enter your message.";

            contactResult.style.color = "red";

            return;

        }


        contactResult.textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        contactResult.style.color = "green";


        contactName.value = "";
        contactEmail.value = "";
        contactMessage.value = "";

    });

}


/* =========================================================
   CHARACTER COUNTER
========================================================= */

const characterCount =
    document.getElementById("characterCount");

if (contactMessage && characterCount) {

    contactMessage.addEventListener("input", function() {

        characterCount.textContent =
            "Characters: " +
            contactMessage.value.length +
            " / 200";

    });

}


/* =========================================================
   LESSON 27 - MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


console.log("Lesson 27 checking navigation...");
console.log("menuButton:", menuButton);
console.log("mainNav:", mainNav);


if (menuButton && mainNav) {

    menuButton.addEventListener("click", function() {

        mainNav.classList.toggle("mobile-open");

        const isOpen =
            mainNav.classList.contains("mobile-open");


        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


        if (isOpen) {

            menuButton.textContent = "✕";

            menuButton.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    const navigationLinks =
        mainNav.querySelectorAll("a");


    navigationLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("mobile-open");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    console.log("Lesson 27 navigation is ready.");

} else {

    console.log(
        "Lesson 27 navigation elements were not found."
    );

}
/* =========================================================
   LESSON 30 - PROJECT SEARCH + FILTER + SORT
========================================================= */

const projectSearch =
    document.getElementById("projectSearch");

const projectCategory =
    document.getElementById("projectCategory");

const projectSort =
    document.getElementById("projectSort");

const projectContainer =
    document.getElementById("projectContainer");

const noProjectsMessage =
    document.getElementById("noProjectsMessage");


if (
    projectSearch &&
    projectCategory &&
    projectSort &&
    projectContainer &&
    noProjectsMessage
) {

    const projectCards =
        Array.from(
            projectContainer.querySelectorAll(
                ".project-card"
            )
        );


    function filterAndSortProjects() {

        const searchText =
            projectSearch.value
                .toLowerCase()
                .trim();


        const selectedCategory =
            projectCategory.value;


        const selectedSort =
            projectSort.value;


        let matchingCards = [];


        /* =========================
           FILTER PROJECTS
        ========================== */

        projectCards.forEach(
            function(card) {

                const projectText =
                    card.textContent
                        .toLowerCase();


                const projectCategories =
                    card.dataset.category
                        .toLowerCase();


                const matchesSearch =
                    projectText.includes(
                        searchText
                    );


                const matchesCategory =
                    selectedCategory === "all" ||
                    projectCategories.includes(
                        selectedCategory
                    );


                if (
                    matchesSearch &&
                    matchesCategory
                ) {

                    matchingCards.push(card);

                }

            }
        );


        /* =========================
           SORT PROJECTS
        ========================== */

        if (selectedSort === "az") {

            matchingCards.sort(
                function(a, b) {

                    const nameA =
                        a.querySelector("h3")
                            .textContent
                            .trim()
                            .toLowerCase();

                    const nameB =
                        b.querySelector("h3")
                            .textContent
                            .trim()
                            .toLowerCase();

                    return nameA.localeCompare(
                        nameB
                    );

                }
            );

        }


        if (selectedSort === "za") {

            matchingCards.sort(
                function(a, b) {

                    const nameA =
                        a.querySelector("h3")
                            .textContent
                            .trim()
                            .toLowerCase();

                    const nameB =
                        b.querySelector("h3")
                            .textContent
                            .trim()
                            .toLowerCase();

                    return nameB.localeCompare(
                        nameA
                    );

                }
            );

        }


        /* =========================
           DISPLAY PROJECTS
        ========================== */

        projectCards.forEach(
            function(card) {

                card.style.display = "none";

            }
        );


        matchingCards.forEach(
            function(card) {

                card.style.display = "";

                projectContainer.appendChild(
                    card
                );

            }
        );


        /* =========================
           NO RESULTS
        ========================== */

        if (
            matchingCards.length === 0
        ) {

            noProjectsMessage.style.display =
                "block";

        } else {

            noProjectsMessage.style.display =
                "none";

        }

    }


    /* =========================
       SEARCH
    ========================== */

    projectSearch.addEventListener(
        "input",
        filterAndSortProjects
    );


    /* =========================
       CATEGORY
    ========================== */

    projectCategory.addEventListener(
        "change",
        filterAndSortProjects
    );


    /* =========================
       SORT
    ========================== */

    projectSort.addEventListener(
        "change",
        filterAndSortProjects
    );


    console.log(
        "Lesson 30 project search, filter and sort are ready."
    );

}
/* =========================================================
   LESSON 31 - TUTORIAL SEARCH + CATEGORY FILTER
========================================================= */

const tutorialSearch =
    document.getElementById("tutorialSearch");

const tutorialCategory =
    document.getElementById("tutorialCategory");

const tutorialContainer =
    document.getElementById("tutorialContainer");

const noTutorialsMessage =
    document.getElementById("noTutorialsMessage");


if (
    tutorialSearch &&
    tutorialCategory &&
    tutorialContainer &&
    noTutorialsMessage
) {

    const tutorialCards =
        Array.from(
            tutorialContainer.querySelectorAll(
                ".tutorial-card"
            )
        );


    function filterTutorials() {

        const searchText =
            tutorialSearch.value
                .toLowerCase()
                .trim();


        const selectedCategory =
            tutorialCategory.value;


        let visibleTutorials = 0;


        tutorialCards.forEach(
            function(card) {

                const tutorialText =
                    card.textContent
                        .toLowerCase();


                const tutorialCategories =
                    card.dataset.category
                        .toLowerCase();


                const matchesSearch =
                    tutorialText.includes(
                        searchText
                    );


                const matchesCategory =
                    selectedCategory === "all" ||
                    tutorialCategories.includes(
                        selectedCategory
                    );


                if (
                    matchesSearch &&
                    matchesCategory
                ) {

                    card.style.display = "";

                    visibleTutorials++;

                } else {

                    card.style.display = "none";

                }

            }
        );


        if (visibleTutorials === 0) {

            noTutorialsMessage.style.display =
                "block";

        } else {

            noTutorialsMessage.style.display =
                "none";

        }

    }


    tutorialSearch.addEventListener(
        "input",
        filterTutorials
    );


    tutorialCategory.addEventListener(
        "change",
        filterTutorials
    );


    console.log(
        "Lesson 31 tutorial search and filter are ready."
    );

}
/* =========================================================
   LESSON 32 - COURSE SEARCH + CATEGORY FILTER
========================================================= */

const courseSearch =
    document.getElementById("courseSearch");

const courseCategory =
    document.getElementById("courseCategory");

const courseContainer =
    document.getElementById("courseContainer");

const noCoursesMessage =
    document.getElementById("noCoursesMessage");


if (
    courseSearch &&
    courseCategory &&
    courseContainer &&
    noCoursesMessage
) {

    const courseCards =
        Array.from(
            courseContainer.querySelectorAll(
                ".course-card"
            )
        );


    function filterCourses() {

        const searchText =
            courseSearch.value
                .toLowerCase()
                .trim();


        const selectedCategory =
            courseCategory.value;


        let visibleCourses = 0;


        courseCards.forEach(
            function(card) {

                const courseText =
                    card.textContent
                        .toLowerCase();


                const courseCategories =
                    card.dataset.category
                        .toLowerCase();


                const matchesSearch =
                    courseText.includes(
                        searchText
                    );


                const matchesCategory =
                    selectedCategory === "all" ||
                    courseCategories.includes(
                        selectedCategory
                    );


                if (
                    matchesSearch &&
                    matchesCategory
                ) {

                    card.style.display = "";

                    visibleCourses++;

                } else {

                    card.style.display = "none";

                }

            }
        );


        if (visibleCourses === 0) {

            noCoursesMessage.style.display =
                "block";

        } else {

            noCoursesMessage.style.display =
                "none";

        }

    }


    courseSearch.addEventListener(
        "input",
        filterCourses
    );


    courseCategory.addEventListener(
        "change",
        filterCourses
    );


    console.log(
        "Lesson 32 course search and filter are ready."
    );

}
