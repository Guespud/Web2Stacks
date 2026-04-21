<header class="site-header js-site-header">
    <div class="site-header__desktop container">
        <div class="site-header__main-row">
            <a class="site-header__brand" href="https://adipa.co">
                <img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}">
            </a>

            <div class="site-header__search-wrap">
                <form action="https://adipa.co" class="site-header__search-form">
                    <div class="site-header__search">
                        <input autocomplete="off" id="header-search" name="s" placeholder="¿Qué quieres aprender?" type="text">
                        <button aria-label="Buscar" type="submit">
                            <img alt="" aria-hidden="true" src="{{ asset('assets/icon-search-menu.png') }}">
                        </button>
                    </div>
                </form>
            </div>

            <div class="site-header__account">
                <a class="site-header__account-link" href="https://adipa.co/sesion/" rel="nofollow">Iniciar Sesión</a>
                <a class="site-header__register-link" href="https://adipa.co/registro/" rel="nofollow">Regístrate</a>
                <button aria-label="Buscar" class="site-header__icon-button" type="button">
                    <img alt="" aria-hidden="true" src="{{ asset('assets/icon-search-menu.png') }}">
                </button>
                <button aria-label="Carrito" class="site-header__cart-button js-open-cart" type="button">
                    <img alt="" aria-hidden="true" src="{{ asset('assets/icon-main-cart.png') }}">
                    <span class="site-header__cart-badge js-cart-count {{ $cartSummary['count'] ? '' : 'is-hidden' }}">{{ $cartSummary['count'] }}</span>
                </button>
            </div>
        </div>

        <div class="site-header__nav-row">
            <div class="site-header__nav-left">
                <a
                    class="site-header__whatsapp"
                    href="https://api.whatsapp.com/send?phone=+573144718655&text=Hola, me quiero contactar desde ADIPA"
                    rel="nofollow noreferrer"
                    target="_blank"
                    title="Whatsapp Adipa"
                >
                    <img alt="Teléfono" src="{{ asset('assets/icons-whatsapp.svg') }}">
                </a>

                <div class="site-header__dropdown site-header__dropdown--discover">
                    <button class="site-header__dropdown-trigger" type="button">
                        <span>Descubre ADIPA</span>
                        <span class="site-header__chevron">▼</span>
                    </button>
                    <div class="site-header__dropdown-menu">
                        @foreach ($descubreAdipaItems as $item)
                            @if (!empty($item['children']))
                                <div class="site-header__submenu">
                                    <button class="site-header__submenu-trigger" type="button">
                                        <span>{{ $item['label'] }}</span>
                                        <span class="site-header__submenu-chevron">›</span>
                                    </button>
                                    <div class="site-header__submenu-menu">
                                        @foreach ($item['children'] as $child)
                                            <a class="site-header__dropdown-link" href="{{ $child['href'] }}">{{ $child['label'] }}</a>
                                        @endforeach
                                    </div>
                                </div>
                            @else
                                <a class="site-header__dropdown-link" href="{{ $item['href'] }}">{{ $item['label'] }}</a>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>

            <nav class="site-header__nav">
                @foreach ($headerNavDesktop as $item)
                    @if ($item['label'] === 'Recursos')
                        <div class="site-header__dropdown site-header__dropdown--resources">
                            <button class="site-header__nav-item site-header__dropdown-trigger {{ !empty($item['active']) ? 'is-active' : '' }} {{ !empty($item['bold']) ? 'is-bold' : '' }}" type="button">
                                @if (!empty($item['badge']))
                                    <span class="site-header__badge {{ $item['badge'] === 'Gratis' ? 'is-free' : '' }}">{{ $item['badge'] }}</span>
                                @endif
                                <span>{{ $item['label'] }}</span>
                                <span class="site-header__chevron">▼</span>
                            </button>
                            <div class="site-header__dropdown-menu site-header__dropdown-menu--right">
                                @foreach ($recursosSubItems as $sub)
                                    <a class="site-header__dropdown-link" href="{{ $sub['href'] }}">{{ $sub['label'] }}</a>
                                @endforeach
                            </div>
                        </div>
                    @else
                        <a
                            class="site-header__nav-item {{ !empty($item['pinkBg']) ? 'is-pink' : '' }} {{ !empty($item['active']) ? 'is-active' : '' }} {{ !empty($item['bold']) ? 'is-bold' : '' }}"
                            href="{{ $item['href'] }}"
                        >
                            @if (!empty($item['badge']))
                                <span class="site-header__badge {{ $item['badge'] === 'Gratis' ? 'is-free' : '' }}">{{ $item['badge'] }}</span>
                            @endif
                            <span>{{ $item['label'] }}</span>
                        </a>
                    @endif
                @endforeach
            </nav>
        </div>
    </div>

    <div class="site-header__mobile container">
        <button aria-label="Abrir menú" class="site-header__hamburger js-open-menu" type="button">
            <span></span><span></span><span></span>
        </button>
        <a class="site-header__brand site-header__brand--mobile" href="https://adipa.co">
            <img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}">
        </a>
        <div class="site-header__mobile-actions">
            <button aria-label="Buscar" class="site-header__icon-button site-header__icon-button--mobile" type="button">
                <img alt="" aria-hidden="true" src="{{ asset('assets/icon-search-menu.png') }}">
            </button>
            <button aria-label="Carrito" class="site-header__cart-button site-header__cart-button--mobile js-open-cart" type="button">
                <img alt="" aria-hidden="true" src="{{ asset('assets/icon-main-cart.png') }}">
                <span class="site-header__cart-badge site-header__cart-badge--mobile js-cart-count {{ $cartSummary['count'] ? '' : 'is-hidden' }}">{{ $cartSummary['count'] }}</span>
            </button>
        </div>
    </div>
