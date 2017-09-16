<?php

namespace App\Http\Controllers;

use Response;
use Validator;
use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    private $user;

    public function __construct(
        User $user
    )
    {
        $this->user = $user;
    }

    public function index()
    {
        return Response::json($this->user->all());
    }

    public function show($id)
    {
        return Response::json($this->user->find($id));
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'email' => 'required|email',
            'password' => 'required|alpha_num',
            'name' => 'required'
        ]);

        if($validator->fails())
        {
            return Response::json($validator->errors()->all(), 400);
        }

        $data['api_token'] = str_random(60);
        $user = $this->user->create($data);

        return Response::json($user);
    }

    public function destroy($id)
    {
        if(!(is_numeric($id) && $this->user->find($id)->exists()))
        {
            return Response::json('Invalid ID number, no user deleted',400);
        }

        if($this->user->delete() !== false)
        {
            return Response::json('Unable to delete', 400);
        }

        return Response::json('User account deleted');
    }
}
