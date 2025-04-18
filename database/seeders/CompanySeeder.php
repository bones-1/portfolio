<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Employee;
use App\Models\Manager;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::factory(10)->afterCreating(function ($company) {
            Manager::factory()->afterCreating(function ($manager) use ($company) {
                Employee::factory(10)->create([
                    'manager_id' => $manager,
                    'company_id' => $company
                ]);
            })->create(['company_id' => $company]);
        })->create();
    }
}
