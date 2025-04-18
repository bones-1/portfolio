<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //id
            'name' => fake() -> company(),
            'trn' => fake() -> uuid(),
            'produce' => fake() -> randomElement(['Vegetables', 'Fruits', 'Meats']),
            'source' => fake() -> randomElement(['local', 'imports'])
            // 'employees' => //count of employees and managers
        ];
    }
}