</header>

<div class="mobile-drawer js-mobile-drawer">
    <aside class="mobile-drawer__panel" aria-label="Navegación móvil">
        <div class="mobile-drawer__header">
            <div class="mobile-drawer__header-row">
                <button aria-label="Volver" class="mobile-drawer__back js-mobile-menu-back is-hidden" type="button">
                    <span>‹</span>
                    <span>Volver</span>
                </button>
                <a class="mobile-drawer__brand js-mobile-menu-brand" href="https://adipa.co">
                    <img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}">
                </a>
                <button aria-label="Cerrar menú" class="mobile-drawer__close js-close-menu" type="button">×</button>
            </div>
        </div>

        <div class="mobile-drawer__nav-shell">
            <nav class="mobile-drawer__nav js-mobile-menu-view" data-view="main">
                @foreach ($headerNavMobile as $item)
                    @if ($item['label'] === 'Recursos')
                        <button class="mobile-drawer__item js-mobile-menu-trigger" data-target="recursos" type="button">
                            <span class="{{ !empty($item['bold']) ? 'is-strong' : '' }}">{{ $item['label'] }}</span>
                            <span class="mobile-drawer__item-meta"><span class="mobile-drawer__item-chevron">›</span></span>
                        </button>
                    @else
                        <a class="mobile-drawer__item {{ !empty($item['pinkBg']) ? 'is-pink' : '' }}" href="{{ $item['href'] }}">
                            <span class="{{ !empty($item['bold']) ? 'is-strong' : '' }}">{{ $item['label'] }}</span>
                            @if (!empty($item['badge']))
                                <span class="mobile-drawer__item-meta">
                                    <span class="mobile-drawer__badge {{ $item['badge'] === 'Gratis' ? 'is-free' : '' }}">{{ $item['badge'] }}</span>
                                </span>
                            @endif
                        </a>
                    @endif
                @endforeach
                <button class="mobile-drawer__item js-mobile-menu-trigger" data-target="descubre" type="button">
                    <span>Descubre ADIPA</span>
                    <span class="mobile-drawer__item-meta"><span class="mobile-drawer__item-chevron">›</span></span>
                </button>
            </nav>

            <nav class="mobile-drawer__nav js-mobile-menu-view is-hidden" data-view="recursos">
                <div class="mobile-drawer__section-label">Recursos</div>
                @foreach ($recursosSubItems as $sub)
                    <a class="mobile-drawer__subitem" href="{{ $sub['href'] }}">{{ $sub['label'] }}</a>
                @endforeach
            </nav>

            <nav class="mobile-drawer__nav js-mobile-menu-view is-hidden" data-view="descubre">
                <div class="mobile-drawer__section-label">Descubre ADIPA</div>
                @foreach ($descubreAdipaItems as $item)
                    @if (!empty($item['children']))
                        <button class="mobile-drawer__item js-mobile-menu-trigger" data-target="descubre-{{ \Illuminate\Support\Str::slug($item['label']) }}" type="button">
                            <span>{{ $item['label'] }}</span>
                            <span class="mobile-drawer__item-meta"><span class="mobile-drawer__item-chevron">›</span></span>
                        </button>
                    @else
                        <a class="mobile-drawer__subitem" href="{{ $item['href'] }}">{{ $item['label'] }}</a>
                    @endif
                @endforeach
            </nav>

            @foreach ($descubreAdipaItems as $item)
                @if (!empty($item['children']))
                    <nav class="mobile-drawer__nav js-mobile-menu-view is-hidden" data-view="descubre-{{ \Illuminate\Support\Str::slug($item['label']) }}">
                        <div class="mobile-drawer__section-label">{{ $item['label'] }}</div>
                        @foreach ($item['children'] as $child)
                            <a class="mobile-drawer__subitem" href="{{ $child['href'] }}">{{ $child['label'] }}</a>
                        @endforeach
                    </nav>
                @endif
            @endforeach
        </div>

        <div class="mobile-drawer__footer">
            <div class="mobile-drawer__auth">
                <a class="mobile-drawer__login" href="https://adipa.co/sesion/" rel="nofollow">Iniciar Sesión</a>
                <a class="mobile-drawer__register" href="https://adipa.co/registro/" rel="nofollow">¡Regístrate!</a>
            </div>
            <div class="mobile-drawer__contact">
                <div class="mobile-drawer__contact-copy">
                    <span>Contacto rápido</span>
                    <strong>Escríbenos por WhatsApp</strong>
                </div>
                <a
                    aria-label="WhatsApp"
                    class="mobile-drawer__whatsapp"
                    href="https://api.whatsapp.com/send?phone=+573144718655&text=Hola, me quiero contactar desde ADIPA"
                    rel="nofollow noreferrer"
                    target="_blank"
                >
                    <img alt="" aria-hidden="true" src="{{ asset('assets/icons-whatsapp.svg') }}">
                </a>
            </div>
        </div>
    </aside>
