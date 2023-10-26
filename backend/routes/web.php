<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuestsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});




Auth::routes();

Route::get('/home', [App\Http\Controllers\GuestsController::class, 'index'])-> name('home');
//Ruta para eliminar usuario con nombre guests.destroy
Route::delete('/home/{id}', [GuestsController::class, 'destroy'])->name('guests.destroy');