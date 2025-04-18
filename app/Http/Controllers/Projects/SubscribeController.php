<?php

namespace App\Http\Controllers\Projects;

use App\Models\Company;
use App\Models\Employee;
use App\Models\Manager;
use App\Models\Subscriber;
use Illuminate\Http\Request;
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
        $messages = [
            'errors' => [
                'Something with wrong with edit 1!'
            ],
            'messages' => 'Edit 2 was successful.'
        ];

        $messageBag = new MessageBag($messages);

        return Inertia::render('Projects/Subscription/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        dd(
            $request->allFiles()
        );


        $subscriber = new Subscriber;
        $subscriber::make([
            'first_name' => $request->fName,
            'last_name' => $request->lName,
            'email' => $request->email
        ]);
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
