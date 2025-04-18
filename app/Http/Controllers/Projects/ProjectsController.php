<?php

namespace App\Http\Controllers\Projects;

use App\Models\Product;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Request;
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
