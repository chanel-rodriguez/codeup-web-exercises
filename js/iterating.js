(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['bob','mike','steve','jordan'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("the number of elements is " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    names.forEach(function(element,index){
        console.log(names[index])
    })

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i =0;i < names.length; i++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array){
        return array[0];
    }
    function second(array){
        return array[1];
    }
    function last(array){
        return array[array.length-1];
    }
    // console.log(first(names));
    // console.log(second(names));
    // console.log(last(names));


    function average(numbers){
        var total = 0;
        numbers.forEach(function(element){
            total += element;
        });
        return total/numbers.length;
    }

    function multiply(array){
        var total =1;
        array.forEach(function (value) {total *=value }); return total;
    }
    console.log(multiply([1,2,3,4,5]));



})();
