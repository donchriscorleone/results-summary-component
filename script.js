const summaries = document.querySelector('.summaries');


window.addEventListener('load', (e) => {
    loadJSON().then((values) => {
        values.forEach(v => {
            const card = createSummaryCard(v);
            summaries.appendChild(card);
        })
        const button = document.createElement('button')
        button.classList.add('btn');
        button.innerText = "Continue";

        summaries.append(button);
    }).catch((error) => {
        console.log(error)
    })
})

function createSummaryCard(value) {
    const summaryCard = document.createElement('div');
    summaryCard.classList.add('summary-card', `summary-${value.category.toLowerCase()}`);

    summaryCard.appendChild(createSummaryIcon(value));
    summaryCard.appendChild(createSummaryTitle(value));
    summaryCard.appendChild(createSummaryScore(value));

    return summaryCard
}

// Start - Sub components of Summary Card
function createSummaryIcon(value) {
    const summaryIcon = document.createElement('div');
    summaryIcon.classList.add('summary__icon', 'icon-wrapper');

    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.style.backgroundImage = `url(${value.icon})`;
    icon.ariaLabel = value.category;

    summaryIcon.appendChild(icon);

    return summaryIcon;
}

function createSummaryTitle(value) {
    const summaryTitleWrapper = document.createElement('div');
    summaryTitleWrapper.classList.add('summary__title-wrapper');

    const title = document.createElement('span');
    title.classList.add('summary__title', 'fw-700')
    title.innerText = value.category;

    summaryTitleWrapper.appendChild(title);

    return summaryTitleWrapper;
}

function createSummaryScore(value) {
    `
    <div class="summary__score-wrapper">
        <span class="summary__score fw-700">80</span>
        <span class="summary__divider fw-500">/</span>
        <span class="summary-hundred fw-500">100</span>
    </div>
    `

    const summaryScoreWrapper = document.createElement('div');
    summaryScoreWrapper.classList.add('summary__score-wrapper');

    const score = document.createElement('span');
    score.classList.add('summary__score', 'fw-700')
    score.innerText = value.score;

    const divider = document.createElement('span');
    divider.classList.add('summary__divider', 'fw-500')
    divider.innerText = '/';

    const hundred = document.createElement('span');
    hundred.classList.add('summary__hundred', 'fw-500')
    hundred.innerText = '100';

    summaryScoreWrapper.appendChild(score);
    summaryScoreWrapper.appendChild(divider);
    summaryScoreWrapper.appendChild(hundred);


    return summaryScoreWrapper;

}
// End - Sub components of Summary Card

async function loadJSON () {
    const res = await fetch('data.json');
    return await res.json();
}