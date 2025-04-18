<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ProjectsController extends Controller
{
    // Index
    public function index(): Response
    {
        return Inertia::render('Projects/Index');
    }

}
