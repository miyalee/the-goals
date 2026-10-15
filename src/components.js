import { CITIES, OCCUPATIONS, MEMBERS, MEMBER_TAGS, STEPS } from "./data.js";
import { CHARTS, AVATARS, ICONS } from "./assets.js";

function occupationLabel(id) {
    return OCCUPATIONS.find((occupation) => occupation.id === id).label;
}

function renderAvatar(memberId, className) {
    return `<img class="avatar ${className}" src="${AVATARS[memberId]}" alt="" />`;
}

function renderHeader() {
    return `
        <header class="app-header">
            <div class="app-header__inner">
                <button class="brand" type="button" data-action="go-setup" aria-label="The Goals, back to analysis setup">
                    <span class="brand__mark"><img src="${ICONS.logo}" alt="" /></span>
                    <strong class="brand__name">The Goals</strong>
                </button>

                <div class="user-chip">
                    ${renderAvatar("maya", "avatar--29")}
                    <span class="user-chip__name">Maya</span>
                </div>
            </div>
        </header>
    `;
}

function renderSectionTitle(number, text) {
    return `
        <h2 class="setup-section__title">
            <span class="number-badge number-badge--grey">${number}</span>
            ${text}
        </h2>
    `;
}

function renderMemberCard(member) {
    const tagCount = member.isYou && !member.hasPartner ? 4 : 2;
    const tags = MEMBER_TAGS.slice(0, tagCount).map((tag) => `<span class="member-tag">${tag}</span>`);
    const options = OCCUPATIONS.map((occupation) => {
        const selected = occupation.id === member.occupation ? "selected" : "";

        return `<option value="${occupation.id}" ${selected}>${occupation.label}</option>`;
    });

    let removeButton = "";
    if (!member.isYou) {
        removeButton = `
            <button class="icon-button member-card__remove" type="button" data-action="remove-member" aria-label="Remove ${member.name}">
                <img src="${ICONS.close}" alt="" />
            </button>
        `;
    }

    return `
        <section class="member-card" aria-label="${member.name}">
            <div class="member-card__identity">
                ${renderAvatar(member.id, "avatar--46")}
                <div class="member-card__text">
                    <div class="member-card__name-row">
                        <h3 class="member-card__name">${member.name}</h3>
                        ${member.isYou ? `<span class="member-card__you">You</span>` : ""}
                    </div>
                    <div class="member-card__tags">${tags.join("")}</div>
                </div>
                ${removeButton}
            </div>

            <label class="field-label" for="occupation-${member.id}">Occupation</label>
            <div class="select">
                <select id="occupation-${member.id}" data-member-occupation="${member.id}">${options.join("")}</select>
                <img class="select__chevron" src="${ICONS.chevronDown}" alt="" />
            </div>
        </section>
    `;
}

function renderAddMemberCard(state) {
    const isFull = state.members.length === Object.keys(MEMBERS).length;

    return `
        <button class="add-member-card ${isFull ? "is-full" : ""}" type="button" data-action="add-member" ${isFull ? `aria-disabled="true" title="This demo supports up to two members"` : ""}>
            <span class="add-member-card__icon"><img src="${ICONS.plus}" alt="" /></span>
            <strong class="add-member-card__text">Add Another Member<br />to this analysis</strong>
        </button>
    `;
}

function renderCityOption(city, state) {
    const checked = state.cities.includes(city) ? "checked" : "";

    return `
        <label class="city-option">
            <input class="city-option__input" type="checkbox" data-city="${city}" ${checked} />
            <span class="city-option__box"><img src="${ICONS.checkboxCheck}" alt="" /></span>
            <span class="city-option__name">${city}</span>
        </label>
    `;
}

