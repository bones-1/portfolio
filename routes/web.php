<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WhiteboardController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Index');
});

// Route::get('/', [Controller::class, 'show']);
Route::get("/whiteboard", [WhiteboardController::class, 'index']);

