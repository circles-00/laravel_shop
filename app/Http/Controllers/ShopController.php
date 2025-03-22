<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Perfume;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $categoryId = (int)(request()->query("categoryId"));
        $price = (request()->query("price"));

        if (!$price) {
            $price = "asc";
        }

        Log::debug("[ShopController][/] params: [categoryId = $categoryId, price=$price]");

        $data = [
            "perfumes" => $categoryId == 0 ? Perfume::orderBy("price", $price)->get() : Perfume::orderBy("price", $price)->where("category_id", "=", $categoryId)->get(),
            "categories" => Category::all()->unshift(["id" => 0, "name" => "All Products"]),
        ];

        return Inertia::render('shop', $data);
    }
}
