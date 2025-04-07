<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductsFactory> */
    use HasFactory;

    private static Product $instance;
    protected  $cache;

    protected function __construct() {}
    protected function __clone() {}

    /**
     * Returns a Singleton instance
     *
     * @return $this
     * */
    public static function getInstance(): Product
    {
        if (! isset(static::$instance)) {
            static::$instance = new static();
        }


        return static::$instance;
    }

    /**
     * Return all items from the cache or database if cache has not been instantiated
     * @return Collection<array, Product>
     * */
    public function getAll()
    {
        if ( $this -> cache === null) {
            $this -> cache = $this -> all([
                'name',
                'id',
                'category',
                'stocked',
                'price',
            ]);
        }

        return $this -> cache;
    }
}
