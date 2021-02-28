# Angular - The Gilded Rose

This project was created for use in performing The Gilded Rose code kata in a coding dojo setting.
The primary learning objectives of the Gilded Rose are:
 - expose the developers to being dropped into an unfamiliar legacy code base
 - refactoring legacy code without breaking previous functionality
 - adding new features to an existing legacy code base with constraints from the product owner

Additional learning objectives for lengthy code dojo's
 - learning to work and develop in an Angular project
 - improving site design with A11y in mind

 Here are the instructions for The Gilded Rose, also found on the home page of the application when running `ng serve`:

 > Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:
> 
>  - All items have a SellIn value which denotes the number of days we have to sell the item
>  - All items have a Quality value which denotes how valuable the item is
>  - At the end of each day our system lowers both values for every item
> 
>Pretty simple, right? Well this is where it gets interesting:
> - Once the sell by date has passed, Quality degrades twice as fast
> - The Quality of an item is never negative
> - "Aged Brie" actually increases in Quality the older it gets
> - The Quality of an item is never more than 50
> - "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
> - "Backstage passes", like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
>
>We have recently signed a supplier of conjured items. This requires an update to our system:
> - "Conjured" items degrade in Quality twice as fast as normal items
>
> Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you).

Additional feature request time permitting:
 - Add navigation to go between the instructions page and the inventory
 - Make things ADA compliant
    - semantic HTML structure
    - heading levels
    - buttons vs links
    - focus states
    - etc.

*Note: a number of poor practices have been included to facilitate refactoring opportunities

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
