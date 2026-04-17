<?php

namespace App\Support\Catalog;

use Illuminate\Http\Request;

class PageData
{
    public function __construct(
        protected CatalogRepository $catalog,
        protected CartService $cartService,
    ) {
    }

    public function build(Request $request): array
    {
        $cartIds = $this->cartService->ids($request);

        return [
            'courses' => $this->catalog->courses(),
            'featuredTags' => $this->catalog->featuredTags(),
            'filterGroups' => $this->catalog->filterGroups(),
            'headerNav' => $this->catalog->headerNav(),
            'footerData' => $this->catalog->footer(),
            'faqItems' => $this->catalog->faqItems(),
            'catalogBounds' => [
                'price' => config('catalog.price_bounds'),
                'hours' => config('catalog.hour_bounds'),
                'discount' => config('catalog.discount_bounds'),
            ],
            'cartSummary' => $this->cartService->summary($cartIds),
        ];
    }
}
