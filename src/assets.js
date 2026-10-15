// Explicit URLs so Vite bundles every runtime image
export const CHARTS = {
    candidateCities: new URL("../assets/charts/candidate-cities-map.png", import.meta.url).href,
    jobMarket: new URL("../assets/charts/job-market-treemaps.png", import.meta.url).href,
    demandTrends: new URL("../assets/charts/demand-trends.png", import.meta.url).href,
    jobHistory: new URL("../assets/charts/job-market-history.png", import.meta.url).href,
    jobStability: new URL("../assets/charts/job-stability.png", import.meta.url).href,
    careerMatch1: new URL("../assets/charts/career-match-scatter.png", import.meta.url).href,
    careerMatch2: new URL("../assets/charts/career-match-scores.png", import.meta.url).href,
    compareFinalists: new URL("../assets/charts/compare-finalists.png", import.meta.url).href,
    recommendation: new URL("../assets/charts/final-recommendation-map.png", import.meta.url).href,
};

export const AVATARS = {
    maya: new URL("../assets/avatars/maya.jpg", import.meta.url).href,
    alex: new URL("../assets/avatars/alex.jpg", import.meta.url).href,
};

export const ICONS = {
    logo: new URL("../assets/icons/logo.svg", import.meta.url).href,
    chevronDown: new URL("../assets/icons/chevron-down.svg", import.meta.url).href,
    close: new URL("../assets/icons/close.svg", import.meta.url).href,
    plus: new URL("../assets/icons/plus.svg", import.meta.url).href,
    checkboxCheck: new URL("../assets/icons/checkbox-check.svg", import.meta.url).href,
    stepCheck: new URL("../assets/icons/step-check.svg", import.meta.url).href,
    summaryBadge: new URL("../assets/icons/summary-badge.svg", import.meta.url).href,
    sparkle: new URL("../assets/icons/sparkle.svg", import.meta.url).href,
    sendButton: new URL("../assets/icons/send-button.svg", import.meta.url).href,
    arrowRight: new URL("../assets/icons/arrow-right.svg", import.meta.url).href,
    arrowLeft: new URL("../assets/icons/arrow-left.svg", import.meta.url).href,
    trendUp: new URL("../assets/icons/trend-up.svg", import.meta.url).href,
    trendDown: new URL("../assets/icons/trend-down.svg", import.meta.url).href,
    finalistsPie: new URL("../assets/icons/finalists-pie.svg", import.meta.url).href,
    medalFirst: new URL("../assets/icons/medal-first.svg", import.meta.url).href,
    medalSecond: new URL("../assets/icons/medal-second.svg", import.meta.url).href,
    medalThird: new URL("../assets/icons/medal-third.svg", import.meta.url).href,
};
