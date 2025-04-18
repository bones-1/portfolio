<?php

use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\Projects\MarketController;
use App\Http\Controllers\Projects\SubscribeController;
use App\Models\Subscriber;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//A.k.A Route::view()
Route::inertia('/', 'Home')->name('homes.get');


Route::prefix('projects')->group(function () {
    Route::get("/", [ProjectsController::class, 'index'])->name('projects.index');

    Route::get('/market', [MarketController::class, 'index'])->name('projects.markets.index');
    Route::get('/market/{name}', [MarketController::class, 'show'])->name('projects.markets.show');

    Route::get('/subscription/create', [SubscribeController::class, 'create'])->name('projects.subscribes.create');
    Route::post('/subscription', [SubscribeController::class, 'store'])->name('projects.subscribes.store');
});
