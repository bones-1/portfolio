<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WhiteboardController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('homes.get');

Route::get("/whiteboard", [WhiteboardController::class, 'index'])->name('whiteboards.index');
Route::get("/whiteboard/{product:name}", [WhiteboardController::class, 'show'])->name('whiteboards.show');
