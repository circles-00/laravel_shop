<?php
namespace App\Http\Controllers;

use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {

        $data = [
            'data' => 'Hey man!',
        ];

        // Pass data to the React component
        return Inertia::render('index', $data);
    }
}
