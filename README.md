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

## Responsivity

The component has two different layouts depending on the width of the viewport.

### Small devices (max-width: 768px)
![image](https://user-images.githubusercontent.com/84267269/172068411-ccc938fa-a32c-4c19-a5e4-81c8a7c2ca09.png)
![image](https://user-images.githubusercontent.com/84267269/172068465-97ed43af-d8d7-4ea3-b3bb-b768b5eeaff0.png)
![image](https://user-images.githubusercontent.com/84267269/172068507-8353e5a1-1e4f-4113-913a-e919ff94c534.png)

### Large devices (min-width: 768px)
![image](https://user-images.githubusercontent.com/84267269/172068789-05772cfa-00c3-4e81-afcd-8555387d79df.png)
![image](https://user-images.githubusercontent.com/84267269/172068837-969cad3c-999d-43ff-a45d-f3b5f627d993.png)
![image](https://user-images.githubusercontent.com/84267269/172068875-900ba96d-de63-486f-9a97-2efd01519602.png)

## Technologies
- React (18.1.0)
- SASS (1.52.1)

__*2022.*__ *Milos Alex*
