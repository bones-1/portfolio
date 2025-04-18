<?php

namespace App\Http\Controllers\Projects;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\MessageBag;
use Inertia\Inertia;

class MarketController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return  Inertia::render('Projects/Market/Index')->with(['products' => Product::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $name)
    {
        $result = Product::firstWhere('name', $name);

        if ($result === null) $result = ['name' => 'Not Found', 'price' => 0, 'category' => 'Item Not Found'];

        return  Inertia::render('Projects/Market/Show')->with(['product' => $result]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
