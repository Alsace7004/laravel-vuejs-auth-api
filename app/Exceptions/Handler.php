<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

   
    protected function unauthenticated($request,AuthenticationException $exception)
    {
        /* if($request->expectsJson()){
            return response()->json(['error'=>'Unauthenticated..'],401);
        }
        return redirect()->guest(route('auth.login')); */
        abort(response()->json([
            'status' => false,
            'error' => 'Unauthenticated...'], 401));

    }
}
