<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/email/verify/{id}/{hash}', 'Auth\VerificationController@verify');
Route::view('/{any}', 'spa')->where('any', '.*');
Route::post('/auth/check', 'Auth\CheckAuthController');
Route::put('/password', 'Auth\ChangePasswordController');
Auth::routes(['verify' => true]);