export function renderSetupScreen(state) {
    const members = state.members.map((member) => {
        return renderMemberCard({ ...member, hasPartner: state.members.length > 1 });
    });
    const cities = CITIES.map((city) => renderCityOption(city, state));
    const allSelected = state.cities.length === CITIES.length;

    return `
        ${renderHeader()}
        <main class="setup">
            <div class="setup__heading">
                <h1 class="setup__title">Find the Place That Fits You Both</h1>
                <p class="setup__subtitle">The best way to navigate your Next chapter, Together</p>
            </div>

            <div class="setup__sections">
                <section class="setup-section">
                    ${renderSectionTitle(1, "Choose Your Members")}
                    <div class="member-row member-row--${state.members.length}">
                        ${members.join("")}
                        ${renderAddMemberCard(state)}
                    </div>
                </section>

                <section class="setup-section">
                    ${renderSectionTitle(2, "Choose Cities")}
                    <div class="card city-card">
                        <div class="city-card__header">
                            <h3 class="city-card__title">Cities to explore</h3>
                            <span class="city-card__count" id="city-count">${state.cities.length} selected</span>
                        </div>
                        <div class="city-grid">${cities.join("")}</div>
                    </div>
                </section>
            </div>

            <div class="setup__actions">
                <p class="setup__error" id="setup-error" role="alert"></p>
                <button class="button button--grey" type="button" data-action="toggle-cities" id="toggle-cities">
                    ${allSelected ? "Clear all" : "Select all"}
                </button>
                <button class="button button--primary" type="button" data-action="start-analysis">
                    Start analysis
                    <img src="${ICONS.arrowRight}" alt="" />
                </button>
            </div>
        </main>
    `;
}

function renderStepProgress(stepIndex) {
    const progress = stepIndex / (STEPS.length - 1);
    const items = STEPS.map((step, index) => {
        let status = "upcoming";
        let marker = index + 1;

        if (index < stepIndex) {
            status = "done";
            marker = `<img src="${ICONS.stepCheck}" alt="" />`;
        } else if (index === stepIndex) {
            status = "current";
        }

        return `
            <li class="step-progress__item is-${status}">
                <button class="step-progress__button" type="button" data-step="${index}" ${status === "current" ? `aria-current="step"` : ""}>
                    <span class="step-progress__marker">${marker}</span>
                    <span class="step-progress__label">${step.label}</span>
                </button>
            </li>
        `;
    });

    return `
        <nav class="step-progress" aria-label="Analysis steps">
            <div class="step-progress__header">
                <h2 class="step-progress__title">Your Members’ Shared Journey Is Ready</h2>
                <span class="step-progress__count">Step ${stepIndex + 1}/${STEPS.length}</span>
            </div>
            <div class="step-progress__viewport">
                <ol class="step-progress__list" style="--progress: ${progress}">${items.join("")}</ol>
            </div>
        </nav>
    `;
}

function renderHelpBadge() {
    return `<span class="help-badge" title="How this score works" aria-label="How this score works">?</span>`;
}

function renderChartPanel(step, index) {
    return `
        <section class="card chart-panel" aria-labelledby="step-title">
            <h1 class="chart-panel__title" id="step-title" tabindex="-1">
                <span class="number-badge">${index + 1}</span>
                ${step.title}
                ${step.titleHelp ? renderHelpBadge() : ""}
            </h1>
            <a class="chart-panel__zoom" href="${CHARTS[step.chart]}" target="_blank" rel="noopener" title="Open full size">
                <img class="chart-panel__image" src="${CHARTS[step.chart]}" alt="${step.chartAlt}" />
            </a>
            <p class="chart-panel__hint">Tap the chart to open it full size</p>
        </section>
    `;
}

function renderPerson(memberId, size) {
    const member = MEMBERS[memberId];

    return `
        <span class="person person--${memberId}">
            ${renderAvatar(memberId, `avatar--${size}`)}
            <strong class="person__name">${member.name}</strong>
            <span class="person__occupation">${occupationLabel(member.occupation)}</span>
        </span>
    `;
}

function renderNumberedList(items, color) {
    const rows = items.map((item, index) => {
        return `
            <li class="numbered-list__item">
                <span class="numbered-list__number numbered-list__number--${color}">${index + 1}</span>
                ${item}
            </li>
        `;
    });

    return `<ol class="numbered-list">${rows.join("")}</ol>`;
}

