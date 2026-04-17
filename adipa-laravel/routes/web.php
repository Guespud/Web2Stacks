<?php

use App\Http\Controllers\CatalogController;
use Illuminate\Support\Facades\Route;

Route::get('/', [CatalogController::class, 'index'])->name('catalog.index');
Route::post('/cart/items', [CatalogController::class, 'addToCart'])->name('cart.add');
Route::delete('/cart/items/{courseId}', [CatalogController::class, 'removeFromCart'])->name('cart.remove');
Route::get('/checkout', [CatalogController::class, 'checkout'])->name('checkout.index');
Route::post('/checkout/pay', [CatalogController::class, 'pay'])->name('checkout.pay');
Route::get('/checkout/success', [CatalogController::class, 'success'])->name('checkout.success');
