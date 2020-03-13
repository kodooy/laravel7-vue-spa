<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CheckAuthController extends Controller
{
    public function __invoke()
    {
        if (Auth::check()) {
            return response()->json(Auth::user());
        }
    
        return response()->json(null);
    }
}
