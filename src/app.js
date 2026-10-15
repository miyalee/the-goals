import "./styles.css";
import { CITIES, MEMBERS, STEPS } from "./data.js";
import { renderSetupScreen, renderAnalysisScreen } from "./components.js";

const appRoot = document.getElementById("app-root");

const state = {
    screen: "setup", // "setup", "analysis"
    stepIndex: 0,
    members: [{ ...MEMBERS.maya }],
    cities: [...CITIES],
};

function render() {
    if (state.screen === "setup") {
        appRoot.innerHTML = renderSetupScreen(state);
        document.title = "The Goals · Choose your members";
    } else {
        appRoot.innerHTML = renderAnalysisScreen(state);
        document.title = `${STEPS[state.stepIndex].label} · The Goals`;
    }
}

function currentRoute() {
    if (state.screen === "setup") {
        return "#/setup";
    }

    return `#/analysis/${STEPS[state.stepIndex].id}`;
}

// Each screen gets its own history entry, so the browser back button works
function saveRoute() {
    const route = currentRoute();

    if (route === window.location.hash) {
        window.history.replaceState(null, "", route);
    } else {
        window.history.pushState(null, "", route);
    }
}

function showStep(index) {
    state.screen = "analysis";
    state.stepIndex = Math.max(0, Math.min(STEPS.length - 1, index));

    render();
    saveRoute();
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("step-title").focus({ preventScroll: true });
    scrollCurrentStepIntoView();
}

function showSetup() {
    state.screen = "setup";

    render();
    saveRoute();
    window.scrollTo({ top: 0, behavior: "instant" });
}

// On narrow screens the step bar scrolls sideways, keep the current step visible
function scrollCurrentStepIntoView() {
    const current = appRoot.querySelector(".step-progress__item.is-current");

    current.scrollIntoView({ block: "nearest", inline: "center" });
}

function updateCityCount() {
    document.getElementById("city-count").textContent = `${state.cities.length} selected`;
    document.getElementById("toggle-cities").textContent = state.cities.length === CITIES.length ? "Clear all" : "Select all";
    document.getElementById("setup-error").textContent = "";
}

appRoot.addEventListener("click", (event) => {
    const stepButton = event.target.closest("[data-step]");
    if (stepButton) {
        showStep(Number(stepButton.dataset.step));
        return;
    }

    const button = event.target.closest("button[data-action]");
    if (!button) {
        return;
    }

    switch (button.dataset.action) {
        case "go-setup":
            showSetup();
            break;
        case "add-member":
            if (state.members.length === 1) {
                state.members.push({ ...MEMBERS.alex });
                render();
            }
            break;
        case "remove-member":
            state.members = [state.members[0]];
            render();
            break;
        case "toggle-cities":
            state.cities = state.cities.length === CITIES.length ? [] : [...CITIES];
            render();
            break;
        case "start-analysis":
            if (state.cities.length === 0) {
                document.getElementById("setup-error").textContent = "Choose at least one city to begin.";
                return;
            }
            showStep(0);
            break;
        case "previous-step":
            if (state.stepIndex === 0) {
                showSetup();
            } else {
                showStep(state.stepIndex - 1);
            }
            break;
        case "next-step":
            showStep(state.stepIndex + 1);
            break;
    }
});

appRoot.addEventListener("change", (event) => {
    const input = event.target;

    if (input.dataset.memberOccupation) {
        const member = state.members.find((person) => person.id === input.dataset.memberOccupation);
        member.occupation = input.value;
    }

    if (input.dataset.city) {
        // Keep the original city order, whatever order they are ticked in
        state.cities = CITIES.filter((city) => {
            if (city === input.dataset.city) {
                return input.checked;
            }

            return state.cities.includes(city);
        });
        updateCityCount();
    }
});

// The AI assistant is a visual demo, so the form does nothing yet
appRoot.addEventListener("submit", (event) => {
    event.preventDefault();
});

function showRouteFromUrl() {
    const stepId = window.location.hash.replace("#/analysis/", "");
    const index = STEPS.findIndex((step) => step.id === stepId);

    if (index >= 0) {
        state.screen = "analysis";
        state.stepIndex = index;
    } else {
        state.screen = "setup";
    }

    render();
}

window.addEventListener("popstate", showRouteFromUrl);

// A direct link to an analysis page starts with both members, like the design
if (window.location.hash.startsWith("#/analysis/")) {
    state.members.push({ ...MEMBERS.alex });
}

showRouteFromUrl();
window.history.replaceState(null, "", currentRoute());
