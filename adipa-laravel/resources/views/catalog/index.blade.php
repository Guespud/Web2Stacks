@extends('layouts.app', ['title' => 'ADIPA Cursos 2026', 'bodyClass' => 'catalog-page'])

@section('content')
<section class="catalog-hero">
    <div class="catalog-hero__bg">
        <div class="catalog-hero__polygon" aria-hidden="true"></div>
        <div class="catalog-hero__bar1" aria-hidden="true"></div>
        <div class="catalog-hero__bar2" aria-hidden="true"></div>
    </div>
    <div class="container catalog-hero__content">
        <h1>Cursos de Psicología con Certificado en 2026</h1>
        <p>Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a través de nuestros cursos y diplomados</p>
        <div class="catalog-hero__search js-hero-search">
            <span class="catalog-hero__cursor" aria-hidden="true"></span>
            <input class="js-search-input" type="search" placeholder="Buscar" aria-label="Buscar por temática">
            <button type="button" aria-label="Buscar">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="5.5" stroke="currentColor" stroke-width="2"></circle>
                    <path d="M13.5 13.5L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
            </button>
        </div>
        <div class="catalog-hero__tags">
            <span>Buscar:</span>
            @foreach ($featuredTags as $tag)
                <button class="js-tag-filter" data-tag="{{ $tag }}" type="button">{{ $tag }}</button>
            @endforeach
        </div>
    </div>
</section>

<section class="catalog-layout container" id="catalog-page">
    <aside class="filters-panel">
        <div class="filters-panel__ranking">
            @foreach ($filterGroups[0]['options'] as $option)
                <button class="js-ranking-button" data-ranking="{{ $option }}" type="button">{!! $option === 'Ofertas Flash' ? $option . ' ⚡' : $option !!}</button>
            @endforeach
        </div>
        <div class="filters-panel__head">
            <span>Filtros</span>
        </div>
        @foreach (array_slice($filterGroups, 1) as $group)
            <section class="filter-section js-filter-section" data-filter-title="{{ $group['title'] }}">
                <button class="filter-section__toggle js-filter-toggle" type="button">
                    <span>{{ $group['title'] }}</span>
                    <span class="filter-section__chevron">⌄</span>
                </button>
                <div class="filter-section__body">
                    @if (in_array($group['title'], ['Área temática', 'Tipo de programa', 'Modalidad', 'Categoría']))
                        @foreach ($group['options'] as $option)
                            <label>
                                <input
                                    type="checkbox"
                                    class="js-filter-checkbox"
                                    data-group="{{ $group['title'] }}"
                                    value="{{ $option }}"
                                >
                                <span>{{ $option }}</span>
                            </label>
                        @endforeach
                    @endif
                </div>
            </section>
        @endforeach

        <section class="filter-section js-filter-section" data-filter-title="Rango de Precio">
            <button class="filter-section__toggle js-filter-toggle" type="button"><span>Rango de Precio</span><span class="filter-section__chevron">⌄</span></button>
            <div class="filter-section__body is-range">
                <div class="range-values"><span class="js-price-min-label">$0</span><span>-</span><span class="js-price-max-label">$2.200.000</span></div>
                <input class="js-price-min" type="range" min="0" max="2200000" step="10000" value="0">
                <input class="js-price-max" type="range" min="0" max="2200000" step="10000" value="2200000">
            </div>
        </section>
        <section class="filter-section js-filter-section" data-filter-title="Rango de Horas">
            <button class="filter-section__toggle js-filter-toggle" type="button"><span>Rango de Horas</span><span class="filter-section__chevron">⌄</span></button>
            <div class="filter-section__body is-range">
                <div class="range-values"><span class="js-hours-min-label">8</span><span>-</span><span class="js-hours-max-label">350</span></div>
                <input class="js-hours-min" type="range" min="8" max="350" step="1" value="8">
                <input class="js-hours-max" type="range" min="8" max="350" step="1" value="350">
            </div>
        </section>
        <section class="filter-section js-filter-section" data-filter-title="Rango de Descuentos">
            <button class="filter-section__toggle js-filter-toggle" type="button"><span>Rango de Descuentos</span><span class="filter-section__chevron">⌄</span></button>
            <div class="filter-section__body is-range">
                <div class="range-values"><span class="js-discount-min-label">0</span><span>-</span><span class="js-discount-max-label">100</span></div>
                <input class="js-discount-min" type="range" min="0" max="100" step="1" value="0">
                <input class="js-discount-max" type="range" min="0" max="100" step="1" value="100">
            </div>
        </section>

        <button class="filters-panel__clear js-clear-filters" type="button">Borrar filtros</button>
    </aside>

    <div class="catalog-results">
        <div class="catalog-results__toolbar">
            <p>Cursos que te permitirán potenciar tu carrera.</p>
            <div class="catalog-results__sorting">
                <span>Ordenar por</span>
                <button class="js-sort-button is-active" data-sort="all" type="button">Todos</button>
                <button class="js-sort-button" data-sort="highest-price" type="button">Mayor Precio</button>
                <button class="js-sort-button" data-sort="lowest-price" type="button">Menor Precio</button>
                <button class="js-sort-button" data-sort="nearest-date" type="button">Más próximo</button>
            </div>
        </div>

        <div class="catalog-results__empty js-empty-state is-hidden">
            <h3>No se encontraron cursos</h3>
            <p>Intenta con otro término o limpia el filtro para volver a explorar el catálogo completo.</p>
            <button class="js-clear-search" type="button">Limpiar búsqueda</button>
        </div>

        <div class="catalog-results__grid js-course-grid">
            @foreach ($courses as $course)
                @include('partials.course-card', ['course' => $course])
            @endforeach
        </div>
    </div>
