/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const noticeModalHtml = `
        <div class="modal fade" id="liquidationNoticeModal" tabindex="-1" aria-labelledby="liquidationNoticeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-4" id="liquidationNoticeModalLabel">해 산 및 채 권 신 고 공 고(1차)</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="font-size: 1.1rem; line-height: 1.8;">
                        <p style="margin-bottom: 1.5rem;">
                            본 회사는 2026 년 1 월 10 일 임시주주총회에서 해산결의되었으므로 본 회사에 대하여 채권이 있는 분은 공고일 익일부터 2개월 이내에 그 채권액을 본 회사에 신고하여 주시기 바라며, 만일 위 기일내에 신고가 없으면 청산에서 제외됩니다.
                        </p>
                        <p style="margin-bottom: 0; text-align: right; white-space: pre-line;">2026 년 2 월 12 일

주식회사 에이아이라이크미
인천광역시 미추홀구 아암대로 109, 3층 304호,305호-40(용현동)
청산인 박 하 림</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', noticeModalHtml);
    const noticeModalElement = document.getElementById('liquidationNoticeModal');
    if (noticeModalElement) {
        const noticeModal = new bootstrap.Modal(noticeModalElement);
        noticeModal.show();
    }

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
