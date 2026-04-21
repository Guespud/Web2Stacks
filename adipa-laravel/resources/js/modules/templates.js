import { escapeHtml, formatBadge } from './helpers';

function iconSvg(type) {
    if (type === 'add-to-cart') {
        return '<svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true"><mask id="add-cart-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20" style="mask-type:luminance"><path d="M20 0H0v20h20V0Z" fill="currentColor"/></mask><g fill="currentColor" mask="url(#add-cart-mask)"><path d="M5.833 20a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM14.167 20a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM19.167 2.5H17.5V.833a.833.833 0 1 0-1.667 0V2.5h-1.666a.833.833 0 0 0 0 1.667h1.666v1.666a.833.833 0 1 0 1.667 0V4.167h1.667a.833.833 0 0 0 0-1.667Z"/><path d="M18.142 8.105a.828.828 0 0 0-.968.672 2.5 2.5 0 0 1-2.46 2.056H4.515l-.783-6.666h7.101a.833.833 0 0 0 0-1.667H3.535L3.5 2.207A2.5 2.5 0 0 0 1.018 0H.833a.833.833 0 0 0 0 1.667h.185a.833.833 0 0 1 .828.735l1.147 9.75a4.167 4.167 0 0 0 4.138 3.681h8.702a.834.834 0 0 0 0-1.666H7.131A2.5 2.5 0 0 1 4.773 12.5h9.941a4.167 4.167 0 0 0 4.101-3.427.832.832 0 0 0-.673-.968Z"/></g></svg>';
    }

    if (type === 'go-to-cart') {
        return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M9 15 16.5 7.5M11 7h6v6M15 13.5V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';
    }

    if (type === 'trash') {
        return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M4 7h16M9.5 11.5v5M14.5 11.5v5M6.5 7l1 11a2 2 0 0 0 2 1.8h5a2 2 0 0 0 2-1.8l1-11M9 7V4.8c0-.4.3-.8.8-.8h4.4c.4 0 .8.3.8.8V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>';
    }

    return '';
}

export function cartActionMarkup(course, inCart) {
    if (inCart(course.id)) {
        return `
            <button class="course-card__icon-button js-open-cart" type="button" aria-label="Ir al carrito">${iconSvg('go-to-cart')}</button>
            <button class="course-card__icon-button js-remove-from-cart" data-course-id="${course.id}" type="button" aria-label="Eliminar ${escapeHtml(course.title)}">${iconSvg('trash')}</button>
        `;
    }

    return `
        <button class="course-card__icon-button js-add-to-cart" data-course-id="${course.id}" type="button" aria-label="Agregar ${escapeHtml(course.title)}">${iconSvg('add-to-cart')}</button>
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
