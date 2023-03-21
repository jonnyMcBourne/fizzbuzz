const divisible =(numb,div)=>{return (numb % div === 0)}
const fizzbuzz = (numb) =>
{
    if (typeof numb !== 'number')
    {
        console.log("input should be an number")
        return null
    }
    //is numb is 0
    if (numb === 0)
    {
        return numb
    }

    // multiple of 3 and 5
    if (divisible(numb,3) && divisible(numb,5))
    {
        return "fizzbuzz"
    }
        // multiple of 3
    if (divisible(numb,3))
    {
        return "fizz";
    }
        // multiple of 5
    if (divisible(numb,5))
    {
        return "buzz"
    }
    return numb
};
module.exports =fizzbuzz;

const printnumbers = () =>
{
    for (let i = 0; i <= 50; i++)
{
    console.log(fizzbuzz(i));
}
}
printnumbers();
