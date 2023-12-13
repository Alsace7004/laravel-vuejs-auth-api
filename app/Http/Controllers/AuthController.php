<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //

    public function login(Request $request):JsonResponse{
        $user = User::where('email',$request->email)->first();

        if(Hash($request->password,$user->password)){
            return response()->json([
                'token'=>$user->createToken(time())->plainTextToken,
             
            ]);
        }
    }

    public function dashboard(){
        
    }
}
