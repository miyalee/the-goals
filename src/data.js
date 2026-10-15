// prettier-ignore
export const CITIES = [
    "Brisbane", "Sydney", "Melbourne", "Perth",
    "Adelaide", "Gold Coast", "Canberra & ACT", "Newcastle & Hunter",
];

export const OCCUPATIONS = [
    { id: "nurse", label: "Nursing" },
    { id: "ict", label: "ICT" },
];

export const MEMBERS = {
    maya: { id: "maya", name: "Maya", occupation: "nurse", isYou: true },
    alex: { id: "alex", name: "Alex", occupation: "ict", isYou: false },
};

export const MEMBER_TAGS = ["#Information", "#Information", "#Information", "#Information"];

const HOUSEHOLD_RANKS = ["Brisbane 54.5", "Sydney 53.4", "Adelaide 47.4"];

// One entry per analysis screen; "summary" blocks are drawn by renderSummaryBlock()
export const STEPS = [
    {
        id: "candidate-cities",
        label: "Candidate cities",
        title: "Candidate cities around Australia",
        chart: "candidateCities",
        chartAlt: "Map of Australia marking the eight candidate cities.",
        chips: ["Geographic differences between cities", "A different map style", "Explore More"],
        summary: [{ type: "cityOverview" }],
    },
    {
        id: "job-market",
        label: "Job market",
        title: "Job market: Nurse and ICT",
        chart: "jobMarket",
        chartAlt: "Treemaps of each city's share of nursing and ICT job demand, coloured by average growth.",
        chips: ["Details about this analysis", "A different data style", "Explore More"],
        summary: [
            {
                type: "rankings",
                title: "Top Job Markets 2015~2025",
                maya: ["Melbourne", "Sydney", "Brisbane", "Others"],
                alex: ["Sydney", "Melbourne", "Brisbane", "Others"],
            },
            {
                type: "bullets",
                avatar: "maya",
                heading: "More freedom to move!",
                items: [
                    "You can consider a wider range of places without relying on one dominant market.",
                    "Melbourne and Sydney together account for 48.22%.",
                ],
            },
            {
                type: "bullets",
                avatar: "alex",
                heading: "Concentrated in Major Markets",
                items: [
                    "ICT demand is heavily concentrated in top cities, with Sydney and Melbourne accounting for over 62% of the market.",
                    "Moving away from big cities means you have to weigh smaller job markets against your own strengths.",
                ],
            },
        ],
    },
    {
        id: "demand-trends",
        label: "Demand trends",
        title: "Demand trends: ICT and Nurse Jobs Demand Trends 2015~2025",
        chart: "demandTrends",
        chartAlt: "Line charts of nursing and ICT job demand by city from 2015 to 2025.",
        chips: ["Details about this analysis", "Explore More"],
        summary: [
            {
                type: "rankings",
                title: "Top Regional Job Markets",
                titleSmall: "2015~2025",
                maya: ["Melbourne", "Sydney", "Brisbane", "Others"],
                alex: ["Sydney", "Melbourne", "Brisbane", "Others"],
            },
            {
                type: "bullets",
                heading: "Big cities keep the crown,<br />but smaller markets quietly rise.",
                centered: true,
                items: [
                    "ICT and nursing jobs grew differently from 2015 to 2025, with big cities taking up most of the chart.",
                    "A big city can still have a large market even if its demand is dropping.",
                    "A smaller market can grow steadily without looking huge on the chart.",
                ],
            },
        ],
    },
    {
        id: "job-history",
        label: "History of job market",
        title: "History of Job market : Nurse and ICT",
        chart: "jobHistory",
        chartAlt: "Heatmaps of the monthly demand index for nursing and ICT by city, 2019 to 2026.",
        chips: ["Details about this analysis", "Explore More"],
        summary: [
            { type: "trends", title: "Changes in Job Demand", titleSmall: "(2019–2025)" },
            {
                type: "bullets",
                avatar: "maya",
                heading: "Growth Across All Markets",
                items: [
                    "Compared to 2019, nursing demand has increased across all examined cities.",
                    "In particular, demand in Brisbane is 54.6% higher than its baseline.",
                ],
            },
            {
                type: "bullets",
                avatar: "alex",
                heading: "Bigger size doesn't equal better resilience",
                items: [
                    "While giant tech hubs like Sydney and Melbourne dropped to the 54s, smaller markets like Brisbane and Perth held strong in the upper 60s.",
                    "Even though its market is smaller, Brisbane saw a smaller drop than Sydney.",
                ],
            },
        ],
    },
    {
        id: "job-stability",
        label: "Job stability",
        title: "Job Stability : Nurse and ICT",
        chart: "jobStability",
        chartAlt: "Scatter plot of job growth against stability score for each city, for nursing and ICT.",
        chips: ["Details about this analysis", "Explore More"],
        summary: [
            {
                type: "rankings",
                title: "Job Stability Ranking",
                maya: ["Brisbane", "Sydney", "Melbourne", "Perth"],
                alex: ["Canberra & ACT", "Brisbane", "Perth", "Melbourne"],
            },
            {
                type: "bullets",
                avatar: "maya",
                heading: "The fastest growing market is not always the steadiest",
                items: [
                    "Adelaide, the fastest growing nursing market, scored 36.1 in stability, while Brisbane, the third fastest growing, scored 100.",
                    "Brisbane offers a useful balance for a move that values security.",
                ],
            },
            {
                type: "bullets",
                avatar: "alex",
                heading: "The fastest growing market is not always the steadiest",
                items: [
                    "Brisbane saw a 32.6% drop from 2019 with an 82.8 stability score, while Sydney dropped 45.5% with a 59.7 score.",
                    "Brisbane offers greater consistency, whereas Sydney has a much larger market.",
                ],
            },
        ],
    },
    {
        id: "career-match-1",
        label: "Career match 1",
        title: "Career match 1 : Nurse and ICT",
        chart: "careerMatch1",
        chartAlt: "Scatter plot of nurse stability against ICT stability, sized by household weak-link score.",
        chips: ["Details about this analysis", "Explore More"],
        summary: [
            { type: "household", title: "Career Match Score", ranks: HOUSEHOLD_RANKS },
            {
                type: "bullets",
                heading: "Peace of Mind vs Big Markets",
                centered: true,
                items: [
                    "Brisbane scored 54.5 and Sydney scored 53.4.",
                    "The numbers are tied, so it all comes down to your top priority, stability or scale.",
                ],
            },
        ],
    },
    {
        id: "career-match-2",
        label: "Career match 2",
        title: "Career match 2 : Nurse and ICT",
        chart: "careerMatch2",
        chartAlt: "Heatmaps of market size, growth and stability for nursing and ICT, combined into a final score per city.",
        chips: ["Details about this analysis", "Explore More"],
        summary: [
            { type: "household", title: "Career Match Score", ranks: HOUSEHOLD_RANKS },
            {
                type: "bullets",
                heading: "Sydney's Scale or Brisbane's Strength",
                centered: true,
                items: [
                    "Sydney: Huge job markets for both ICT and Nursing, but the ICT sector can be unstable during downturns.",
                    "Brisbane: Smaller job markets for both fields, but exceptionally resilient and stable across both ICT and Nursing.",
                ],
            },
        ],
    },
    {
        id: "compare-finalists",
        label: "Compare finalists",
        title: "Compare finalists : Brisbane and Sydney",
        titleHelp: true,
        chart: "compareFinalists",
        chartAlt: "Bar chart of Brisbane's margin over Sydney across ten scenarios, S0 to S9.",
        chips: ["Details about this analysis", "Explore More"],
        summary: [
            { type: "finalists", title: "Compare finalists" },
            {
                type: "bullets",
                heading: "Sydney's Scale or Brisbane's Strength",
                centered: true,
                items: [
                    "Out of ten scenarios, Brisbane led in seven and Sydney led in three.",
                    "Brisbane’s strength lies in its consistency across reasonable assumptions.",
                    "Sydney remains a strong choice, especially when market size matters most.",
                ],
            },
        ],
    },
    {
        id: "recommendation",
        label: "Final Recommendation",
        title: "Final Recommendation",
        chart: "recommendation",
        chartAlt: "Map of Australia with a column per city showing combined job demand and score; Brisbane is highlighted.",
        chips: ["Details about this analysis", "Explore More"],
        highlight: true,
        summary: [
            { type: "thanks", city: "Brisbane" },
            { type: "medals", ranks: HOUSEHOLD_RANKS },
            {
                type: "bullets",
                dot: "purple",
                items: [
                    "Brisbane leads the baseline Nursing, ICT household analysis with a score of 54.5. Sydney remains close at 53.4.",
                    "It balances nursing security with ICT opportunities, offering a shared starting point.",
                ],
            },
        ],
    },
];
