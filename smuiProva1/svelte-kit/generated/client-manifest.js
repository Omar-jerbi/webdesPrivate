export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\components\\burgerButton.svelte"),
	() => import("..\\..\\src\\routes\\components\\header.svelte"),
	() => import("..\\..\\src\\routes\\components\\headerDrawer.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"components/burgerButton": [[0, 2], [1]],
	"components/header": [[0, 3], [1]],
	"components/headerDrawer": [[0, 4], [1]]
};