"use strict";

/* =========================================
   BUILDTRACK CONSTRUCTION
   JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP CONFIGURATION
========================================= */

const WHATSAPP_NUMBER = "2348145582190";


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navbar.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================
   WHATSAPP FUNCTION
========================================= */

function openWhatsApp(message) {

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =========================================
   NAIRA FORMAT
========================================= */

function formatNaira(amount) {

    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    }).format(amount);

}


/* =========================================
   PROJECT PRICING
========================================= */

const pricing = {

    residential: {
        basic: 250000,
        standard: 350000,
        premium: 500000
    },

    commercial: {
        basic: 300000,
        standard: 400000,
        premium: 550000
    },

    renovation: {
        basic: 150000,
        standard: 225000,
        premium: 300000
    },

    finishing: {
        basic: 100000,
        standard: 175000,
        premium: 250000
    }

};


/* =========================================
   PROJECT ESTIMATOR
========================================= */

const estimatorForm =
    document.getElementById("estimatorForm");

const estimateResult =
    document.getElementById("estimateResult");

const estimateAmount =
    document.getElementById("estimateAmount");


if (
    estimatorForm &&
    estimateResult &&
    estimateAmount
) {

    estimatorForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form values */

            const projectType =
                document.getElementById(
                    "projectType"
                ).value;

            const propertySize =
                Number(
                    document.getElementById(
                        "propertySize"
                    ).value
                );

            const finishingLevel =
                document.getElementById(
                    "finishingLevel"
                ).value;

            const location =
                document.getElementById(
                    "location"
                ).value.trim();

            const phone =
                document.getElementById(
                    "estimatePhone"
                ).value.trim();


            /* Validate */

            if (
                projectType === "" ||
                propertySize <= 0 ||
                finishingLevel === "" ||
                location === "" ||
                phone === ""
            ) {

                alert(
                    "Please complete all estimator fields."
                );

                return;

            }


            /* Get price */

            const pricePerSquareMeter =
                pricing[projectType][finishingLevel];


            if (!pricePerSquareMeter) {

                alert(
                    "Unable to calculate the estimate."
                );

                return;

            }


            /* Calculate */

            const estimatedCost =
                propertySize *
                pricePerSquareMeter;


            /* Display estimate */

            estimateAmount.textContent =
                formatNaira(estimatedCost);


            estimateResult.hidden = false;


            /* Create WhatsApp button if it does not exist */

            let whatsappButton =
                document.getElementById(
                    "estimateWhatsAppButton"
                );


            if (!whatsappButton) {

                whatsappButton =
                    document.createElement("button");

                whatsappButton.type = "button";

                whatsappButton.id =
                    "estimateWhatsAppButton";

                whatsappButton.className =
                    "btn btn-primary";

                whatsappButton.textContent =
                    "Send Estimate to WhatsApp";


                estimateResult.appendChild(
                    whatsappButton
                );

            }


            /* WhatsApp action */

            whatsappButton.onclick =
                function () {

                    const message =
                        "BUILDTRACK CONSTRUCTION\n\n" +

                        "PROJECT ESTIMATE REQUEST\n" +
                        "------------------------\n\n" +

                        "Project Type: " +
                        projectType +
                        "\n" +

                        "Property Size: " +
                        propertySize +
                        " sqm\n" +

                        "Finishing Level: " +
                        finishingLevel +
                        "\n" +

                        "Project Location: " +
                        location +
                        "\n" +

                        "Customer Phone: " +
                        phone +
                        "\n\n" +

                        "Preliminary Estimate: " +
                        formatNaira(
                            estimatedCost
                        ) +
                        "\n\n" +

                        "I would like to discuss this project " +
                        "and get a detailed quotation.";


                    openWhatsApp(message);

                };

        }
    );

}


/* =========================================
   QUOTE REQUEST FORM
========================================= */

const quoteForm =
    document.getElementById("quoteForm");


if (quoteForm) {

    quoteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form fields */

            const clientName =
                document.getElementById(
                    "clientName"
                ).value.trim();

            const clientPhone =
                document.getElementById(
                    "clientPhone"
                ).value.trim();

            const clientEmail =
                document.getElementById(
                    "clientEmail"
                ).value.trim();

            const projectType =
                document.getElementById(
                    "quoteProjectType"
                ).value;

            const projectLocation =
                document.getElementById(
                    "projectLocation"
                ).value.trim();

            const budget =
                document.getElementById(
                    "budget"
                ).value;

            const preferredStartDate =
                document.getElementById(
                    "preferredStartDate"
                ).value;

            const preferredContact =
                document.getElementById(
                    "preferredContact"
                ).value;

            const projectDescription =
                document.getElementById(
                    "projectDescription"
                ).value.trim();


            /* Validate */

            if (
                clientName === "" ||
                clientPhone === "" ||
                clientEmail === "" ||
                projectType === "" ||
                projectLocation === "" ||
                budget === "" ||
                projectDescription === ""
            ) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            /* Build WhatsApp message */

            const message =
                "BUILDTRACK CONSTRUCTION\n\n" +

                "NEW PROJECT REQUEST\n" +
                "--------------------\n\n" +

                "CUSTOMER DETAILS\n" +
                "-----------------\n" +

                "Name: " +
                clientName +
                "\n" +

                "Phone / WhatsApp: " +
                clientPhone +
                "\n" +

                "Email: " +
                clientEmail +
                "\n\n" +

                "PROJECT DETAILS\n" +
                "----------------\n" +

                "Project Type: " +
                projectType +
                "\n" +

                "Project Location: " +
                projectLocation +
                "\n" +

                "Estimated Budget: " +
                budget +
                "\n" +

                "Preferred Start Date: " +
                (
                    preferredStartDate ||
                    "Not specified"
                ) +
                "\n" +

                "Preferred Contact Method: " +
                preferredContact +
                "\n\n" +

                "PROJECT DESCRIPTION\n" +
                "-------------------\n" +

                projectDescription +
                "\n\n" +

                "Please contact me regarding this project.";


            /* Open WhatsApp */

            openWhatsApp(message);

        }
    );

}


/* =========================================
   SET MINIMUM START DATE
========================================= */

const preferredStartDate =
    document.getElementById(
        "preferredStartDate"
    );


if (preferredStartDate) {

    const today =
        new Date()
            .toISOString()
            .split("T")[0];

    preferredStartDate.min = today;

}


/* =========================================
   SMOOTH SCROLLING
========================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================
   PAGE LOADED
========================================= */

console.log(
    "BuildTrack Construction JavaScript loaded successfully."
);