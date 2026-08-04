$(document).ready(function() {
    const data = variables.sections.sustainability;
    
    if (data && $('#sustainability-container').length) {
        let cardsHtml = '';
        
        data.subsections.forEach((item, index) => {
            cardsHtml += `
                <div class="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden hover-lift sustainability-card" data-aos="fade-up" data-aos-delay="${index * 50}">
                    <div class="card-bg-image" style="background-image: url('${item.image}');"></div>
                    
                    <div class="card-body p-4 p-lg-5 position-relative z-1">
                        <h4 class="card-title fw-bold text-primary font-primary mb-3">${item.title}</h4>
                        <p class="card-text text-dark font-secondary mb-0" style="line-height: 1.7;">${item.description}</p>
                    </div>
                </div>
            `;
        });

        const sectionHtml = `
            <div class="container py-5">
                <div class="row sticky-layout-row">
                    <div class="col-lg-4 mb-5 mb-lg-0 sticky-left-col">
                        <div class="sticky-content pe-lg-4">
                            <span class="text-uppercase text-secondary fw-bold font-secondary d-block mb-2" style="letter-spacing: 2px;">Environment</span>
                            <h2 class="display-5 fw-bold text-primary font-primary mb-4">${data.title}</h2>
                            <p class="lead text-muted font-secondary">${data.description}</p>
                        </div>
                    </div>

                    <div class="col-lg-8 scrolling-right-col">
                        ${cardsHtml}
                    </div>
                </div>
            </div>
        `;

        $('#sustainability-container').html(sectionHtml);
    }
});