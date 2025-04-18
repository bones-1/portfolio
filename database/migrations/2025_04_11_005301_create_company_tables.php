<?php

use App\Models\Company;
use App\Models\Manager;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->uuid('trn');
            $table->tinyText('produce');
            $table->tinyText('source');
            $table->timestamps();
        });

        Schema::create('managers', function (Blueprint $table) {
            $table->id();
            $table->tinyText('fName');
            $table->tinyText('lName');
            $table->foreignIdFor(Company::class)->constrained();
            $table->timestamps();
        });

        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Manager::class)->constrained();
            $table->foreignIdFor(Company::class)->constrained();
            $table->tinyText('fName');
            $table->tinyText('lName');
            $table->tinyText('title');
            $table->text('address');
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
        Schema::dropIfExists('managers');
        Schema::dropIfExists('companies');
    }
};
