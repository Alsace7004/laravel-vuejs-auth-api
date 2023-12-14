<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    //

    public function login1(Request $request):JsonResponse{
        $user = User::where('email',$request->email)->first();

        if(Hash::check($request->password,$user->password)){
            return response()->json([
                'token'=>$user->createToken(time())->plainTextToken,
                'user'=>$user
            ]);
        }
    }
   //login
   public function login(request $request){
        $data = $request->only('email','password');
        $validator = Validator::make($data,[
            'email'=>'required|email',
            'password'=>'required|min:8'
            ],[
            'email.required'    =>'Veuillez remplir ce champ',
            'email.email'       =>'Veuillez entrer une adresse email valide',
            'password.required' =>'Veuillez remplir ce champ',
            'password.min'      =>'Trop court',
        ]);
      
        
        if($validator->fails()){
            return response()->json(['status'=>false,'errors'=>$validator->errors()],422);
        }
     
            if(Auth::attempt($data)){
                $user = Auth::user();
                $request->session()->regenerate();
                return response()->json([
                    'status'=>true,
                    'token'=>$user->createToken(time())->plainTextToken,
                    'user'=>$user
                ]);
            }else{
                return response()->json([
                    'status'=>false,
                    'message'=>'Email ou mot de passe incorrecte'
                ],Response::HTTP_UNAUTHORIZED);
            }

    }
    public function dashboard(){
            return "Hello, am the dashboard page";
    }

    //logout
    public function logout(Request $request)
    {  
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return ['status'=>true];
    }
}
