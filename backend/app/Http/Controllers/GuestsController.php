<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Guests;
use Carbon\Carbon;

class GuestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $guest = Guests::all();
        return view('home',["guests" => $guest]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $guest = new Guests();
        $guest->name = $request->name;
        $guest->last_name = $request->last_name;
        $guest->age = $request->age;
        $guest->companions = $request->companions;
        $guest->hour = Carbon::now();
        $guest->save();
        return response(
            //retornar un mensaje de guardado exitosamente
            "guest saved successfully",
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $guest = Guests::find($id);
        $guest -> delete();
        return redirect()->route('home')->with('success', 'Invitado eliminado exitosamente!');;
    }
}
