<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? 'ADIPA Cursos 2026' }}</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @stack('head')
</head>
<body class="app-shell {{ $bodyClass ?? '' }}">
    @include('partials.header', [
        'headerNavDesktop' => $headerNavDesktop,
        'headerNavMobile' => $headerNavMobile,
        'recursosSubItems' => $recursosSubItems,
        'descubreAdipaItems' => $descubreAdipaItems,
        'cartSummary' => $cartSummary,
    ])

    <main class="app-main">
        @yield('content')
    </main>

    @unless ($hideFooter ?? false)
        @include('partials.footer', ['footerData' => $footerData])
    @endunless

    <script>
        window.AdipaApp = {!! json_encode([
            'csrfToken' => csrf_token(),
            'routes' => [
                'cartAdd' => route('cart.add'),
                'cartRemoveBase' => url('/cart/items'),
                'checkout' => route('checkout.index'),
            ],
            'cart' => $cartSummary,
            'catalog' => [
                'bounds' => $catalogBounds,
                'courses' => $courses,
                'featuredTags' => $featuredTags,
                'filterGroups' => $filterGroups,
            ],
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) !!};
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
