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

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector(".faq-icon");
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            } else {
                document.querySelectorAll(".faq-answer").forEach(item => item.style.maxHeight = null);
                document.querySelectorAll(".faq-icon").forEach(item => item.textContent = "+");
                
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "−";
            }
        });
    });

    // 2. Add Dark Mode Switcher to Navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const themeBtn = document.createElement("button");
        themeBtn.className = "theme-toggle-btn";
        themeBtn.innerHTML = "🌙 Dark";
        navbar.appendChild(themeBtn);

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                themeBtn.innerHTML = "☀️ Light";
            } else {
                themeBtn.innerHTML = "🌙 Dark";
            }
        });
    }

    // 3. Animated Number Counter for Stats Section
    const statsNumbers = document.querySelectorAll(".stats-number");
    let animated = false;

    window.addEventListener("scroll", () => {
        const statsSection = document.querySelector(".website-stats");
        if (!statsSection) return;
        
        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !animated) {
            statsNumbers.forEach(stat => {
                const target = parseInt(stat.innerText);
                if (isNaN(target)) return;
                
                let count = 0;
                const speed = 50;
                const updateCount = () => {
                    if (count < target) {
                        count++;
                        stat.innerText = count + "+";
                        setTimeout(updateCount, speed);
                    } else {
                        stat.innerText = target + "+";
                    }
                };
                updateCount();
            });
            animated = true;
        }
    });
});

// Filter Projects Logic
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".latest-project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const targetCategory = button.getAttribute("data-category");

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");
            
            if (targetCategory === "all" || cardCategory === targetCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Contact Form Handler
const contactForm = document.getElementById("contactForm");
const sendWhatsAppBtn = document.getElementById("sendWhatsAppBtn");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    // 1. Direct WhatsApp Message Generator
    sendWhatsAppBtn.addEventListener("click", () => {
        const name = document.getElementById("userName").value.trim();
        const service = document.getElementById("userService").value;
        const message = document.getElementById("userMessage").value.trim();

        if (!name || !service || !message) {
            formStatus.style.color = "#dc2626";
            formStatus.textContent = "Please fill in all fields before sending via WhatsApp.";
            return;
        }

        const encodedText = encodeURIComponent(
            `Hello MAGAZAWA TECH HUB,\n\nMy name is ${name}.\nI am interested in: ${service}\n\nProject Details:\n${message}`
        );
        const whatsappURL = `https://wa.me/2349137373578?text=${encodedText}`;
        window.open(whatsappURL, "_blank");
    });

    // Remove e.preventDefault() for email submission so Web3Forms can process it
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", () => {
        // Form submits normally to Web3Forms and emails you directly
    });
}

