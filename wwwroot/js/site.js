// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes";
let apikey = "3dba9dcc-1eff-49a0-9d1b-336d371474fd";

async function GetRecipes(recipeName, id, isAllShow) {
    let recp = await fetch(`${apiURL}?search=${recipeName}&key=${apikey}`);
    let result = await recp.json();
    let Recipes = isAllShow ? result.data.recipes : result.data.recipes.slice(0, 5);
    showRecipes(Recipes, id);
}

function showRecipes(recipes, id) {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        type: 'POST',
        url: '/Recipes/GetRecipeCard',
        data: JSON.stringyfy(recipes),
        success: function (htmlResult) {
            $('#' + id).html(htmlResult);
        }
    });
}