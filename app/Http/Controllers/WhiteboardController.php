<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;

class WhiteboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Whiteboard/Index')->with([
            'products' => Product::getAll()
        ]);
    }

    public function show(Product $product)
    {
        $result = $product->except(['created_at', 'updated_at']);

        return Inertia::render('Whiteboard/Show')->with('product', $result);
    }
}