document.addEventListener("DOMContentLoaded", () => {

    // 1. Dark Mode Toggle with Local Storage
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    
    // Check saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDarkMode = document.body.classList.contains("dark-mode");
            
            themeToggleBtn.textContent = isDarkMode ? "☀️ Light" : "🌙 Dark";
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        });
    }

    // 2. Live Page Content Search
    const navSearchInput = document.getElementById("navSearchInput");
    
    if (navSearchInput) {
        navSearchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const searchableCards = document.querySelectorAll(".latest-project-card, .offer-card, .popular-service-card");

            searchableCards.forEach(card => {
                const textContent = card.textContent.toLowerCase();
                if (textContent.includes(query)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});

// Modal Functionality
const detailsModal = document.getElementById("detailsModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalBody = document.getElementById("modalBody");
const modalActionBtn = document.getElementById("modalActionBtn");

// Function to Open Modal
function openModal(title, category, description, link) {
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalBody.innerHTML = `<p>${description}</p>`;
    modalActionBtn.setAttribute("href", link);
    
    detailsModal.classList.add("active");
    detailsModal.setAttribute("aria-hidden", "false");
}

// Function to Close Modal
function closeModal() {
    detailsModal.classList.remove("active");
    detailsModal.setAttribute("aria-hidden", "true");
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
}

// Close when clicking outside content box
if (detailsModal) {
    detailsModal.addEventListener("click", (e) => {
        if (e.target === detailsModal) closeModal();
    });
}

// Attach Quick Preview to Project Cards
document.querySelectorAll(".latest-project-card").forEach(card => {
    const title = card.querySelector("h3") ? card.querySelector("h3").innerText : "Project Overview";
    const category = card.getAttribute("data-category") || "Technology";
    const description = card.querySelector("p") ? card.querySelector("p").innerText : "Detailed view coming soon.";
    const link = card.querySelector("a") ? card.querySelector("a").getAttribute("href") : "#";

    card.addEventListener("click", (e) => {
        // Prevent opening modal if clicking direct page link
        if (e.target.tagName !== "A") {
            openModal(title, category.toUpperCase(), description, link);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // Persistent Dark Mode Logic
const themeToggleBtn = document.getElementById("themeToggleBtn");

// 1. Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light";
}

// 2. Toggle theme on button click
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        
        // Update button text and save setting
        themeToggleBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

    // =====================================================
    // 2. LIVE HEADER SEARCH
    // =====================================================
    const navSearchInput = document.getElementById("navSearchInput");
    
    if (navSearchInput) {
        navSearchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const searchableItems = document.querySelectorAll(
                ".latest-project-card, .offer-card, .popular-service-card, .course-card, .tutorial-card"
            );

            searchableItems.forEach(item => {
                const textContent = item.textContent.toLowerCase();
                item.style.display = textContent.includes(query) ? "" : "none";
            });
        });
    }

    // =====================================================
    // 3. COURSES PAGE IN-SECTION SEARCH & FILTER
    // =====================================================
    const courseSearch = document.getElementById("courseSearch");
    const courseCategory = document.getElementById("courseCategory");
    const courseCards = document.querySelectorAll("#courseContainer .course-card");
    const noCoursesMessage = document.getElementById("noCoursesMessage");

    function filterCourses() {
        if (!courseCards.length) return;

        const searchQuery = courseSearch ? courseSearch.value.toLowerCase().trim() : "";
        const selectedCategory = courseCategory ? courseCategory.value : "all";
        let visibleCount = 0;

        courseCards.forEach(card => {
            const categoryData = card.getAttribute("data-category") || "";
            const cardText = card.textContent.toLowerCase();

            const matchesCategory = (selectedCategory === "all") || categoryData.includes(selectedCategory);
            const matchesSearch = cardText.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (noCoursesMessage) {
            noCoursesMessage.style.display = visibleCount === 0 ? "block" : "none";
        }
    }

    if (courseSearch) courseSearch.addEventListener("input", filterCourses);
    if (courseCategory) courseCategory.addEventListener("change", filterCourses);

    // =====================================================
    // 4. QUICK PREVIEW MODAL LOGIC
    // =====================================================
    const detailsModal = document.getElementById("detailsModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalBody = document.getElementById("modalBody");
    const modalActionBtn = document.getElementById("modalActionBtn");

    function openModal(title, category, description, link) {
        if (!detailsModal) return;
        if (modalTitle) modalTitle.textContent = title;
        if (modalCategory) modalCategory.textContent = category;
        if (modalBody) modalBody.innerHTML = `<p>${description}</p>`;
        if (modalActionBtn) modalActionBtn.setAttribute("href", link);

        detailsModal.classList.add("active");
        detailsModal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
        if (!detailsModal) return;
        detailsModal.classList.remove("active");
        detailsModal.setAttribute("aria-hidden", "true");
    }

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (detailsModal) {
        detailsModal.addEventListener("click", (e) => {
            if (e.target === detailsModal) closeModal();
        });
    }

    // Attach quick preview click handlers to cards
    document.querySelectorAll(".latest-project-card, .offer-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.tagName !== "A" && e.target.tagName !== "BUTTON") {
                const title = card.querySelector("h3") ? card.querySelector("h3").innerText : "Overview";
                const category = card.getAttribute("data-category") || "TECH HUB";
                const description = card.querySelector("p") ? card.querySelector("p").innerText : "Explore more details about this section.";
                const link = card.querySelector("a") ? card.querySelector("a").getAttribute("href") : "#";

                openModal(title, category.toUpperCase(), description, link);
            }
        });
    });

    // =====================================================
    // 5. MOBILE MENU TOGGLE
    // =====================================================
    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (menuButton && mainNav) {
        menuButton.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }
});
   
