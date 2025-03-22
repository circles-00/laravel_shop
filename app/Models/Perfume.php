<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Perfume extends Model
{
    protected $fillable = ['name', 'price', 'picture', 'quantity'];

    public function category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }
}
