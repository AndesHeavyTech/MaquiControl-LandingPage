const translations = {
    en: {
        home: "Home",
        benefits: "Benefits",
        howItWorks: "How it works",
        about: "About us",

        openPlatform: "Open platform",

        heroTitle: "Rent and manage machinery with greater control.",
        heroText:
            "Clear availability, organized rentals and maintenance tracking to reduce friction in every operation.",

        manageFleet: "Manage my fleet",
        findMachinery: "Find machinery",

        heroCaption:
            "For owners, administrators, contractors and site managers.",

        equipmentAvailable: "● Equipment available",

        benefitsTitle:
            "Everything you need to reduce manual coordination",

        benefitsText:
            "A simple experience that keeps critical information available when operations demand it.",

        availabilityTitle: "Real availability",
        availabilityText:
            "Check equipment status before confirming a rental.",

        rentalsTitle: "Organized rentals",
        rentalsText:
            "Avoid date conflicts and keep every rental organized.",

        maintenanceTitle: "Visible maintenance",
        maintenanceText:
            "Identify equipment under maintenance and track incidents clearly.",

        usageTitle: "Usage-hour control",
        usageText:
            "Centralize usage data to simplify tracking and reconciliation.",

        segmentsTitle: "One platform, two different needs",
        segmentsText:
            "Each segment gets a direct path to what it needs.",

        ownersTitle: "Owners and administrators",
        ownersText:
            "Manage fleet availability, rentals, maintenance and operating costs.",

        contractorsTitle: "Contractors and site managers",
        contractorsText:
            "Find available equipment and coordinate rentals with clear information.",

        howTitle: "How it works",
        howText:
            "Three steps to move from scattered coordination to a clearer process.",

        checkTitle: "Check",
        checkText: "Review equipment, status and availability.",

        coordinateTitle: "Coordinate",
        coordinateText: "Set dates, conditions and rental details.",

        trackTitle: "Track",
        trackText: "Track usage, incidents and service completion.",

        valueTitle: "Fewer scattered messages. More traceability.",

        valueText:
            "Centralize critical operational information and reduce uncertainty before, during and after every rental.",

        finalTitle:
            "Start with the profile that best matches your needs",

        finalText:
            "Each segment CTA connects to its corresponding Web Application view.",

        footerText:
            "Heavy machinery management and rental."
    },

    es: {
        home: "Inicio",
        benefits: "Beneficios",
        howItWorks: "Cómo funciona",
        about: "Nosotros",

        openPlatform: "Ir a la plataforma",

        heroTitle: "Alquila y gestiona maquinaria con más control.",

        heroText:
            "Disponibilidad clara, reservas ordenadas y seguimiento de mantenimiento para reducir fricción en cada operación.",

        manageFleet: "Gestionar mi flota",
        findMachinery: "Buscar maquinaria",

        heroCaption:
            "Para propietarios, administradores, contratistas y responsables de obra.",

        equipmentAvailable: "● Equipo disponible",

        benefitsTitle:
            "Todo lo que necesitas para reducir la coordinación manual",

        benefitsText:
            "Una experiencia simple para tener información clave disponible cuando la operación lo exige.",

        availabilityTitle: "Disponibilidad real",
        availabilityText:
            "Consulta el estado de los equipos antes de confirmar una reserva.",

        rentalsTitle: "Reservas ordenadas",
        rentalsText:
            "Evita cruces de fechas y conserva el contexto de cada alquiler.",

        maintenanceTitle: "Mantenimiento visible",
        maintenanceText:
            "Identifica equipos en revisión y registra incidencias con mayor claridad.",

        usageTitle: "Control de horas",
        usageText:
            "Centraliza datos de uso para facilitar seguimiento y conciliación.",

        segmentsTitle: "Una plataforma, dos necesidades distintas",
        segmentsText:
            "Cada segmento encuentra un camino directo hacia lo que necesita.",

        ownersTitle: "Propietarios y administradores",
        ownersText:
            "Gestiona disponibilidad, reservas, mantenimiento y costos de tu flota.",

        contractorsTitle: "Contratistas y responsables de obra",
        contractorsText:
            "Encuentra equipos disponibles y coordina alquileres con información clara.",

        howTitle: "Cómo funciona",
        howText:
            "Tres pasos para pasar de una coordinación dispersa a un proceso más claro.",

        checkTitle: "Consulta",
        checkText: "Revisa equipos, estado y disponibilidad.",

        coordinateTitle: "Coordina",
        coordinateText:
            "Define fechas, condiciones y detalles del alquiler.",

        trackTitle: "Controla",
        trackText:
            "Da seguimiento al uso, incidencias y cierre del servicio.",

        valueTitle:
            "Menos mensajes dispersos. Más trazabilidad.",

        valueText:
            "Concentra la información crítica de la operación y reduce la incertidumbre antes, durante y después de cada alquiler.",

        finalTitle:
            "Empieza por el perfil que mejor representa tu necesidad",

        finalText:
            "Los CTA de cada segmento conectarán con la vista correspondiente de la Web Application.",

        footerText:
            "Gestión y alquiler de maquinaria pesada."
    }
};

