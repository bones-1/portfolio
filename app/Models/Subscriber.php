<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subscriber extends Model
{
    use SoftDeletes;

    protected $fillable = ['first_name', 'last_name', 'email'];

        protected static function booted()
    {
        static::addGlobalScope('not2', function(Builder $builder){
            $builder ->where('id', '!=', 2);
        });
    }

    public function newCollection(array $models = [])
    {
        
    }
}
