<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use League\CommonMark\CommonMarkConverter;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user:id,name')->latest()->get();
        return Inertia::render('Posts/Index', [
            'posts' => $posts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * @param \App\Http\Requests\StorePostRequest $request
     * @return Illuminate\Http\Response
     */
    public function store(StorePostRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $user = Auth::user();
        $post = new Post();
        $post->user_id = $user->id;
        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();


        return redirect(route('posts.index'));
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $post = Post::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            Log::error($e);
            abort(404);
        }
        return Inertia::render('Posts/Show', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
