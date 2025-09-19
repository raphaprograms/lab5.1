#How did you dynamically create and append new elements to the DOM?

#I used document.createElement('element-type') to create elements and I attached them to elements that I had already selected using document.getElementByID('insert-id) then I used .appendChild() to insert these created elements into the Dom accordingly.

#What steps did you take to ensure accurate updates to the total price?
This part was tricky, I needed to create anew array out of the items that were currently being displayed in the cart by combining the Array.from() method with the querySelectorAll() and calling that on the cart rather than the document **Thanks Google* 

Doing this allowed me to index the list items separately from the  pricesTracker array, I was having issues syncing the data because mistakenly I didn't build the data into the functionality, lesson learned for the future. Then I was able to track the index of each item using indexOf()(Shouts out Lab 4.2) and from there it was straight forward mostly, just use the reduce() method to  to sum the numbers of the array with each click of the remove button and each time a product was added.

#How did you handle invalid input for product name or price?
I used and if statement to test a few edge cases and to make sure certain obvious errors would not be allowed as inputs.

#What challenges did you face when implementing the remove functionality?
The main challange when implementing romove was the one mentioned in question two, I could easily remove the item from the Price array or the Dom separately or for example for one data type but I made the mistake of not storing the price and name separately but I worked it out as stated above.