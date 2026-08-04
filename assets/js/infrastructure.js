document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("infrastructure-container");
    const data = variables.sections.infrastructure;

    if (!container || !data) return;

    let cardsHtml = data.subsections.map((sub, index) => {
        // Calculate a dynamic top offset for the vertical sticky effect
        const stickyTop = 100 + (index * 30); 
        
        // Loop through the specific stats for this division
        const statsHtml = sub.stats.map(stat => `
            <div class="col-sm-6 mb-3">
                <span class="d-block text-uppercase text-muted fw-bold" style="font-size: 0.75rem; letter-spacing: 1px;">${stat.label}</span>
                <span class="fw-medium text-dark">${stat.value}</span>
            </div>
        `).join('');

        return `
            <div class="stack-card bg-white rounded-5 shadow-lg mb-5 overflow-hidden" style="top: ${stickyTop}px; z-index: ${index + 1};">
                <div class="row g-0 h-100">
                    <!-- Left Side: Content with internal scroll -->
                    <div class="col-lg-6 p-5 d-flex flex-column custom-scrollbar" style="max-height: 75vh; overflow-y: auto;">
                        <span class="badge bg-dark text-light mb-3 align-self-start py-2 px-3 rounded-pill">Division 0${index + 1}</span>
                        <h3 class="display-6 fw-bold mb-4" style="font-family: 'Playfair Display', serif;">${sub.title}</h3>
                        <p class="text-muted mb-4 lead fs-6">${sub.description}</p>
                        <div class="row border-top pt-4 mt-auto">
                            ${statsHtml}
                        </div>
                    </div>
                    <!-- Right Side: Image -->
                    <div class="col-lg-6 d-none d-lg-block" style="min-height: 500px; background: url('${sub.image}') center/cover no-repeat;">
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <section id="infrastructure" class="py-5 bg-light">
            <div class="container stack-container py-5">
                <div class="text-center mb-5" data-aos="fade-up">
                    <h2 class="display-4 fw-bold" style="font-family: 'Playfair Display', serif;">${data.title}</h2>
                    <p class="lead text-muted max-w-75 mx-auto">${data.description}</p>
                </div>
                <!-- Div wrapping the cards to allow horizontal layout if enabled -->
                <div class="cards-wrapper">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
});