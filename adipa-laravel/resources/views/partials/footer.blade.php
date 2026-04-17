<footer class="site-footer">
    <section class="container site-footer__grid">
        <div class="site-footer__brand-card">
            <img alt="ADIPA" src="{{ asset('assets/logo-colombia.webp') }}">
            <p>Estamos presentes en:</p>
            <div class="site-footer__countries">
                @foreach ($footerData['countries'] as $country)
                    <a href="{{ $country['href'] }}" target="_blank">{{ $country['flag'] }} {{ $country['label'] }}</a>
                @endforeach
            </div>
        </div>
        <div class="site-footer__content">
            <div class="site-footer__groups">
                @foreach ($footerData['groups'] as $group)
                    <section>
                        <h3>{{ $group['title'] }}</h3>
                        @foreach ($group['links'] as $link)
                            <a href="{{ $link['href'] }}" @if(str_starts_with($link['href'], 'http')) target="_blank" @endif>{{ $link['label'] }}</a>
                        @endforeach
                    </section>
                @endforeach
            </div>
            <div class="site-footer__contact-grid">
                <section>
                    <h3>Contacto</h3>
                    <p><strong>CO</strong> {{ $footerData['contact']['phone'] }}</p>
                    <p>{{ implode(' - ', $footerData['contact']['emails']) }}</p>
                    <p>{{ $footerData['contact']['address'] }}</p>
                </section>
                <section>
                    <h3>Enlaces útiles</h3>
                    @foreach ($footerData['utility_links'] as $link)
                        <a href="{{ $link['href'] }}" target="_blank">{{ $link['label'] }}</a>
                    @endforeach
                </section>
            </div>
        </div>
        <aside class="site-footer__newsletter">
            <h3>Regístrate en nuestro newsletter</h3>
            <label><span>Nombre*</span><input type="text"></label>
            <label><span>Correo*</span><input type="email"></label>
            <label><span>¿Cuántos correos al mes deseas recibir?*</span><select><option>Selecciona</option><option>1 a 2 correos</option><option>3 a 4 correos</option><option>5 o más correos</option></select></label>
            <button type="button">Enviar</button>
            <p>©Adipa 2026 - Todos los derechos reservados</p>
        </aside>
    </section>
    <div class="container site-footer__bottom">
        @foreach ($footerData['social_links'] as $social)
            <a href="{{ $social['href'] }}" target="_blank" aria-label="{{ $social['label'] }}">
                @switch($social['network'])
                    @case('facebook')
                        <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="18"><path d="M14 8h2V4h-2.5C10.9 4 9 5.9 9 8.5V11H7v4h2v5h4v-5h2.4l.6-4H13v-1.9c0-.7.3-1.1 1-1.1Z"/></svg>
                        @break
                    @case('instagram')
                        <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="18"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></svg>
                        @break
                    @case('youtube')
                        <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="18"><path d="M20 9.5c0-1.2-.9-2.2-2.1-2.3C16.4 7 14.4 7 12 7s-4.4 0-5.9.2C4.9 7.3 4 8.3 4 9.5v5c0 1.2.9 2.2 2.1 2.3 1.5.2 3.5.2 5.9.2s4.4 0 5.9-.2c1.2-.1 2.1-1.1 2.1-2.3v-5Z"/><path d="m10 10 5 2-5 2v-4Z"/></svg>
                        @break
                    @case('linkedin')
                        <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="18"><path d="M7 9v8M7 6.5h.01M11 17V9h4a3 3 0 0 1 3 3v5M11 12a3 3 0 0 1 3-3"/></svg>
                        @break
                    @case('spotify')
                        <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="18"><circle cx="12" cy="12" r="9"/><path d="M8 10.5c2.8-1 5.6-.9 8 .5M8.7 13.2c2.2-.7 4.4-.6 6.4.4M9.5 15.7c1.7-.5 3.3-.4 4.8.3"/></svg>
                        @break
                    @case('tiktok')
                        <svg fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24" width="18"><path d="M14 5v8.5a2.5 2.5 0 1 1-2.5-2.5"/><path d="M14 5c.8 1.7 2.1 2.7 4 3"/></svg>
                        @break
                @endswitch
            </a>
        @endforeach
    </div>
</footer>
