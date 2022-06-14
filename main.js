//created a function with no parameters to perform a task, and create an object and return said object.
const createWoodBlock = () => {
    const woodObject = {
        type: 'wood block',
        length: 10,
        materal: 'pine',
        purpose: 'flute'
    }
    return woodObject
    //returns my wood object
    // Return an object with 4 properties.

}
//created a function to interpolate the values of of my wood object
const createBeautifulCarving = (woodObject) => {
    const stringRepresentation = `the ${woodObject.length}-inch ${woodObject.materal} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
    // Return a string representation of the object
    return stringRepresentation
}//returns a string interpolation of of the wood object

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)