<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WhiteboardController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('homes.get');

Route::get("/whiteboard", [WhiteboardController::class, 'index']);
Route::get("/whiteboard/{product}", [WhiteboardController::class, 'show']);
// Route::get("/whiteboard/{?}", [WhiteboardController::class, 'index']);
