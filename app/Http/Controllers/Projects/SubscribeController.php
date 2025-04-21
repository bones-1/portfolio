<?php

namespace App\Http\Controllers\Projects;

use App\Models\Company;
use App\Models\Employee;
use App\Models\Manager;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;
use Inertia\Inertia;

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
            'fName' => 'required|min:2',
            'lName' => 'required|min:2',
            'email' => 'required|unique:subscribers',
        ]);

        if ($validator->fails())
            return \to_route('projects.subscribes.create')
                ->withErrors($validator)
                ->withInput();


        $subscriber = new Subscriber([
            'first_name' => $request->fName,
            'last_name' => $request->lName,
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