function renderSubheading(block) {
    const small = block.titleSmall ? ` <small>${block.titleSmall}</small>` : "";

    return `<h3 class="summary__subheading">${block.title}${small}</h3>`;
}

function renderBullet(content, dot) {
    return `
        <li class="bullets__item">
            <span class="bullets__dot bullets__dot--${dot || "grey"}"></span>
            <div class="bullets__text">${content}</div>
        </li>
    `;
}

function renderBullets(block) {
    const items = block.items.map((item) => renderBullet(item, block.dot));

    let heading = "";
    if (block.avatar) {
        heading = `
            <h3 class="bullets__heading">
                ${renderAvatar(block.avatar, "avatar--26")}
                <span>${block.heading}</span>
            </h3>
        `;
    } else if (block.heading) {
        heading = `<h3 class="bullets__heading ${block.centered ? "is-centered" : ""}">${block.heading}</h3>`;
    }

    return `
        <div class="bullets">
            ${heading}
            <ul class="bullets__list">${items.join("")}</ul>
        </div>
    `;
}

function renderCityOverview(state) {
    const count = state.cities.length;
    const all = count === CITIES.length ? "all " : "";
    const noun = count === 1 ? "candidate city" : "candidate cities";
    const tags = state.cities.map((city) => `<span class="city-tag">${city}</span>`);
    const selection = `
        <p class="bullets__lead">You've selected ${all}<strong>${count} ${noun}</strong>. Explore their locations on the map.</p>
        <div class="city-tags">${tags.join("")}</div>
    `;
    const items = [
        renderBullet(selection),
        renderBullet("Job opportunities vary by city and occupation. Let's find out where the opportunities are!"),
    ];

    return `<ul class="bullets__list bullets__list--spaced">${items.join("")}</ul>`;
}

function renderRankings(block) {
    return `
        <div class="summary__group">
            ${renderSubheading(block)}
            <div class="person-cards">
                <div class="person-card person-card--maya">
                    ${renderPerson("maya", 26)}
                    ${renderNumberedList(block.maya, "orange")}
                </div>
                <div class="person-card person-card--alex">
                    ${renderPerson("alex", 26)}
                    ${renderNumberedList(block.alex, "blue")}
                </div>
            </div>
        </div>
    `;
}

