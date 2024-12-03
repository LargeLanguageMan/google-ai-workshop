// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

let parsedInput: string;

interface Recipe {
    recipeName: string;
  }

const recipes: Recipe []  = [];
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const prompt = `List a few popular cookie recipes using this JSON schema:

remove object type 'json' in your response
Recipe = {'recipeName': string}
Return: Array<Recipe>`;


/**
 * 
 * @param prompt 
 * @returns string
 */
async function cleanPrompt(prompt: string) {
    const output = await model.generateContent(prompt);
    const parsedInput = output.response.text();
    const cleanPrompt = `clean this objecst so that it removes the object type 'json' in your response and removes and unwanted extra space and character
        ${parsedInput}`;
    return cleanPrompt;
}


async function main() {
    const parsedInput = await cleanPrompt(prompt);
    const result = await model.generateContent(parsedInput);
    const recipeNames = result.response.text().split(",");
    for (const recipe of recipeNames) {
        recipes.push({ recipeName: recipe });
    }
    for (const recipe of recipes) {
        recipe.recipeName = recipe.recipeName.trim();
        // recipe.recipeName = recipe.recipeName.replace()
        console.log(recipe.recipeName);
    }

   
}


main();