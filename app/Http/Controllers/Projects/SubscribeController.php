<?php

namespace App\Http\Controllers\Projects;

use Pest\Support\Str;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

// TODO: Create a FormRequest for subscriptions and products search
class SubscribeController
{
    /**
     * Display a listing of the resource.
     */
    public function index() {}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Projects/Subscription/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'firstName' => 'required|min:2',
            'lastName' => 'required|min:2',
            'email' => 'required|unique:subscribers',
            'avatar' => 'required',
        ]);

        if ($validator->fails())
            return \to_route('projects.subscribes.create')
                ->withErrors($validator)
                ->withInput();


        $subscriber = new Subscriber([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'email' => $request->email
        ]);
        $subscriber->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
