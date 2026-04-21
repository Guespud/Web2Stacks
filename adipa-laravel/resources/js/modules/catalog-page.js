import $ from 'jquery';
import { csrfHeaders, formatCurrency } from './helpers';
import { cartActionMarkup, renderCartItem, renderCourseCard } from './templates';

const FILTER_GROUP_MAP = {
    'Área temática': 'areas',
    'Categoría': 'categories',
    'Modalidad': 'modes',
    'Tipo de programa': 'programTypes',
};

const RANKING_MATCHERS = {
    'Nuevos lanzamientos': (course) => course.is_new,
    'Más populares': (course) => course.is_popular,
    'Ofertas Flash': (course) => course.is_flash,
    'Top 10': (course) => course.is_top,
};

function createFilters(bounds) {
    return {
        areas: [],
        categories: [],
        discountRange: [...bounds.discount],
        hourRange: [...bounds.hours],
        modes: [],
        priceRange: [...bounds.price],
        programTypes: [],
    };
}

function findCourse(courses, courseId) {
    return courses.find((course) => course.id === courseId);
}

export function bootCatalogPage(app) {
    const catalog = app.catalog || {};
    const courses = catalog.courses || [];
    const bounds = catalog.bounds || {
        price: [0, 2200000],
        hours: [8, 350],
        discount: [0, 100],
    };

    const state = {
        cart: app.cart || { count: 0, items: [], total_formatted: '$0 COP' },
        filters: createFilters(bounds),
        ranking: null,
        search: '',
        sortBy: 'all',
    };

    function inCart(courseId) {
        return (state.cart.items || []).some((item) => item.id === courseId);
    }

    function syncRangeLabels() {
        $('.js-price-min-label').text(formatCurrency($('.js-price-min').val()));
        $('.js-price-max-label').text(formatCurrency($('.js-price-max').val()));
        $('.js-hours-min-label').text($('.js-hours-min').val());
        $('.js-hours-max-label').text($('.js-hours-max').val());
        $('.js-discount-min-label').text($('.js-discount-min').val());
        $('.js-discount-max-label').text($('.js-discount-max').val());
    }

    function refreshCardActions() {
        $('.js-card-cart-actions').each(function refresh() {
            const courseId = $(this).closest('.js-course-card').data('course-id');
            const course = findCourse(courses, courseId);

            if (course) {
                $(this).html(cartActionMarkup(course, inCart));
            }
        });
    }

    function updateCartUI() {
        const items = state.cart.items || [];
        const count = state.cart.count || 0;
        const total = state.cart.total_formatted || '$0 COP';
        const totalShort = state.cart.total_short_formatted || '$0';
        const countCopy = state.cart.count_label || (count === 1 ? 'curso agregado' : 'cursos agregados');
        const body = $('.js-cart-items');

        $('.js-cart-count').text(count).toggleClass('is-hidden', count === 0);
        $('.js-cart-count-label').text(count);
        $('.js-cart-count-copy').text(countCopy);
        $('.js-cart-total').text(total);
        $('.js-cart-total-short').text(totalShort);
        $('.js-checkout-button').toggleClass('is-disabled', count === 0);

        if (body.length) {
            body.html(items.length
                ? items.map(renderCartItem).join('')
                : '<div class="cart-drawer__empty">Aún no has agregado cursos al carrito.</div>');
        }

        refreshCardActions();
    }

    function sortCourses(filteredCourses) {
        if (state.sortBy === 'highest-price') {
            return [...filteredCourses].sort((left, right) => right.price_value - left.price_value);
        }

        if (state.sortBy === 'lowest-price') {
            return [...filteredCourses].sort((left, right) => left.price_value - right.price_value);
        }

        if (state.sortBy === 'nearest-date') {
            return [...filteredCourses].sort((left, right) => left.start_date_value - right.start_date_value);
        }

        return filteredCourses;
    }

    function matchesSearch(course) {
        const query = state.search.trim().toLowerCase();

        if (!query) {
            return true;
        }

        const searchableText = [
            course.title,
            course.description,
            course.category,
            course.school,
            course.mode,
            course.start_date,
            ...(course.tags || []),
        ].join(' ').toLowerCase();

        return searchableText.includes(query);
    }

    function matchesSelections(course) {
        const hasValues = (values, current) => !values.length || values.includes(current);
        const matchesCategory = !state.filters.categories.length
            || state.filters.categories.some((category) => (course.tags || []).includes(category));

        return hasValues(state.filters.areas, course.area)
            && hasValues(state.filters.programTypes, course.category)
            && hasValues(state.filters.modes, course.mode)
            && matchesCategory;
    }

    function matchesRanges(course) {
        const within = (value, [min, max]) => value >= min && value <= max;

        return within(course.price_value, state.filters.priceRange)
            && within(course.hours, state.filters.hourRange)
            && within(course.discount_value, state.filters.discountRange);
    }

    function matchesRanking(course) {
        if (!state.ranking) {
            return true;
        }

        const matcher = RANKING_MATCHERS[state.ranking];
        return matcher ? matcher(course) : true;
    }

    function applyCatalogFilters() {
        const grid = $('.js-course-grid');

        if (!grid.length) {
            return;
        }

        const filtered = sortCourses(
            courses.filter((course) => matchesSearch(course)
                && matchesSelections(course)
                && matchesRanges(course)
                && matchesRanking(course)),
        );

        if (!filtered.length) {
            grid.empty();
            $('.js-empty-state').removeClass('is-hidden');
            return;
        }

        $('.js-empty-state').addClass('is-hidden');
        grid.html(filtered.map((course) => renderCourseCard(course, inCart)).join(''));
    }

    function openCart() {
        $('.js-cart-drawer').addClass('is-open');
        $('body').addClass('is-locked');
    }

    function closeCart() {
        $('.js-cart-drawer').removeClass('is-open');
        if (!$('.js-mobile-drawer').hasClass('is-open')) {
            $('body').removeClass('is-locked');
        }
    }

    function openMenu() {
        resetMobileMenu();
        $('.js-mobile-drawer').addClass('is-open');
        $('body').addClass('is-locked');
    }

    function closeMenu() {
        resetMobileMenu();
        $('.js-mobile-drawer').removeClass('is-open');
        if (!$('.js-cart-drawer').hasClass('is-open')) {
            $('body').removeClass('is-locked');
        }
    }

    function showMobileMenuView(view) {
        $('.js-mobile-menu-view').addClass('is-hidden');
        $(`.js-mobile-menu-view[data-view="${view}"]`).removeClass('is-hidden');
        $('.js-mobile-menu-back').toggleClass('is-hidden', view === 'main');
        $('.js-mobile-menu-brand').toggleClass('is-hidden', view !== 'main');
        $('.js-mobile-drawer').attr('data-view', view);
    }

    function resetMobileMenu() {
        showMobileMenuView('main');
    }

    function resetFilters() {
        state.filters = createFilters(bounds);
        state.ranking = null;
        state.search = '';
        state.sortBy = 'all';

        $('.js-search-input').val('');
        $('.js-filter-checkbox').prop('checked', false);
        $('.js-ranking-button').removeClass('is-active');
        $('.js-sort-button').removeClass('is-active').filter('[data-sort="all"]').addClass('is-active');
        $('.js-price-min').val(bounds.price[0]);
        $('.js-price-max').val(bounds.price[1]);
        $('.js-hours-min').val(bounds.hours[0]);
        $('.js-hours-max').val(bounds.hours[1]);
        $('.js-discount-min').val(bounds.discount[0]);
        $('.js-discount-max').val(bounds.discount[1]);

        syncRangeLabels();
        applyCatalogFilters();
    }

    function updateRangeState() {
        const rangePair = (minSelector, maxSelector) => {
            const min = Number($(minSelector).val());
            const max = Number($(maxSelector).val());
            return [Math.min(min, max), Math.max(min, max)];
        };

        state.filters.priceRange = rangePair('.js-price-min', '.js-price-max');
        state.filters.hourRange = rangePair('.js-hours-min', '.js-hours-max');
        state.filters.discountRange = rangePair('.js-discount-min', '.js-discount-max');

        syncRangeLabels();
        applyCatalogFilters();
    }

    function bindEvents() {
        $(document)
            .on('click', '.js-open-cart', openCart)
            .on('click', '.js-close-cart', closeCart)
            .on('click', '.js-open-menu', openMenu)
            .on('click', '.js-close-menu', closeMenu)
            .on('click', '.js-cart-drawer', function handleCartOverlay(event) {
                if (event.target === this) closeCart();
            })
            .on('click', '.js-mobile-drawer', function handleMenuOverlay(event) {
                if (event.target === this) closeMenu();
            })
            .on('click', '.js-mobile-menu-trigger', function handleMobileMenuTrigger() {
                showMobileMenuView(String($(this).data('target') || 'main'));
            })
            .on('click', '.js-mobile-menu-back', function handleMobileMenuBack() {
                const currentView = String($('.js-mobile-drawer').attr('data-view') || 'main');

                if (currentView.startsWith('descubre-')) {
                    showMobileMenuView('descubre');
                    return;
                }

                showMobileMenuView('main');
            })
            .on('click', '.js-add-to-cart', function handleAddToCart() {
                $.ajax({
                    data: { course_id: $(this).data('course-id') },
                    headers: csrfHeaders(app.csrfToken),
                    method: 'POST',
                    url: app.routes.cartAdd,
                }).done((response) => {
                    state.cart = response.cart;
                    updateCartUI();
                }).fail(() => {
                    console.error('No se pudo agregar el curso al carrito.');
                });
            })
            .on('click', '.js-remove-from-cart', function handleRemoveFromCart() {
                $.ajax({
                    headers: csrfHeaders(app.csrfToken),
                    method: 'DELETE',
                    url: `${app.routes.cartRemoveBase}/${$(this).data('course-id')}`,
                }).done((response) => {
                    state.cart = response.cart;
                    updateCartUI();
                    applyCatalogFilters();
                }).fail(() => {
                    console.error('No se pudo eliminar el curso del carrito.');
                });
            })
            .on('input', '.js-search-input', function handleSearchInput() {
                state.search = String($(this).val() || '');
                applyCatalogFilters();
            })
            .on('click', '.js-tag-filter', function handleTagFilter() {
                state.search = String($(this).data('tag') || '');
                $('.js-search-input').val(state.search);
                applyCatalogFilters();
            })
            .on('click', '.js-sort-button', function handleSort() {
                state.sortBy = $(this).data('sort');
                $('.js-sort-button').removeClass('is-active');
                $(this).addClass('is-active');
                applyCatalogFilters();
            })
            .on('click', '.js-ranking-button', function handleRanking() {
                const ranking = $(this).data('ranking');
                state.ranking = state.ranking === ranking ? null : ranking;
                $('.js-ranking-button').removeClass('is-active');
                if (state.ranking) {
                    $(this).addClass('is-active');
                }
                applyCatalogFilters();
            })
            .on('change', '.js-filter-checkbox', function handleCheckboxFilter() {
                const key = FILTER_GROUP_MAP[$(this).data('group')];
                const value = $(this).val();

                if (!key) {
                    return;
                }

                state.filters[key] = this.checked
                    ? [...new Set([...state.filters[key], value])]
                    : state.filters[key].filter((item) => item !== value);

                applyCatalogFilters();
            })
            .on('input', '.js-price-min, .js-price-max, .js-hours-min, .js-hours-max, .js-discount-min, .js-discount-max', updateRangeState)
            .on('click', '.js-clear-filters, .js-clear-search', resetFilters)
            .on('click', '.js-filter-toggle', function handleFilterToggle() {
                const section = $(this).closest('.js-filter-section');
                $('.js-filter-section').not(section).removeClass('is-open');
                section.toggleClass('is-open');
            })
            .on('click', '.js-faq-toggle', function handleFaqToggle() {
                const item = $(this).closest('.faq-item');
                const body = item.find('.faq-item__body');
                const icon = $(this).find('.faq-item__icon');
                const isOpen = item.hasClass('is-open');

                $('.faq-item').removeClass('is-open').find('.faq-item__body').slideUp(180);
                $('.faq-item .faq-item__icon').removeClass('is-open');

                if (!isOpen) {
                    item.addClass('is-open');
                    body.slideDown(180);
                    icon.addClass('is-open');
                }
            });
    }

    $(function init() {
        updateCartUI();
        syncRangeLabels();
        applyCatalogFilters();
        bindEvents();
    });
}
