<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PerfumeResource\Pages;
use App\Filament\Resources\PerfumeResource\RelationManagers;
use App\Models\Category;
use App\Models\Perfume;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PerfumeResource extends Resource
{
    protected static ?string $model = Perfume::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->required(),
                Forms\Components\FileUpload::make('picture')->required(),
                Forms\Components\TextInput::make('price')->required(),
                Forms\Components\TextInput::make('quantity')->required(),
                Forms\Components\Select::make('Perfumes')->relationship('category', 'name')->searchable()
                    ->options(function () {
                        return Category::pluck('name', 'id')->toArray();
                    }),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\ImageColumn::make('picture'),
                Tables\Columns\TextColumn::make('price'),
                Tables\Columns\TextColumn::make('quantity'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ReplicateAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPerfumes::route('/'),
            'create' => Pages\CreatePerfume::route('/create'),
            'edit' => Pages\EditPerfume::route('/{record}/edit'),
        ];
    }
}
