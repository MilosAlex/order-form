# Order Form

A component, where you can specify the weight and address point of a parcel. 

The user can type in the positive weight value (Küldemény súlya). After that the user can select the destination (Csomagpont). This input works both as a dropdown select and a searchable input.
After filling the form, pressing the “Mentés” button will create a new element in the “Megrendelések” list. “Dátum” is the date and time of the item creation/modification.

The items of the list can be removed or edited using the buttons on their right side. When in editing mode, the form above will be filled with the data of the item. Pressing the “Mentés” button in this case will modify the item. 

The items and the current state of the form are autosaved in the local storage of the browser.

## Execution
The component was built in React with SASS stylesheets.

## Usage
Make sure you have [npm](https://nodejs.org/en/download/) installed.

### Installing

Run the following command at the root of your project:

```sh
npm install
```

### Running

Run the following command at the root of your project:

```sh
npm start
```
You can now view order-form in the browser.

http://localhost:3000

## Input

The component expects an array of destinations (Csomagpontok) as the "points" property.

## Output

The component returns the “Megrendelések” list on every change if needed via the function given as the "setResult" property.

## Components



## Responsivity

The component has two different layouts depending on the width of the viewport.

### Small devices (max-width: 768px)
img img

### Large devices (min-width: 768px)
img img

## Technologies
- React (18.1.0)
- SASS (1.52.1)

__*2022.*__ *Milos Alex*
