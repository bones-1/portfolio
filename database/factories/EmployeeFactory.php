<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fName' => fake() -> firstName(),
            'lName' => fake() -> lastName(),
            'title' => fake() -> jobTitle(),
            'address' => fake() -> streetAddress()
        ];
    }
}
// 'manager' => foriegn ID for manager ID
// 'employer' foreign ID for company name(primary key)
