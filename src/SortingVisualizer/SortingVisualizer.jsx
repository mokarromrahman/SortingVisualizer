import React from 'react';
import './SortingVIsualizer.css';
import * as SortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';

export default class SortingVisualizer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            array: [],  //this is the main array
        };
    }

    //loading function
    //call resetArray for load
    componentDidMount()
    {
        this.resetArray();
    }

    //creates array with random ints from 5 to 1000
    resetArray()
    {
        const array = [];
        for(let i = 0; i < 310; ++i)
        {
            array.push(randomIntFromInterval(5,730));
        }
        this.setState({array});
    }

    mergeSort()
    {
        //native js sorting algorithm for ordered nums
        const jsSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);
        //console.log('im working');

        console.log(arraysAreEqual(jsSortedArray,sortedArray));
    }

    quickSort()
    {

    }

    heapSort()
    {

    }

    bubbleSort()
    {

    }

    insertionSort()
    {

    }

    selectionSort()
    {

    }
    //each value of the array is mapped to
    render()
    {
        const {array} = this.state;

        //this is mapping each value of the
        //array to a class and giving each member a value
        //and a bar to display
        //key is index because react needs an index for itterables
        return(
            <div className="array-container">
            {array.map((value,idx) => (
                <div 
                className="array-bar" 
                key={idx}
                style={{height: `${value}px`}}></div> 
            ))}
            <br></br>
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.insertionSort()}>Insertion Sort</button>
            <button onClick={() => this.selectionSort()}>Selection Sort</button>
            </div>
            //the generate new button creates a new awway for us
        );
    }
}

//return a random number from min to max value
function randomIntFromInterval(min, max)
{
    //math.random returns 0 to 1
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(array1, array2)
{
    //if the array lengths are not equal then 
    //the arrays are not the same
    if(array1.length !== array2.length)
    {
        return false;
    }

    //if here then the array lenghts are same and we need
    //check if each index of both arrays match
    for(let i = 0; i < array1.length; ++i)
    {
        if(array1[i] !== array2[i])
        {
            return false;
        }
    }

    //If we're here then the arrays are the same
    return true;
}