const languageButton = document.querySelector(".language-button");

let currentLanguage = "en";

function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;

    const text = translations[language];

    document.querySelector('a[href="#hero"]:not(.brand)').textContent = text.home;
    document.querySelector('a[href="#benefits"]').textContent = text.benefits;
    document.querySelector('a[href="#how-it-works"]').textContent = text.howItWorks;
    document.querySelector('a[href="#about"]').textContent = text.about;

    document.querySelector(".nav-actions .button").textContent =
        text.openPlatform;

    document.querySelector(".hero h1").textContent = text.heroTitle;
    document.querySelector(".hero-content > p").textContent = text.heroText;

    const heroButtons = document.querySelectorAll(".hero-actions .button");
    heroButtons[0].textContent = text.manageFleet;
    heroButtons[1].textContent = text.findMachinery;

    document.querySelector(".hero-caption").textContent = text.heroCaption;

    document.querySelector(".status-chip").textContent =
        text.equipmentAvailable;
    document.querySelector("#benefits .section-heading h2").textContent =
        text.benefitsTitle;

    document.querySelector("#benefits .section-heading p").textContent =
        text.benefitsText;

    const benefitCards = document.querySelectorAll(".benefit-card");

    benefitCards[0].querySelector("h3").textContent = text.availabilityTitle;
    benefitCards[0].querySelector("p").textContent = text.availabilityText;

    benefitCards[1].querySelector("h3").textContent = text.rentalsTitle;
    benefitCards[1].querySelector("p").textContent = text.rentalsText;

    benefitCards[2].querySelector("h3").textContent = text.maintenanceTitle;
    benefitCards[2].querySelector("p").textContent = text.maintenanceText;

    benefitCards[3].querySelector("h3").textContent = text.usageTitle;
    benefitCards[3].querySelector("p").textContent = text.usageText;

    document.querySelector("#segments .section-heading h2").textContent =
        text.segmentsTitle;

    document.querySelector("#segments .section-heading p").textContent =
        text.segmentsText;

    const segmentCards = document.querySelectorAll(".segment-card");

    segmentCards[0].querySelector("h3").textContent = text.ownersTitle;
    segmentCards[0].querySelector("p").textContent = text.ownersText;
    segmentCards[0].querySelector(".button").textContent = text.manageFleet;

    segmentCards[1].querySelector("h3").textContent = text.contractorsTitle;
    segmentCards[1].querySelector("p").textContent = text.contractorsText;
    segmentCards[1].querySelector(".button").textContent = text.findMachinery;

    document.querySelector("#how-it-works .section-heading h2").textContent =
        text.howTitle;

    document.querySelector("#how-it-works .section-heading p").textContent =
        text.howText;

    const stepCards = document.querySelectorAll(".step-card");

    stepCards[0].querySelector("h3").textContent = text.checkTitle;
    stepCards[0].querySelector("p").textContent = text.checkText;

    stepCards[1].querySelector("h3").textContent = text.coordinateTitle;
    stepCards[1].querySelector("p").textContent = text.coordinateText;

    stepCards[2].querySelector("h3").textContent = text.trackTitle;
    stepCards[2].querySelector("p").textContent = text.trackText;

    document.querySelector(".value-section h2").textContent =
        text.valueTitle;

    document.querySelector(".value-section p").textContent =
        text.valueText;

    document.querySelector(".final-cta h2").textContent =
        text.finalTitle;

    document.querySelector(".final-cta p").textContent =
        text.finalText;

    const finalButtons = document.querySelectorAll(".final-cta .button");

    finalButtons[0].textContent = text.manageFleet;
    finalButtons[1].textContent = text.findMachinery;

    document.querySelector(".site-footer div p").textContent =
        text.footerText;

    languageButton.textContent =
        language === "en" ? "EN | ES" : "ES | EN";
}

languageButton.addEventListener("click", () => {
    if (currentLanguage === "en") {
        setLanguage("es");
    } else {
        setLanguage("en");
    }
});

setLanguage("en");