# Password Generator

## Description
This project begins with starter code that sets the styling for the page and tasked us to create the algorithm that generates the password. It also required the prompting of inputs from the user regarding specific characteristics of the password. 

[Deployed Website](https://fenriragni.github.io/pwd-gen/)

![Website-Screenshot](./images/website-screenshot.png)

## Technology Used
|Technology Used|Resource URL|
|----|----|
|HTML| [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)|
| CSS| [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)|
|JavaScript| [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)|
|  Git | [git-scm.com](https://git-scm.com/)

## Usage
The Password Generator can be used to generate a random password by choosing specific characteristics. <br>

If the user chooses a password length that is less than 8 or greater than 128, the generator displays a message informing them the password cannot be that length. If no value is chosen then it outputs you've no chosen no length:

![demo-length](./images/password-length.gif)

After getting a password length, the app asks the user to confirm which characteristics they want for their password. After each confirmation it validates the user choice. The app then prints the password using the characteristics chosen into the main field:

![demo-characteristics](./images/characteristics.gif)

## Code Snippet
```js
function shuffle(array1) {
  var element2;
  for(var element1 = 0; element1 < array1.length; element1++) {
    element2 = randomNumber(array1.length);
    [array1[element1],array1[element2]] = [array1[element2], array1[element1]];
  }
  return array1;
}
```
Used this shuffle function to randomize the elements in the array containing all the characters that the user has chosen to include. Then again to shuffle the password before displaying it to the user.

```js
for(; count < passLength; count++) {
    pass.splice(randomNumber(passLength), 0, includedArray[randomNumber(includedArray.length)]);
  }
```
This loop starts from a count that has already been declared based on how many options the user chose to implement. Our condition is based on the length of the password chosen, this way only adding the remaining number of elements. It also sends the randomly chosen character into a random location along the array within the password length. If the array isn't large enough for the index, splice just adds it to the end of the array.

## Learning Points

Arrays can be used to declare multiple variables at the same time which came in handy when trying to swap two values in array
```js
    [array[0],array[1]] = [array[1],array[0]]; //this declares the value of array[0] with the current value of array[1] and
                                               //the value of array[1] with the current value of array[0]  
                                               //simultaneously
```
Arrays can be combined to be a string using join() with a delineator <br>
Similarly strings can be turned into arrays using split() with a delineator <br>
This project also gave me insight in how to use confirm(), alert(), and prompt() <br>
## Credits

Thanks to [freeCodeCamp](https://www.freecodecamp.org/news/swap-two-array-elements-in-javascript/) to helping me understand how to swap two elements in an array and teaching me that you can make an array of declarations in order to change multiple things at the same time;


## Author Info

Alonso Ampuero <br>
[Twitter](https://www.twitter.com/fenri.ragni) <br>
[Github](https://www.github.com/fenri.ragni) <br>
[Portfolio](https://fenriragni.github.io/pro-portfolio/)