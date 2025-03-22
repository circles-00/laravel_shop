<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ShopController;

Route::get('/', [HomePageController::class, 'index'])->name('home');
Route::get('/shop', [ShopController::class, 'index'])->name('home');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
