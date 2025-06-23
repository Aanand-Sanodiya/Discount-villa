<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/products', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Shoes', 'price' => 753],
        ['id' => 2, 'name' => 'T-Shirt', 'price' => 499],
    ]);
});
