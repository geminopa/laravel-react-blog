<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->comment('ユーザーID');
            $table->unsignedBigInteger('category_id')->comment('カテゴリID');
            $table->unsignedBigInteger('tag_id')->comment('タグID');
            $table->string('title', 100)->nullable()->comment('タイトル');
            $table->text('content')->nullable()->comment('本文');
            $table->datetime('posted_at')->nullable()->comment('投稿日時');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
