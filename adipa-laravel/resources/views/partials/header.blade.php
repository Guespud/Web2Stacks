<header class="site-header js-site-header">
    <div class="site-header__topbar"></div>
    <div class="site-header__desktop container">
        <div class="site-header__main-row">
            <a class="site-header__brand" href="{{ route('catalog.index') }}">
                <img alt="ADIPA Colombia" src="{{ asset('assets/logo-colombia.webp') }}">
            </a>

            <div class="site-header__search">
                <input type="search" placeholder="¿Qué quieres aprender?">
                <button type="button" aria-label="Buscar">⌕</button>
            </div>

            <div class="site-header__account">
                <span class="site-header__account-link">Iniciar Sesión</span>
                <div class="site-header__register-group">
                    <span class="site-header__register-link">Regístrate</span>
                    <button class="site-header__cart-button js-open-cart" type="button" aria-label="Carrito">
                        <img alt="" aria-hidden="true" src="{{ asset('assets/icon-main-cart.png') }}">
                        <span class="site-header__cart-badge js-cart-count {{ $cartSummary['count'] ? '' : 'is-hidden' }}">{{ $cartSummary['count'] }}</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="site-header__nav-row">
            <button class="site-header__discover" type="button">
                <img alt="" aria-hidden="true" src="{{ asset('assets/icons-whatsapp.svg') }}">
                <span>Descubre ADIPA</span>
                <span class="site-header__chevron">▼</span>
            </button>
            <nav class="site-header__nav">
                @foreach ($headerNav as $item)
                    <a class="site-header__nav-item {{ !empty($item['active']) ? 'is-active' : '' }} {{ !empty($item['bold']) ? 'is-bold' : '' }}" href="{{ route('catalog.index') }}">
                        @if (!empty($item['badge']))
                            <span class="site-header__badge {{ $item['badge'] === 'Gratis' ? 'is-free' : '' }}">{{ $item['badge'] }}</span>
                        @endif
                        <span>{{ $item['label'] }}</span>
                        @if (!empty($item['chevron']))<span class="site-header__chevron">▼</span>@endif
                    </a>
                @endforeach
            </nav>
        </div>
    </div>

    <div class="site-header__mobile container">
        <button class="site-header__hamburger js-open-menu" type="button" aria-label="Abrir menú">
            <span></span><span></span><span></span>
        </button>
        <a class="site-header__brand" href="{{ route('catalog.index') }}">
            <img alt="ADIPA Colombia" src="{{ asset('assets/logo-colombia.webp') }}">
        </a>
        <div class="site-header__mobile-actions">
            <button class="site-header__search-bubble" type="button" aria-label="Buscar">⌕</button>
            <button class="site-header__cart-button js-open-cart" type="button" aria-label="Carrito">
                <img alt="" aria-hidden="true" src="{{ asset('assets/icon-main-cart.png') }}">
                <span class="site-header__cart-badge js-cart-count {{ $cartSummary['count'] ? '' : 'is-hidden' }}">{{ $cartSummary['count'] }}</span>
            </button>
        </div>
    </div>
</header>

<div class="mobile-drawer js-mobile-drawer">
    <div class="mobile-drawer__rail">
        <button class="mobile-drawer__hamburger js-close-menu" type="button" aria-label="Cerrar menú"><span></span><span></span><span></span></button>
        <div class="mobile-drawer__fill"></div>
    </div>
    <aside class="mobile-drawer__panel" aria-label="Navegación móvil">
        <div class="mobile-drawer__header">
            <div>
                <span class="mobile-drawer__eyebrow">Navegacion</span>
                <a class="mobile-drawer__brand" href="{{ route('catalog.index') }}">
                    <img alt="ADIPA Colombia" src="{{ asset('assets/logo-colombia.webp') }}">
                </a>
            </div>
            <button class="mobile-drawer__close js-close-menu" type="button" aria-label="Cerrar menú">×</button>
        </div>

        <div class="mobile-drawer__nav-shell">
            <nav class="mobile-drawer__nav">
                @foreach ($headerNav as $item)
                    <a class="mobile-drawer__item" href="{{ route('catalog.index') }}">
                        <span class="{{ !empty($item['bold']) ? 'is-strong' : '' }}">{{ $item['label'] }}</span>
                        <span class="mobile-drawer__item-meta">
                            @if (!empty($item['badge']))
                                <span class="mobile-drawer__badge {{ $item['badge'] === 'Gratis' ? 'is-free' : '' }}">{{ $item['badge'] }}</span>
                            @endif
                            @if (!empty($item['chevron']))<span class="mobile-drawer__item-chevron">›</span>@endif
                        </span>
                    </a>
                @endforeach
                <button class="mobile-drawer__item" type="button">
                    <span>Descubre ADIPA</span>
                    <span class="mobile-drawer__item-meta"><span class="mobile-drawer__item-chevron">›</span></span>
                </button>
            </nav>
        </div>

        <div class="mobile-drawer__footer">
            <div class="mobile-drawer__auth">
                <button class="mobile-drawer__login" type="button">Iniciar Sesion</button>
                <button class="mobile-drawer__register" type="button">Registrate</button>
            </div>
            <div class="mobile-drawer__contact">
                <div class="mobile-drawer__contact-copy">
                    <span>Contacto rapido</span>
                    <strong>Escribenos por WhatsApp</strong>
                </div>
                <button class="mobile-drawer__whatsapp" type="button" aria-label="WhatsApp">
                    <img alt="" aria-hidden="true" src="{{ asset('assets/icons-whatsapp.svg') }}">
                </button>
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
