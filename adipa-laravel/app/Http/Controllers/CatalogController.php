<?php

namespace App\Http\Controllers;

use App\Support\Catalog\CartService;
use App\Support\Catalog\CatalogRepository;
use App\Support\Catalog\PageData;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class CatalogController extends Controller
{
    public function __construct(
        protected PageData $pageData,
        protected CatalogRepository $catalog,
        protected CartService $cartService,
    ) {
    }

    public function index(Request $request): View
    {
        return view('catalog.index', $this->pageData->build($request));
    }

    public function addToCart(Request $request): JsonResponse
    {
        $courseId = (string) $request->string('course_id');

        abort_unless($this->catalog->findCourse($courseId), 404);

        $cartIds = $this->cartService->add($request, $courseId);

        return response()->json([
            'cart' => $this->cartService->summary($cartIds),
            'message' => 'Curso agregado al carrito.',
        ]);
    }

    public function removeFromCart(Request $request, string $courseId): JsonResponse
    {
        $cartIds = $this->cartService->remove($request, $courseId);

        return response()->json([
            'cart' => $this->cartService->summary($cartIds),
            'message' => 'Curso eliminado del carrito.',
        ]);
    }

    public function checkout(Request $request): View
    {
        return view('checkout.index', $this->pageData->build($request));
    }

    public function pay(Request $request): RedirectResponse
    {
        if (empty($this->cartService->ids($request))) {
            return redirect()->route('catalog.index');
        }

        $this->cartService->clear($request);

        return redirect()->route('checkout.success');
    }

    public function success(Request $request): View
    {
        return view('checkout.success', $this->pageData->build($request));
    }
}