</section>

<section class="catalog-cta container">
    <div class="catalog-cta__box">
        <span class="catalog-cta__box-letter" aria-hidden="true">A</span>
        <div class="catalog-cta__box-content">
            <span>Cursos</span>
            <h2>Domina tu conocimiento con nuestro programas certificados de ADIPA</h2>
            <p>Comienza a fortalecer tus habilidades gracias un equipo comprometido contigo, y con la salud mental del mundo.</p>
            <button type="button">Ver todos los cursos</button>
        </div>
    </div>
</section>

<section class="catalog-suggestion container">
    <div class="catalog-suggestion__box">
        <div class="catalog-suggestion__content">
            <div class="catalog-suggestion__left">
                <div class="catalog-suggestion__icon" aria-hidden="true">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                        <path d="M12 3v18M3 12h18" stroke="currentColor" stroke-linecap="round" stroke-width="2.2"/>
                    </svg>
                </div>
                <div>
                    <span class="catalog-suggestion__label">Sugerencias</span>
                    <h3>¿Tienes una idea para un nuevo <br> curso?</h3>
                </div>
            </div>
            <p>En ADIPA valoramos tus sugerencias. Ayúdanos a crear el contenido que te gustaría aprender. Si tienes una propuesta para un curso que te gustaría ver en nuestra plataforma, compártela con nosotros y contribuye a nuestra comunidad de aprendizaje.</p>
        </div>
        <div class="catalog-suggestion__cta">
            <button type="button">Sugerir un curso</button>
            <p>Tu propuesta puede convertirse en el próximo lanzamiento.</p>
        </div>
    </div>
</section>

<section class="catalog-faq container">
    <div class="catalog-faq__head">
        <span>Soporte</span>
        <h2>Preguntas Frecuentes</h2>
    </div>
    <div class="catalog-faq__list">
        @foreach ($faqItems as $index => $item)
            <article class="faq-item {{ $index === 0 ? 'is-open' : '' }}">
                <button class="faq-item__toggle js-faq-toggle" type="button">
                    <span>{{ $item['question'] }}</span>
                    <span>{{ $index === 0 ? '−' : '+' }}</span>
                </button>
                <div class="faq-item__body" @if($index !== 0) style="display:none" @endif>
                    <p>{{ $item['answer'] }}</p>
                </div>
            </article>
        @endforeach
    </div>
</section>
@endsection
