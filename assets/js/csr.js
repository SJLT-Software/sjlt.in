$(document).ready(function() {
    const data = variables.sections.csr;
    
    if (data && $('#csr-container').length) {
        let cardsHtml = '';
        
        data.subsections.forEach((item, index) => {
            cardsHtml += `
                <div class="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden hover-lift bg-white" data-aos="fade-up" data-aos-delay="${index * 50}">
                    <div style="height: 250px; overflow: hidden;">
                        <img src="${item.image}" class="w-100 h-100 object-fit-cover" alt="${item.title}">
                    </div>
                    
                    <div class="card-body p-4 p-lg-5">
                        <h4 class="card-title fw-bold text-primary font-primary mb-3">${item.title}</h4>
                        <p class="card-text text-muted font-secondary mb-0" style="line-height: 1.7;">${item.description}</p>
                    </div>
                </div>
            `;
        });

        const sectionHtml = `
            <div class="container py-5">
                <div class="row sticky-layout-row">
                    <div class="col-lg-4 mb-5 mb-lg-0 sticky-left-col">
                        <div class="sticky-content pe-lg-4">
                            <span class="text-uppercase text-secondary fw-bold font-secondary d-block mb-2" style="letter-spacing: 2px;">Community</span>
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

        $('#csr-container').html(sectionHtml);
    }
});