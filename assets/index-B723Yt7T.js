(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Brisbane`,`Sydney`,`Melbourne`,`Perth`,`Adelaide`,`Gold Coast`,`Canberra & ACT`,`Newcastle & Hunter`],t=[{id:`nurse`,label:`Nursing`},{id:`ict`,label:`ICT`}],n={maya:{id:`maya`,name:`Maya`,occupation:`nurse`,isYou:!0},alex:{id:`alex`,name:`Alex`,occupation:`ict`,isYou:!1}},r=[`#Information`,`#Information`,`#Information`,`#Information`],i=[`Brisbane 54.5`,`Sydney 53.4`,`Adelaide 47.4`],a=[{id:`candidate-cities`,label:`Candidate cities`,title:`Candidate cities around Australia`,chart:`candidateCities`,chartAlt:`Map of Australia marking the eight candidate cities.`,chips:[`Geographic differences between cities`,`A different map style`,`Explore More`],summary:[{type:`cityOverview`}]},{id:`job-market`,label:`Job market`,title:`Job market: Nurse and ICT`,chart:`jobMarket`,chartAlt:`Treemaps of each city's share of nursing and ICT job demand, coloured by average growth.`,chips:[`Details about this analysis`,`A different data style`,`Explore More`],summary:[{type:`rankings`,title:`Top Job Markets 2015~2025`,maya:[`Melbourne`,`Sydney`,`Brisbane`,`Others`],alex:[`Sydney`,`Melbourne`,`Brisbane`,`Others`]},{type:`bullets`,avatar:`maya`,heading:`More freedom to move!`,items:[`You can consider a wider range of places without relying on one dominant market.`,`Melbourne and Sydney together account for 48.22%.`]},{type:`bullets`,avatar:`alex`,heading:`Concentrated in Major Markets`,items:[`ICT demand is heavily concentrated in top cities, with Sydney and Melbourne accounting for over 62% of the market.`,`Moving away from big cities means you have to weigh smaller job markets against your own strengths.`]}]},{id:`demand-trends`,label:`Demand trends`,title:`Demand trends: ICT and Nurse Jobs Demand Trends 2015~2025`,chart:`demandTrends`,chartAlt:`Line charts of nursing and ICT job demand by city from 2015 to 2025.`,chips:[`Details about this analysis`,`Explore More`],summary:[{type:`rankings`,title:`Top Regional Job Markets`,titleSmall:`2015~2025`,maya:[`Melbourne`,`Sydney`,`Brisbane`,`Others`],alex:[`Sydney`,`Melbourne`,`Brisbane`,`Others`]},{type:`bullets`,heading:`Big cities keep the crown,<br />but smaller markets quietly rise.`,centered:!0,items:[`ICT and nursing jobs grew differently from 2015 to 2025, with big cities taking up most of the chart.`,`A big city can still have a large market even if its demand is dropping.`,`A smaller market can grow steadily without looking huge on the chart.`]}]},{id:`job-history`,label:`History of job market`,title:`History of Job market : Nurse and ICT`,chart:`jobHistory`,chartAlt:`Heatmaps of the monthly demand index for nursing and ICT by city, 2019 to 2026.`,chips:[`Details about this analysis`,`Explore More`],summary:[{type:`trends`,title:`Changes in Job Demand`,titleSmall:`(2019–2025)`},{type:`bullets`,avatar:`maya`,heading:`Growth Across All Markets`,items:[`Compared to 2019, nursing demand has increased across all examined cities.`,`In particular, demand in Brisbane is 54.6% higher than its baseline.`]},{type:`bullets`,avatar:`alex`,heading:`Bigger size doesn't equal better resilience`,items:[`While giant tech hubs like Sydney and Melbourne dropped to the 54s, smaller markets like Brisbane and Perth held strong in the upper 60s.`,`Even though its market is smaller, Brisbane saw a smaller drop than Sydney.`]}]},{id:`job-stability`,label:`Job stability`,title:`Job Stability : Nurse and ICT`,chart:`jobStability`,chartAlt:`Scatter plot of job growth against stability score for each city, for nursing and ICT.`,chips:[`Details about this analysis`,`Explore More`],summary:[{type:`rankings`,title:`Job Stability Ranking`,maya:[`Brisbane`,`Sydney`,`Melbourne`,`Perth`],alex:[`Canberra & ACT`,`Brisbane`,`Perth`,`Melbourne`]},{type:`bullets`,avatar:`maya`,heading:`The fastest growing market is not always the steadiest`,items:[`Adelaide, the fastest growing nursing market, scored 36.1 in stability, while Brisbane, the third fastest growing, scored 100.`,`Brisbane offers a useful balance for a move that values security.`]},{type:`bullets`,avatar:`alex`,heading:`The fastest growing market is not always the steadiest`,items:[`Brisbane saw a 32.6% drop from 2019 with an 82.8 stability score, while Sydney dropped 45.5% with a 59.7 score.`,`Brisbane offers greater consistency, whereas Sydney has a much larger market.`]}]},{id:`career-match-1`,label:`Career match 1`,title:`Career match 1 : Nurse and ICT`,chart:`careerMatch1`,chartAlt:`Scatter plot of nurse stability against ICT stability, sized by household weak-link score.`,chips:[`Details about this analysis`,`Explore More`],summary:[{type:`household`,title:`Career Match Score`,ranks:i},{type:`bullets`,heading:`Peace of Mind vs Big Markets`,centered:!0,items:[`Brisbane scored 54.5 and Sydney scored 53.4.`,`The numbers are tied, so it all comes down to your top priority, stability or scale.`]}]},{id:`career-match-2`,label:`Career match 2`,title:`Career match 2 : Nurse and ICT`,chart:`careerMatch2`,chartAlt:`Heatmaps of market size, growth and stability for nursing and ICT, combined into a final score per city.`,chips:[`Details about this analysis`,`Explore More`],summary:[{type:`household`,title:`Career Match Score`,ranks:i},{type:`bullets`,heading:`Sydney's Scale or Brisbane's Strength`,centered:!0,items:[`Sydney: Huge job markets for both ICT and Nursing, but the ICT sector can be unstable during downturns.`,`Brisbane: Smaller job markets for both fields, but exceptionally resilient and stable across both ICT and Nursing.`]}]},{id:`compare-finalists`,label:`Compare finalists`,title:`Compare finalists : Brisbane and Sydney`,titleHelp:!0,chart:`compareFinalists`,chartAlt:`Bar chart of Brisbane's margin over Sydney across ten scenarios, S0 to S9.`,chips:[`Details about this analysis`,`Explore More`],summary:[{type:`finalists`,title:`Compare finalists`},{type:`bullets`,heading:`Sydney's Scale or Brisbane's Strength`,centered:!0,items:[`Out of ten scenarios, Brisbane led in seven and Sydney led in three.`,`Brisbane’s strength lies in its consistency across reasonable assumptions.`,`Sydney remains a strong choice, especially when market size matters most.`]}]},{id:`recommendation`,label:`Final Recommendation`,title:`Final Recommendation`,chart:`recommendation`,chartAlt:`Map of Australia with a column per city showing combined job demand and score; Brisbane is highlighted.`,chips:[`Details about this analysis`,`Explore More`],highlight:!0,summary:[{type:`thanks`,city:`Brisbane`},{type:`medals`,ranks:i},{type:`bullets`,dot:`purple`,items:[`Brisbane leads the baseline Nursing, ICT household analysis with a score of 54.5. Sydney remains close at 53.4.`,`It balances nursing security with ICT opportunities, offering a shared starting point.`]}]}],o={candidateCities:new URL(new URL(`candidate-cities-map-CxhBZ91X.png`,import.meta.url).href,``+import.meta.url).href,jobMarket:new URL(new URL(`job-market-treemaps-Di2Q0OHC.png`,import.meta.url).href,``+import.meta.url).href,demandTrends:new URL(new URL(`demand-trends-Cp7xpHpO.png`,import.meta.url).href,``+import.meta.url).href,jobHistory:new URL(new URL(`job-market-history-CeQaY1eQ.png`,import.meta.url).href,``+import.meta.url).href,jobStability:new URL(new URL(`job-stability-Tb4YPNKB.png`,import.meta.url).href,``+import.meta.url).href,careerMatch1:new URL(new URL(`career-match-scatter-BP_dMUD_.png`,import.meta.url).href,``+import.meta.url).href,careerMatch2:new URL(new URL(`career-match-scores-CS9WZA1h.png`,import.meta.url).href,``+import.meta.url).href,compareFinalists:new URL(new URL(`compare-finalists-DRI1YEy_.png`,import.meta.url).href,``+import.meta.url).href,recommendation:new URL(new URL(`final-recommendation-map-C6M79POX.png`,import.meta.url).href,``+import.meta.url).href},s={maya:new URL(new URL(`maya-BhdqQLzq.jpg`,import.meta.url).href,``+import.meta.url).href,alex:new URL(new URL(`alex-vxVGJHyY.jpg`,import.meta.url).href,``+import.meta.url).href},c={logo:new URL(new URL(`logo-CY2lJxIz.svg`,import.meta.url).href,``+import.meta.url).href,chevronDown:new URL(new URL(`chevron-down-azunaSbx.svg`,import.meta.url).href,``+import.meta.url).href,close:new URL(new URL(`close-BUBE7jbK.svg`,import.meta.url).href,``+import.meta.url).href,plus:new URL(new URL(`plus-DZnGSj7U.svg`,import.meta.url).href,``+import.meta.url).href,checkboxCheck:new URL(new URL(`checkbox-check-CaaQbbUr.svg`,import.meta.url).href,``+import.meta.url).href,stepCheck:new URL(new URL(`step-check-B84rO-0M.svg`,import.meta.url).href,``+import.meta.url).href,summaryBadge:new URL(new URL(`summary-badge-CXRGbfIJ.svg`,import.meta.url).href,``+import.meta.url).href,sparkle:new URL(new URL(`sparkle-BQer-a8v.svg`,import.meta.url).href,``+import.meta.url).href,sendButton:new URL(new URL(`send-button-CUeCJJ76.svg`,import.meta.url).href,``+import.meta.url).href,arrowRight:new URL(new URL(`arrow-right-BW023b16.svg`,import.meta.url).href,``+import.meta.url).href,arrowLeft:new URL(new URL(`arrow-left-Cyv5Tjjb.svg`,import.meta.url).href,``+import.meta.url).href,trendUp:new URL(new URL(`trend-up-YHo6Yx0Y.svg`,import.meta.url).href,``+import.meta.url).href,trendDown:new URL(new URL(`trend-down-C6OOvTtF.svg`,import.meta.url).href,``+import.meta.url).href,finalistsPie:new URL(new URL(`finalists-pie-Cip0DjGW.svg`,import.meta.url).href,``+import.meta.url).href,medalFirst:new URL(new URL(`medal-first-ByEdiUJv.svg`,import.meta.url).href,``+import.meta.url).href,medalSecond:new URL(new URL(`medal-second-2kPbJCev.svg`,import.meta.url).href,``+import.meta.url).href,medalThird:new URL(new URL(`medal-third-B5lAKPZK.svg`,import.meta.url).href,``+import.meta.url).href};function l(e){return t.find(t=>t.id===e).label}function u(e,t){return`<img class="avatar ${t}" src="${s[e]}" alt="" />`}function d(){return`
        <header class="app-header">
            <div class="app-header__inner">
                <button class="brand" type="button" data-action="go-setup" aria-label="The Goals, back to analysis setup">
                    <span class="brand__mark"><img src="${c.logo}" alt="" /></span>
                    <strong class="brand__name">The Goals</strong>
                </button>

                <div class="user-chip">
                    ${u(`maya`,`avatar--29`)}
                    <span class="user-chip__name">Maya</span>
                </div>
            </div>
        </header>
    `}function f(e,t){return`
        <h2 class="setup-section__title">
            <span class="number-badge number-badge--grey">${e}</span>
            ${t}
        </h2>
    `}function p(e){let n=e.isYou&&!e.hasPartner?4:2,i=r.slice(0,n).map(e=>`<span class="member-tag">${e}</span>`),a=t.map(t=>{let n=t.id===e.occupation?`selected`:``;return`<option value="${t.id}" ${n}>${t.label}</option>`}),o=``;return e.isYou||(o=`
            <button class="icon-button member-card__remove" type="button" data-action="remove-member" aria-label="Remove ${e.name}">
                <img src="${c.close}" alt="" />
            </button>
        `),`
        <section class="member-card" aria-label="${e.name}">
            <div class="member-card__identity">
                ${u(e.id,`avatar--46`)}
                <div class="member-card__text">
                    <div class="member-card__name-row">
                        <h3 class="member-card__name">${e.name}</h3>
                        ${e.isYou?`<span class="member-card__you">You</span>`:``}
                    </div>
                    <div class="member-card__tags">${i.join(``)}</div>
                </div>
                ${o}
            </div>

            <label class="field-label" for="occupation-${e.id}">Occupation</label>
            <div class="select">
                <select id="occupation-${e.id}" data-member-occupation="${e.id}">${a.join(``)}</select>
                <img class="select__chevron" src="${c.chevronDown}" alt="" />
            </div>
        </section>
    `}function m(e){let t=e.members.length===Object.keys(n).length;return`
        <button class="add-member-card ${t?`is-full`:``}" type="button" data-action="add-member" ${t?`aria-disabled="true" title="This demo supports up to two members"`:``}>
            <span class="add-member-card__icon"><img src="${c.plus}" alt="" /></span>
            <strong class="add-member-card__text">Add Another Member<br />to this analysis</strong>
        </button>
    `}function h(e,t){return`
        <label class="city-option">
            <input class="city-option__input" type="checkbox" data-city="${e}" ${t.cities.includes(e)?`checked`:``} />
            <span class="city-option__box"><img src="${c.checkboxCheck}" alt="" /></span>
            <span class="city-option__name">${e}</span>
        </label>
    `}function g(t){let n=t.members.map(e=>p({...e,hasPartner:t.members.length>1})),r=e.map(e=>h(e,t)),i=t.cities.length===e.length;return`
        ${d()}
        <main class="setup">
            <div class="setup__heading">
                <h1 class="setup__title">Find the Place That Fits You Both</h1>
                <p class="setup__subtitle">The best way to navigate your Next chapter, Together</p>
            </div>

            <div class="setup__sections">
                <section class="setup-section">
                    ${f(1,`Choose Your Members`)}
                    <div class="member-row member-row--${t.members.length}">
                        ${n.join(``)}
                        ${m(t)}
                    </div>
                </section>

                <section class="setup-section">
                    ${f(2,`Choose Cities`)}
                    <div class="card city-card">
                        <div class="city-card__header">
                            <h3 class="city-card__title">Cities to explore</h3>
                            <span class="city-card__count" id="city-count">${t.cities.length} selected</span>
                        </div>
                        <div class="city-grid">${r.join(``)}</div>
                    </div>
                </section>
            </div>

            <div class="setup__actions">
                <p class="setup__error" id="setup-error" role="alert"></p>
                <button class="button button--grey" type="button" data-action="toggle-cities" id="toggle-cities">
                    ${i?`Clear all`:`Select all`}
                </button>
                <button class="button button--primary" type="button" data-action="start-analysis">
                    Start analysis
                    <img src="${c.arrowRight}" alt="" />
                </button>
            </div>
        </main>
    `}function _(e){let t=e/(a.length-1),n=a.map((t,n)=>{let r=`upcoming`,i=n+1;return n<e?(r=`done`,i=`<img src="${c.stepCheck}" alt="" />`):n===e&&(r=`current`),`
            <li class="step-progress__item is-${r}">
                <button class="step-progress__button" type="button" data-step="${n}" ${r===`current`?`aria-current="step"`:``}>
                    <span class="step-progress__marker">${i}</span>
                    <span class="step-progress__label">${t.label}</span>
                </button>
            </li>
        `});return`
        <nav class="step-progress" aria-label="Analysis steps">
            <div class="step-progress__header">
                <h2 class="step-progress__title">Your Members’ Shared Journey Is Ready</h2>
                <span class="step-progress__count">Step ${e+1}/${a.length}</span>
            </div>
            <div class="step-progress__viewport">
                <ol class="step-progress__list" style="--progress: ${t}">${n.join(``)}</ol>
            </div>
        </nav>
    `}function v(){return`<span class="help-badge" title="How this score works" aria-label="How this score works">?</span>`}function y(e,t){return`
        <section class="card chart-panel" aria-labelledby="step-title">
            <h1 class="chart-panel__title" id="step-title" tabindex="-1">
                <span class="number-badge">${t+1}</span>
                ${e.title}
                ${e.titleHelp?v():``}
            </h1>
            <a class="chart-panel__zoom" href="${o[e.chart]}" target="_blank" rel="noopener" title="Open full size">
                <img class="chart-panel__image" src="${o[e.chart]}" alt="${e.chartAlt}" />
            </a>
            <p class="chart-panel__hint">Tap the chart to open it full size</p>
        </section>
    `}function b(e,t){let r=n[e];return`
        <span class="person person--${e}">
            ${u(e,`avatar--${t}`)}
            <strong class="person__name">${r.name}</strong>
            <span class="person__occupation">${l(r.occupation)}</span>
        </span>
    `}function x(e,t){return`<ol class="numbered-list">${e.map((e,n)=>`
            <li class="numbered-list__item">
                <span class="numbered-list__number numbered-list__number--${t}">${n+1}</span>
                ${e}
            </li>
        `).join(``)}</ol>`}function S(e){let t=e.titleSmall?` <small>${e.titleSmall}</small>`:``;return`<h3 class="summary__subheading">${e.title}${t}</h3>`}function C(e,t){return`
        <li class="bullets__item">
            <span class="bullets__dot bullets__dot--${t||`grey`}"></span>
            <div class="bullets__text">${e}</div>
        </li>
    `}function w(e){let t=e.items.map(t=>C(t,e.dot)),n=``;return e.avatar?n=`
            <h3 class="bullets__heading">
                ${u(e.avatar,`avatar--26`)}
                <span>${e.heading}</span>
            </h3>
        `:e.heading&&(n=`<h3 class="bullets__heading ${e.centered?`is-centered`:``}">${e.heading}</h3>`),`
        <div class="bullets">
            ${n}
            <ul class="bullets__list">${t.join(``)}</ul>
        </div>
    `}function T(t){let n=t.cities.length;return`<ul class="bullets__list bullets__list--spaced">${[C(`
        <p class="bullets__lead">You've selected ${n===e.length?`all `:``}<strong>${n} ${n===1?`candidate city`:`candidate cities`}</strong>. Explore their locations on the map.</p>
        <div class="city-tags">${t.cities.map(e=>`<span class="city-tag">${e}</span>`).join(``)}</div>
    `),C(`Job opportunities vary by city and occupation. Let's find out where the opportunities are!`)].join(``)}</ul>`}function E(e){return`
        <div class="summary__group">
            ${S(e)}
            <div class="person-cards">
                <div class="person-card person-card--maya">
                    ${b(`maya`,26)}
                    ${x(e.maya,`orange`)}
                </div>
                <div class="person-card person-card--alex">
                    ${b(`alex`,26)}
                    ${x(e.alex,`blue`)}
                </div>
            </div>
        </div>
    `}function D(e){return`
        <div class="summary__group">
            ${S(e)}
            <div class="person-cards">
                <div class="person-card person-card--maya person-card--trend">
                    ${b(`maya`,26)}
                    <div class="trend trend--up">
                        <img src="${c.trendUp}" alt="Rising" />
                        <span>Job Demand</span>
                    </div>
                </div>
                <div class="person-card person-card--alex person-card--trend">
                    ${b(`alex`,26)}
                    <div class="trend trend--down">
                        <img src="${c.trendDown}" alt="Falling" />
                        <span>Job Demand</span>
                    </div>
                </div>
            </div>
        </div>
    `}function O(e){return`
        <div class="couple">
            ${b(`maya`,e)}
            <span class="couple__and">&amp;</span>
            ${b(`alex`,e)}
        </div>
    `}function k(e){return`
        <div class="summary__group">
            <h3 class="summary__subheading">${e.title} ${v()}</h3>
            <div class="household-card">
                ${O(26)}
                <div class="household-card__ranks">${x(e.ranks,`purple`)}</div>
            </div>
        </div>
    `}function A(e){return`
        <div class="summary__group">
            <h3 class="summary__subheading">${e.title} ${v()}</h3>
            <div class="household-card household-card--centered">
                ${O(26)}
                <div class="finalists">
                    <img class="finalists__pie" src="${c.finalistsPie}" alt="Brisbane led seven of ten scenarios, Sydney three." />
                    <ol class="numbered-list">
                        <li class="numbered-list__item"><span class="numbered-list__number numbered-list__number--purple">1</span>Brisbane</li>
                        <li class="numbered-list__item"><span class="numbered-list__number numbered-list__number--lilac">2</span>Sydney</li>
                    </ol>
                </div>
            </div>
        </div>
    `}function j(e){return`
        <div class="thanks">
            <p class="thanks__line">Thank you,</p>
            <p class="thanks__members">
                ${b(`maya`,23)}
                <span>and</span>
                ${b(`alex`,23)}
            </p>
            <p class="thanks__result"><strong>${e.city}</strong> is your starting point!</p>
        </div>
    `}function M(e){let t=[c.medalFirst,c.medalSecond,c.medalThird];return`<ol class="household-card medals">${e.ranks.map((e,n)=>`
            <li class="medals__item ${n===0?`is-first`:``}">
                <img src="${t[n]}" alt="Rank ${n+1}" />
                ${e}
            </li>
        `).join(``)}</ol>`}function N(e,t){switch(e.type){case`cityOverview`:return T(t);case`rankings`:return E(e);case`trends`:return D(e);case`household`:return k(e);case`finalists`:return A(e);case`thanks`:return j(e);case`medals`:return M(e);default:return w(e)}}function P(e,t){let n=e.summary.map(e=>N(e,t)),r=e.chips.map(e=>`<button class="prompt-chip" type="button">${e}</button>`);return`
        <div class="side-column">
            <aside class="card summary ${e.highlight?`summary--highlight`:``}" aria-label="Quick Summary">
                <h2 class="summary__title">
                    <img src="${c.summaryBadge}" alt="" />
                    Quick Summary
                </h2>
                ${n.join(``)}
            </aside>

            <div class="assistant">
                <div class="assistant__chips">${r.join(``)}</div>
                <form class="assistant__form" data-action="ask-assistant">
                    <img class="assistant__sparkle" src="${c.sparkle}" alt="" />
                    <input class="assistant__input" type="text" placeholder="Ask Our AI Assistant" aria-label="Ask Our AI Assistant" />
                    <button class="assistant__send" type="submit" aria-label="Send">
                        <img src="${c.sendButton}" alt="" />
                    </button>
                </form>
            </div>
        </div>
    `}function F(e){let t=e===a.length-1,n=``;return t||(n=`
            <p class="footer__up-next">
                <span>Up next</span>
                <strong>${a[e+1].label}</strong>
            </p>
        `),`
        <footer class="app-footer">
            <button class="button button--grey" type="button" data-action="previous-step">
                <img src="${c.arrowLeft}" alt="" />
                Previous
            </button>

            <div class="app-footer__next">
                ${n}
                <button class="button button--primary ${t?``:`button--next`}" type="button" data-action="${t?`export-report`:`next-step`}">
                    ${t?`Export Final Report`:`Next`}
                    <img src="${c.arrowRight}" alt="" />
                </button>
            </div>
        </footer>
    `}function I(e){let t=a[e.stepIndex];return`
        ${d()}
        <main class="analysis">
            ${_(e.stepIndex)}
            <div class="analysis__layout">
                ${y(t,e.stepIndex)}
                ${P(t,e)}
            </div>
        </main>
        ${F(e.stepIndex)}
    `}var L=document.getElementById(`app-root`),R={screen:`setup`,stepIndex:0,members:[{...n.maya}],cities:[...e]};function z(){R.screen===`setup`?(L.innerHTML=g(R),document.title=`The Goals · Choose your members`):(L.innerHTML=I(R),document.title=`${a[R.stepIndex].label} · The Goals`)}function B(){return R.screen===`setup`?`#/setup`:`#/analysis/${a[R.stepIndex].id}`}function V(){let e=B();e===window.location.hash?window.history.replaceState(null,``,e):window.history.pushState(null,``,e)}function H(e){R.screen=`analysis`,R.stepIndex=Math.max(0,Math.min(a.length-1,e)),z(),V(),window.scrollTo({top:0,behavior:`instant`}),document.getElementById(`step-title`).focus({preventScroll:!0}),W()}function U(){R.screen=`setup`,z(),V(),window.scrollTo({top:0,behavior:`instant`})}function W(){L.querySelector(`.step-progress__item.is-current`).scrollIntoView({block:`nearest`,inline:`center`})}function G(){document.getElementById(`city-count`).textContent=`${R.cities.length} selected`,document.getElementById(`toggle-cities`).textContent=R.cities.length===e.length?`Clear all`:`Select all`,document.getElementById(`setup-error`).textContent=``}L.addEventListener(`click`,t=>{let r=t.target.closest(`[data-step]`);if(r){H(Number(r.dataset.step));return}let i=t.target.closest(`button[data-action]`);if(i)switch(i.dataset.action){case`go-setup`:U();break;case`add-member`:R.members.length===1&&(R.members.push({...n.alex}),z());break;case`remove-member`:R.members=[R.members[0]],z();break;case`toggle-cities`:R.cities=R.cities.length===e.length?[]:[...e],z();break;case`start-analysis`:if(R.cities.length===0){document.getElementById(`setup-error`).textContent=`Choose at least one city to begin.`;return}H(0);break;case`previous-step`:R.stepIndex===0?U():H(R.stepIndex-1);break;case`next-step`:H(R.stepIndex+1)}}),L.addEventListener(`change`,t=>{let n=t.target;if(n.dataset.memberOccupation){let e=R.members.find(e=>e.id===n.dataset.memberOccupation);e.occupation=n.value}n.dataset.city&&(R.cities=e.filter(e=>e===n.dataset.city?n.checked:R.cities.includes(e)),G())}),L.addEventListener(`submit`,e=>{e.preventDefault()});function K(){let e=window.location.hash.replace(`#/analysis/`,``),t=a.findIndex(t=>t.id===e);t>=0?(R.screen=`analysis`,R.stepIndex=t):R.screen=`setup`,z()}window.addEventListener(`popstate`,K),window.location.hash.startsWith(`#/analysis/`)&&R.members.push({...n.alex}),K(),window.history.replaceState(null,``,B());