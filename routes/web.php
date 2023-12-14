<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/{all}', function () {
    return view('welcome');
})->where('all','.*');

Route::post('login',[AuthController::class,'login'])->name('login');
Route::post('logout',[AuthController::class,'logout']);