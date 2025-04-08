<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductsFactory> */
    use HasFactory;

    protected  static $cache;

    public static function searchFor(string $query){
        $result = self::all([
            'name',
            'id',
            'category',
            'stocked',
            'price',
        ])-> where("name", null, $query);

        return $result;
        // return SupportCollection::unwrap($result);
    }

    public static function getAll()
    {
        return self::getInstance()->retrieveAll();
    }


    public static function getInstance(): Product
    {
        return new self();
    }

    public function retrieveAll()
    {
        if ($this->cache === null) {
            $this->cache = $this->all([
                'name',
                'id',
                'category',
                'stocked',
                'price',
            ]);
        }

        return $this->cache;
    }

    public function getRouteKeyName()
    {
        return 'name';
    }
}
