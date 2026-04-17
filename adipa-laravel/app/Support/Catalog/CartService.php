<?php

namespace App\Support\Catalog;

use Illuminate\Http\Request;

class CartService
{
    public function __construct(protected CatalogRepository $catalog)
    {
    }

    public function ids(Request $request): array
    {
        return $request->session()->get('cart', []);
    }

    public function add(Request $request, string $courseId): array
    {
        $cart = collect($this->ids($request))
            ->push($courseId)
            ->unique()
            ->values()
            ->all();

        $request->session()->put('cart', $cart);

        return $cart;
    }

    public function remove(Request $request, string $courseId): array
    {
        $cart = collect($this->ids($request))
            ->reject(fn ($id) => $id === $courseId)
            ->values()
            ->all();

        $request->session()->put('cart', $cart);

        return $cart;
    }

    public function clear(Request $request): void
    {
        $request->session()->forget('cart');
    }

    public function summary(array $ids): array
    {
        $map = $this->catalog->courseMap();
        $items = array_values(array_filter(array_map(fn ($id) => $map[$id] ?? null, $ids)));
        $total = array_sum(array_column($items, 'price_value'));

        return [
            'items' => $items,
            'count' => count($items),
            'total' => $total,
            'count_label' => count($items) === 1 ? 'curso agregado' : 'cursos agregados',
            'total_short_formatted' => '$' . number_format($total, 0, ',', '.'),
            'total_formatted' => '$' . number_format($total, 0, ',', '.') . ' COP',
        ];
    }
}
