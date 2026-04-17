@extends('layouts.app', ['title' => 'Compra exitosa | ADIPA', 'bodyClass' => 'checkout-success-page'])

@section('content')
<section class="checkout-success container">
    <div class="checkout-success__box">
        <span>Pago confirmado</span>
        <h1>Gracias por tu compra</h1>
        <p>Tu compra fue registrada correctamente. El carrito ya fue limpiado y puedes volver al catálogo principal para seguir explorando nuevos cursos.</p>
        <div class="checkout-success__actions">
            <a href="{{ route('catalog.index') }}">Ir al inicio</a>
            <a href="{{ route('checkout.index') }}">Ver checkout vacío</a>
        </div>
    </div>
</section>
@endsection
