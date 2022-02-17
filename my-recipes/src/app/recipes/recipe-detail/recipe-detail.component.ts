import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //abbimo gia 2 componenti iniettati 
  //activate route ci serve per andare a vedere dove si trvoa il parametro
  constructor(public recipeService: RecipesService, private shoppingList: ShoppingListService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

     this.activateRoute.params.subscribe(
      (params: Params) => {
        if(params.id){
        console.log(params['id']);
        let recipeId = params.id;
        this.recipeService.getRecipe(recipeId);

        }
        }

     );
    //sintassi alternativa
    // let recipeId = this.activateRoute.snapshot.paramMap.get("id");
    // this.recipeService.getRecipe(recipeId); 
  }

  sendToShoppingList() {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

}
