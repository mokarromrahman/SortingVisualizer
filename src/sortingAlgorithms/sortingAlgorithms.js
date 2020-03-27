//export const getMergeSortANimations

export const mergeSort = (array, animations = []) =>                         //O(nlogn) time complexity
{                                                   //O(n) space complexity           
    //console.log('im working');

    if(array.length === 1)
    {
        return array;
    }

    //find middle index
    const middleIndex = Math.floor(array.length/2);
    //take the first half and sort it
    const firstHalf = mergeSort(array.slice(0, middleIndex));
    //take the 2nd half and sort it
    const secondHalf = mergeSort(array.slice(middleIndex));
    //final sorted array
    const sortedArray = [];
    let i = 0;
    let j = 0;

    //look at both of the arrays and 
    //compare and put the smaller number into 
    //the sorted array
    while(i < firstHalf.length && j < secondHalf.length)
    {
        //found the smaller in first half
        //so add to the sorted array
        if(firstHalf[i] < secondHalf[j])
        {
            sortedArray.push(firstHalf[i]);
            i++;
        }
        //the smallers is in the 2nd half
        //so add to the sorted array
        else
        {
            sortedArray.push(secondHalf[j]);
            j++;
        }
    }

    //push remaining numbers from 
    //first half into the sorted array
    while(i < firstHalf.length)
    {
        sortedArray.push(firstHalf[i]);
        i++;
    }

    //push remaining numbers from 
    //first half into the sorted array
    while(j < secondHalf.length)
    {
        sortedArray.push(secondHalf[j]);
        j++;
    }

    //return the sorted array at each step
    return sortedArray;
}

export const selectionSort = array =>
{
    for(let i = 0; i < array.length - 1; ++i)
    {
        //hold the index of the current min value
        let  minIndex = i;
        for(let j = i + 1; j < array.length; ++j)
        {
            //if the number at the current minIndex is 
            //greater than j, then j is the current
            //index of the smallest number
            //there fore reassign minIndex
            if(array[minIndex] > array[j])
            {
                minIndex = j;
            }
        }

        //Swap the min value into the correct area
        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }

    //return the sorted array
    return array;
}

export const insertionSort = array =>
{
    //start at index 1 for quicksort because
    //we need to check that 
    for(let i = 1; i < array.length; ++i)
    {
        //check each value and keep going left on the
        //array as long as the current number is smaller than
        //the number on the left
        let j = i;
        while(j > 0 && array[j - 1] > array[j])
        {
            //swap
            let temp = array[j - 1];
            array[j - 1] = array[j];
            array[j] = temp;
            //decrement the index and keep going
            j--;
        }
    }
    return array;
}