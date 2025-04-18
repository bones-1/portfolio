<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Manager extends Model
{
    /** @use HasFactory<\Database\Factories\ManagerFactory> */
    use HasFactory;


    /**
     * One-to-One relationship
     *
     * @return HasOne<Company, Manager>
     */
    public function company(){
        return $this -> belongsTo(Company::class);
    }

    /**
     * One-to-Many relationship
     *
     * @return HasMany<Employee, Manager>
     */
    public function employees(){
        return $this->hasMany(Employee::class);
    }

    /**
     * Custom accessor for Manager's full name.
     *
     * @return Attribute
     */
    public function name(): Attribute
    {
        return Attribute::make(
            get: fn($value, $attributes) => "{$attributes['fName']} {$attributes['lName']}"
        );
    }
}
