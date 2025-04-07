<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Inertia\Response;

class WhiteboardController
{

    // public function __construct(protected Product $inventory) {
    // }

    public function index(): Response
    {
        return Inertia::render('Whiteboard/Index', [
            'products' => Product::getInstance()->getAll(),
        ]);
    }
}