</div>

<div class="cart-drawer js-cart-drawer">
    <aside class="cart-drawer__panel">
        <div class="cart-drawer__header">
            <div>
                <h2>Carrito</h2>
                <p><span class="js-cart-count-label">{{ $cartSummary['count'] }}</span> <span class="js-cart-count-copy">{{ $cartSummary['count_label'] }}</span></p>
            </div>
            <button class="cart-drawer__close js-close-cart" type="button">×</button>
        </div>
        <div class="cart-drawer__body js-cart-items">
            @foreach ($cartSummary['items'] as $course)
                @include('partials.course-cart-item', ['course' => $course])
            @endforeach
            @if (empty($cartSummary['items']))
                <div class="cart-drawer__empty">Aún no has agregado cursos al carrito.</div>
            @endif
        </div>
        <div class="cart-drawer__footer">
            <div class="cart-drawer__summary">
                <div><span>Cursos</span><strong class="js-cart-count-label">{{ $cartSummary['count'] }}</strong></div>
                <div><span>Subtotal</span><strong class="js-cart-total">{{ $cartSummary['total_formatted'] }}</strong></div>
                <div class="is-total"><span>Total</span><strong class="js-cart-total-short">{{ $cartSummary['total_short_formatted'] }}</strong></div>
            </div>
            <a class="cart-drawer__checkout js-checkout-button {{ $cartSummary['count'] ? '' : 'is-disabled' }}" href="{{ route('checkout.index') }}">Continuar compra</a>
        </div>
    </aside>
</div>
