@extends('layouts.app', ['title' => 'Checkout | ADIPA', 'bodyClass' => 'checkout-page'])

@section('content')
<section class="checkout-layout container">
    @if ($cartSummary['count'] === 0)
        <div class="checkout-empty">
            <span>Carrito vacío</span>
            <h1>No hay cursos para continuar la compra</h1>
            <p>Agrega uno o más cursos desde el catálogo y vuelve aquí para revisar el resumen de tu compra.</p>
            <a href="{{ route('catalog.index') }}">Ir al inicio</a>
        </div>
    @else
        <div class="checkout-main">
            <div class="checkout-main__head">
                <span>Paso final</span>
                <h1>Revisa tu compra</h1>
                <p>Verifica los cursos agregados antes de confirmar el pago.</p>
            </div>
            <div class="checkout-main__items">
                @foreach ($cartSummary['items'] as $course)
                    <article class="checkout-item">
                        <div class="checkout-item__thumb"><img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}"></div>
                        <div class="checkout-item__content">
                            <span>Curso agregado</span>
                            <h2>{{ $course['title'] }}</h2>
                            <p>Acceso individual, un cupo por curso.</p>
                        </div>
                        <div class="checkout-item__price">
                            <span>Precio</span>
                            <strong>{{ $course['price'] }}</strong>
                        </div>
                    </article>
                @endforeach
            </div>
        </div>
        <aside class="checkout-summary">
            <span>Resumen</span>
            <h2>Total a pagar</h2>
            <div class="checkout-summary__box">
                <div><span>Cursos</span><strong>{{ $cartSummary['count'] }}</strong></div>
                <div><span>Subtotal</span><strong>{{ $cartSummary['total_formatted'] }}</strong></div>
                <div class="is-total"><span>Total</span><strong>{{ $cartSummary['total_formatted'] }}</strong></div>
            </div>
            <form action="{{ route('checkout.pay') }}" method="post">
                @csrf
                <button type="submit">Pagar</button>
            </form>
            <a href="{{ route('catalog.index') }}">Seguir comprando</a>
        </aside>
    @endif
</section>
@endsection
