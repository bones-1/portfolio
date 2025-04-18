<?php

namespace App\Models;

use App\Models\Scopes\ExcludeIds;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory;

    protected static function booted()
    {
        static::addGlobalScope(new ExcludeIds);
    }

    public function manager(){
        return $this -> belongsTo(Manager::class);
    }

    public function fullName(): Attribute {
        return Attribute::make(
            get: fn() => "Hi! My name is {$this -> fName} {$this-> lName}."
        );
    }

    public static function scopeIdsBetween($query, int $a, int $b)
    {
        return $query->where('id', '>=', $a)->where('id', '<=', $b);
    }

}
