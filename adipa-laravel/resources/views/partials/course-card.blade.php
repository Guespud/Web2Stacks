<article class="course-card js-course-card" data-course-id="{{ $course['id'] }}">
    <div class="course-card__media">
        <div class="course-card__media-logo">
            <img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}">
        </div>
        <div class="course-card__badge">
            <span class="course-card__badge-dot"></span>
            <span>{{ $course['mode'] === 'En Vivo' ? 'En vivo' : $course['mode'] }}</span>
            <span class="course-card__badge-alert">!</span>
        </div>
    </div>
    <div class="course-card__body">
        <h3>{{ $course['title'] }}</h3>
        <div class="course-card__meta">
            <span class="course-card__meta-item">
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                    <rect x="3.25" y="4.75" width="13.5" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M6.5 3.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M13.5 3.5V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3.75 8.25H16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                Inicio: {{ $course['start_date'] }}
            </span>
            <span class="course-card__meta-divider"></span>
            <span class="course-card__meta-item">{{ $course['status'] ?? 'En progreso' }}</span>
        </div>
        <div class="course-card__price-row">
            @if (!empty($course['old_price']))
                <span class="course-card__old-price">{{ $course['old_price'] }}</span>
            @endif
            <strong>{{ $course['price'] }}</strong>
            @if (!empty($course['discount']))
                <span class="course-card__discount">{{ $course['discount'] }}</span>
            @endif
        </div>
        <div class="course-card__actions">
            <button class="course-card__detail" type="button">Ver detalle +</button>
            <div class="course-card__cart-actions js-card-cart-actions"></div>
        </div>
    </div>
</article>
