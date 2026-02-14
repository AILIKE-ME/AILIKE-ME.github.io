/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const noticeModalConfigs = [
        {
            id: 'liquidationNoticeModal1',
            labelId: 'liquidationNoticeModalLabel1',
            title: '해 산 및 채 권 신 고 공 고(1차)',
            description: '본 회사는 2026 년 2 월 10 일 임시주주총회에서 해산결의되었으므로 본 회사에 대하여 채권이 있는 분은 공고일 익일부터 2개월 이내에 그 채권액을 본 회사에 신고하여 주시기 바라며, 만일 위 기일내에 신고가 없으면 청산에서 제외됩니다.',
            footer: `2026 년 2 월 13 일

주식회사 에이아이라이크미
인천광역시 미추홀구 아암대로 109, 3층 304호,305호-40(용현동)
청산인 박 하 림`,
        },
        {
            id: 'liquidationNoticeModal2',
            labelId: 'liquidationNoticeModalLabel2',
            title: '해 산 및 채 권 신 고 공 고(2차)',
            description: '본 회사는 2026 년 2 월 10 일 임시주주총회에서 해산결의되었으므로 본 회사에 대하여 채권이 있는 분은 공고일 익일부터 2개월 이내에 그 채권액을 본 회사에 신고하여 주시기 바라며, 만일 위 기일내에 신고가 없으면 청산에서 제외됩니다.',
            footer: `2026 년 2 월 14 일

주식회사 에이아이라이크미
인천광역시 미추홀구 아암대로 109, 3층 304호,305호-40(용현동)
청산인 박 하 림`,
        },
    ];

    const createNoticeModalHtml = ({ id, labelId, title, description, footer }) => `
        <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${labelId}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 560px; width: calc(100vw - 24px);">
                <div class="modal-content">
                    <div class="modal-header position-relative justify-content-center" style="cursor: move; user-select: none;">
                        <h2 class="modal-title text-center w-100" id="${labelId}" style="font-size: 1.2rem;">${title}</h2>
                        <button type="button" class="btn-close position-absolute end-0 me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="font-size: 0.98rem; line-height: 1.65;">
                        <p style="margin-bottom: 1.5rem;">${description}</p>
                        <p style="margin-bottom: 0; text-align: center; white-space: pre-line;">${footer}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    const initializeNoticeModal = (noticeModalElement, modalIndex) => {
        const noticeModalDialog = noticeModalElement.querySelector('.modal-dialog');
        const noticeModalHeader = noticeModalElement.querySelector('.modal-header');

        const centerNoticeDialog = () => {
            if (!noticeModalDialog) {
                return;
            }

            noticeModalDialog.style.margin = '0';
            noticeModalDialog.style.position = 'fixed';
            const dialogRect = noticeModalDialog.getBoundingClientRect();
            const offset = modalIndex * 40;
            const left = Math.max((window.innerWidth - dialogRect.width) / 2 + offset, 12);
            const top = Math.max((window.innerHeight - dialogRect.height) / 2 + offset, 12);
            noticeModalDialog.style.left = `${left}px`;
            noticeModalDialog.style.top = `${top}px`;
        };

        if (noticeModalDialog && noticeModalHeader) {
            let isDragging = false;
            let dragOffsetX = 0;
            let dragOffsetY = 0;

            noticeModalHeader.addEventListener('mousedown', dragStartEvent => {
                if (dragStartEvent.button !== 0 || dragStartEvent.target.closest('.btn-close')) {
                    return;
                }

                const dialogRect = noticeModalDialog.getBoundingClientRect();
                isDragging = true;
                dragOffsetX = dragStartEvent.clientX - dialogRect.left;
                dragOffsetY = dragStartEvent.clientY - dialogRect.top;
                dragStartEvent.preventDefault();
            });

            document.addEventListener('mousemove', dragMoveEvent => {
                if (!isDragging) {
                    return;
                }

                const dialogRect = noticeModalDialog.getBoundingClientRect();
                const minLeft = -dialogRect.width + 72;
                const maxLeft = window.innerWidth - 72;
                const minTop = -dialogRect.height + 72;
                const maxTop = window.innerHeight - 72;
                const nextLeft = Math.min(Math.max(dragMoveEvent.clientX - dragOffsetX, minLeft), maxLeft);
                const nextTop = Math.min(Math.max(dragMoveEvent.clientY - dragOffsetY, minTop), maxTop);
                noticeModalDialog.style.left = `${nextLeft}px`;
                noticeModalDialog.style.top = `${nextTop}px`;
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });

            noticeModalElement.addEventListener('shown.bs.modal', centerNoticeDialog, { once: true });
        }

        return new bootstrap.Modal(noticeModalElement, {
            backdrop: false,
            focus: false,
        });
    };

    document.body.insertAdjacentHTML('beforeend', noticeModalConfigs.map(createNoticeModalHtml).join(''));
    const noticeModalElements = noticeModalConfigs
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);
    const noticeModals = noticeModalElements.map((noticeModalElement, index) => initializeNoticeModal(noticeModalElement, index));

    if (noticeModals.length > 0) {
        noticeModals.forEach(noticeModal => {
            noticeModal.show();
        });
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
