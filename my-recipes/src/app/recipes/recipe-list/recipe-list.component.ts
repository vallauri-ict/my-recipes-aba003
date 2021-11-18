import { Component, OnInit } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:RecipeModel[] = [
    new RecipeModel(
      "Spaghetti alla chitarra",
      "Un particolare tipo di preparazione della pasta",
      "https://www.buttalapasta.it/wp-content/uploads/spaghetti-alla-chitarra-2-1200x898.jpg"
    ),
    new RecipeModel(
      "Lasagne",
      "Tipico primo piatto emiliano, secondo piatto italiano più esportato al mondo",
      "https://media-assets.vanityfair.it/photos/614da3dd3120b0fb33ef79e7/3:2/w_1188,h_792,c_limit/Portrait-Lasagna.jpg"
    ),
    new RecipeModel(
      "Gnocchi alla bava",
      "Primo piatto preparato con formaggi misti, tipico della cucina padana e in particolare del piemonte",
      "https://blog.giallozafferano.it/cuochinprogress/wp-content/uploads/2020/09/gnocchi-alla-bava-def1a.jpg"
    ),
    new RecipeModel(
      "Bonet",
      "Tipico dolce piemontese preparata con amaretti e caramello",
      "https://www.giallozafferano.it/images/2-220/Bonet_450x300.jpg"
    )
  ];
  selectedRecipe: RecipeModel;

  constructor() { 

    this.selectedRecipe=this.recipes[0];
  }

  ngOnInit(): void {
  }

}
