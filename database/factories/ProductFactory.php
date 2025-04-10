<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $result = $this->matchNameCategory();

        return [
            'category' => $result['category'],
            'price' => fake()->numberBetween(1, 9),
            'name' => $result['name'],
            'stocked' => fake()->boolean(70),
        ];
    }

    protected function matchNameCategory()
    {
        //consider putting this in a service container
        $faker = \Faker\Factory::create();
        $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));

        $category = fake()->randomElement(['Fruit', 'Vegetables', 'Meats']);
        $name = '';

        switch ($category) {
            case 'Fruit':
                $name = $faker->unique()->fruitName();
                break;
            case 'Vegetables':
                $name = $faker->unique()->vegetableName();
                break;
            case 'Meats':
                $name = $faker->unique()->meatName();
                break;

            default:
                $name = '';
        }

        return [
            'name' => (string) $name,
            'category' => (string) $category,
        ];
    }
}
