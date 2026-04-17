<article class="cart-item" data-course-id="{{ $course['id'] }}">
    <div class="cart-item__thumb">
        <img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}">
    </div>
    <div class="cart-item__content">
        <h3>{{ $course['title'] }}</h3>
        <strong>{{ $course['price'] }}</strong>
        <button class="js-remove-from-cart" data-course-id="{{ $course['id'] }}" type="button">Eliminar</button>
    </div>
</article>
