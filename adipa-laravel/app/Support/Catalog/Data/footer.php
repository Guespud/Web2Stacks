<?php

return [
    'countries' => [
        ['flag' => '🇨🇱', 'label' => 'Chile', 'href' => 'https://adipa.cl/'],
        ['flag' => '🇲🇽', 'label' => 'México', 'href' => 'https://adipa.mx/'],
        ['flag' => '🇨🇴', 'label' => 'Colombia', 'href' => 'https://adipa.co/'],
        ['flag' => '🌐', 'label' => 'Global', 'href' => 'https://adipa.co/'],
    ],
    'groups' => [
        [
            'title' => 'Programas',
            'links' => [
                ['label' => 'Cursos', 'href' => 'https://adipa.co/cursos/'],
                ['label' => 'Seminarios', 'href' => 'https://adipa.co/seminarios/'],
                ['label' => 'Diplomados', 'href' => 'https://adipa.co/diplomados/'],
            ],
        ],
        [
            'title' => 'Recursos',
            'links' => [
                ['label' => 'Noticias', 'href' => 'https://adipa.co/blog/'],
                ['label' => 'Glosario', 'href' => 'https://adipa.co/glosario/'],
                ['label' => 'Podcast Adipados', 'href' => 'https://adipa.co/podcast-adipados/'],
            ],
        ],
        [
            'title' => 'Conoce ADIPA',
            'links' => [
                ['label' => 'Sobre ADIPA', 'href' => 'https://adipa.co/sobre-adipa/'],
                ['label' => 'Escuelas', 'href' => 'https://adipa.co/escuelas/'],
                ['label' => 'Docentes', 'href' => 'https://adipa.co/docentes/'],
                ['label' => 'Adiprensa', 'href' => 'https://adipa.co/blog/'],
            ],
        ],
        [
            'title' => 'Escuelas',
            'links' => [
                ['label' => 'Educación y Neurodesarrollo', 'href' => route('catalog.index')],
                ['label' => 'Salud Mental Adultos', 'href' => route('catalog.index')],
                ['label' => 'Psicología Organizacional', 'href' => route('catalog.index')],
                ['label' => 'Salud Mental Infantojuvenil', 'href' => route('catalog.index')],
                ['label' => 'Psicosocial Jurídica', 'href' => route('catalog.index')],
            ],
        ],
    ],
    'utility_links' => [
        ['label' => '¿Necesitas ayuda psicológica?', 'href' => 'https://adipa.co/ayuda-psicologica/'],
        ['label' => 'Términos y condiciones', 'href' => 'https://adipa.co/terminos-y-condiciones/'],
        ['label' => 'Centro de Ayuda', 'href' => 'https://adipa.co/centro-de-ayuda/'],
    ],
    'contact' => [
        'phone' => '+573144718655',
        'emails' => ['info@adipa.co', 'sac@adipa.co'],
        'address' => 'Bogotá: Cra 13 # 93 - 35, Oficina OV-494.',
    ],
    'social_links' => [
        ['label' => 'Facebook', 'network' => 'facebook', 'href' => 'https://www.facebook.com/'],
        ['label' => 'Instagram', 'network' => 'instagram', 'href' => 'https://www.instagram.com/'],
        ['label' => 'YouTube', 'network' => 'youtube', 'href' => 'https://www.youtube.com/'],
        ['label' => 'LinkedIn', 'network' => 'linkedin', 'href' => 'https://www.linkedin.com/'],
        ['label' => 'Spotify', 'network' => 'spotify', 'href' => 'https://open.spotify.com/'],
        ['label' => 'TikTok', 'network' => 'tiktok', 'href' => 'https://www.tiktok.com/'],
    ],
];