function renderTrends(block) {
    return `
        <div class="summary__group">
            ${renderSubheading(block)}
            <div class="person-cards">
                <div class="person-card person-card--maya person-card--trend">
                    ${renderPerson("maya", 26)}
                    <div class="trend trend--up">
                        <img src="${ICONS.trendUp}" alt="Rising" />
                        <span>Job Demand</span>
                    </div>
                </div>
                <div class="person-card person-card--alex person-card--trend">
                    ${renderPerson("alex", 26)}
                    <div class="trend trend--down">
                        <img src="${ICONS.trendDown}" alt="Falling" />
                        <span>Job Demand</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCouple(size) {
    return `
        <div class="couple">
            ${renderPerson("maya", size)}
            <span class="couple__and">&amp;</span>
            ${renderPerson("alex", size)}
        </div>
    `;
}

function renderHousehold(block) {
    return `
        <div class="summary__group">
            <h3 class="summary__subheading">${block.title} ${renderHelpBadge()}</h3>
            <div class="household-card">
                ${renderCouple(26)}
                <div class="household-card__ranks">${renderNumberedList(block.ranks, "purple")}</div>
            </div>
        </div>
    `;
}

function renderFinalists(block) {
    return `
        <div class="summary__group">
            <h3 class="summary__subheading">${block.title} ${renderHelpBadge()}</h3>
            <div class="household-card household-card--centered">
                ${renderCouple(26)}
                <div class="finalists">
                    <img class="finalists__pie" src="${ICONS.finalistsPie}" alt="Brisbane led seven of ten scenarios, Sydney three." />
                    <ol class="numbered-list">
                        <li class="numbered-list__item"><span class="numbered-list__number numbered-list__number--purple">1</span>Brisbane</li>
                        <li class="numbered-list__item"><span class="numbered-list__number numbered-list__number--lilac">2</span>Sydney</li>
                    </ol>
                </div>
            </div>
        </div>
    `;
}

function renderThanks(block) {
    return `
        <div class="thanks">
            <p class="thanks__line">Thank you,</p>
            <p class="thanks__members">
                ${renderPerson("maya", 23)}
                <span>and</span>
                ${renderPerson("alex", 23)}
            </p>
            <p class="thanks__result"><strong>${block.city}</strong> is your starting point!</p>
        </div>
    `;
}

function renderMedals(block) {
    const medals = [ICONS.medalFirst, ICONS.medalSecond, ICONS.medalThird];
    const rows = block.ranks.map((rank, index) => {
        return `
            <li class="medals__item ${index === 0 ? "is-first" : ""}">
                <img src="${medals[index]}" alt="Rank ${index + 1}" />
                ${rank}
            </li>
        `;
    });

    return `<ol class="household-card medals">${rows.join("")}</ol>`;
}

function renderSummaryBlock(block, state) {
    switch (block.type) {
        case "cityOverview":
            return renderCityOverview(state);
        case "rankings":
            return renderRankings(block);
        case "trends":
            return renderTrends(block);
        case "household":
            return renderHousehold(block);
        case "finalists":
            return renderFinalists(block);
        case "thanks":
            return renderThanks(block);
        case "medals":
            return renderMedals(block);
        default:
            return renderBullets(block);
    }
}

function renderSummaryPanel(step, state) {
    const blocks = step.summary.map((block) => renderSummaryBlock(block, state));
    const chips = step.chips.map((chip) => `<button class="prompt-chip" type="button">${chip}</button>`);

    return `
        <div class="side-column">
            <aside class="card summary ${step.highlight ? "summary--highlight" : ""}" aria-label="Quick Summary">
                <h2 class="summary__title">
                    <img src="${ICONS.summaryBadge}" alt="" />
                    Quick Summary
                </h2>
                ${blocks.join("")}
            </aside>

            <div class="assistant">
                <div class="assistant__chips">${chips.join("")}</div>
                <form class="assistant__form" data-action="ask-assistant">
                    <img class="assistant__sparkle" src="${ICONS.sparkle}" alt="" />
                    <input class="assistant__input" type="text" placeholder="Ask Our AI Assistant" aria-label="Ask Our AI Assistant" />
                    <button class="assistant__send" type="submit" aria-label="Send">
                        <img src="${ICONS.sendButton}" alt="" />
                    </button>
                </form>
            </div>
        </div>
    `;
}

function renderFooter(stepIndex) {
    const isLast = stepIndex === STEPS.length - 1;

    let upNext = "";
    if (!isLast) {
        upNext = `
            <p class="footer__up-next">
                <span>Up next</span>
                <strong>${STEPS[stepIndex + 1].label}</strong>
            </p>
        `;
    }

    return `
        <footer class="app-footer">
            <button class="button button--grey" type="button" data-action="previous-step">
                <img src="${ICONS.arrowLeft}" alt="" />
                Previous
            </button>

            <div class="app-footer__next">
                ${upNext}
                <button class="button button--primary ${isLast ? "" : "button--next"}" type="button" data-action="${isLast ? "export-report" : "next-step"}">
                    ${isLast ? "Export Final Report" : "Next"}
                    <img src="${ICONS.arrowRight}" alt="" />
                </button>
            </div>
        </footer>
    `;
}

export function renderAnalysisScreen(state) {
    const step = STEPS[state.stepIndex];

    return `
        ${renderHeader()}
        <main class="analysis">
            ${renderStepProgress(state.stepIndex)}
            <div class="analysis__layout">
                ${renderChartPanel(step, state.stepIndex)}
                ${renderSummaryPanel(step, state)}
            </div>
        </main>
        ${renderFooter(state.stepIndex)}
    `;
}
