import { escapeHtml, formatBadge } from './helpers';

function iconSvg(type) {
    if (type === 'arrow') {
        return '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.75 13.25L13.25 6.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 6.75H13.25V12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }

    if (type === 'close') {
        return '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 6L14 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M14 6L6 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    }

    if (type === 'cart') {
        return '<img alt="" aria-hidden="true" src="/assets/icon-main-cart.png">';
    }

    return '';
}

export function cartActionMarkup(course, inCart) {
    if (inCart(course.id)) {
        return `
            <button class="course-card__icon-button js-open-cart" type="button" aria-label="Ir al carrito">${iconSvg('arrow')}</button>
            <button class="course-card__icon-button js-remove-from-cart" data-course-id="${course.id}" type="button" aria-label="Eliminar ${escapeHtml(course.title)}">${iconSvg('close')}</button>
        `;
    }

    return `
        <button class="course-card__icon-button js-add-to-cart" data-course-id="${course.id}" type="button" aria-label="Agregar ${escapeHtml(course.title)}">${iconSvg('cart')}</button>
    `;
}

export function renderCourseCard(course, inCart) {
    return `
        <article class="course-card js-course-card" data-course-id="${course.id}">
            <div class="course-card__media">
                <div class="course-card__media-logo">
                    <img alt="ADIPA" src="/assets/logo-colombia.webp">
                </div>
                <div class="course-card__badge">
                    <span class="course-card__badge-dot"></span>
                    <span>${escapeHtml(formatBadge(course.mode))}</span>
                    <span class="course-card__badge-alert">!</span>
                </div>
            </div>
            <div class="course-card__body">
                <h3>${escapeHtml(course.title)}</h3>
                <div class="course-card__meta">
                    <span class="course-card__meta-item">
                        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                            <rect x="3.25" y="4.75" width="13.5" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M6.5 3.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M13.5 3.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M3.75 8.25H16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Inicio: ${escapeHtml(course.start_date)}
                    </span>
                    <span class="course-card__meta-divider"></span>
                    <span class="course-card__meta-item">${escapeHtml(course.status || 'En progreso')}</span>
                </div>
                <div class="course-card__price-row">
                    ${course.old_price ? `<span class="course-card__old-price">${escapeHtml(course.old_price)}</span>` : ''}
                    <strong>${escapeHtml(course.price)}</strong>
                    ${course.discount ? `<span class="course-card__discount">${escapeHtml(course.discount)}</span>` : ''}
                </div>
                <div class="course-card__actions">
                    <button class="course-card__detail" type="button">Ver detalle +</button>
                    <div class="course-card__cart-actions js-card-cart-actions">${cartActionMarkup(course, inCart)}</div>
                </div>
            </div>
        </article>
    `;
}

export function renderCartItem(item) {
    return `
        <article class="cart-item" data-course-id="${item.id}">
            <div class="cart-item__thumb"><img alt="ADIPA" src="/assets/logo-colombia.webp"></div>
            <div class="cart-item__content">
                <h3>${escapeHtml(item.title)}</h3>
                <strong>${escapeHtml(item.price)}</strong>
                <button class="js-remove-from-cart" data-course-id="${item.id}" type="button">Eliminar</button>
            </div>
        </article>
    `;
}
