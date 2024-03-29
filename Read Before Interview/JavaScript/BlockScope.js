// node BlockScope.js

// {} curly braces are called block

let fruit = "Apple"
{
  {
    let fruit = "Orange"
    {
      {
        console.log(34, fruit); // Orange
      }
      console.log(36, fruit); // Orange
    }
    console.log(38, fruit); // Orange
  }
  console.log(40, fruit); // Apple
}
console.log(42, fruit); // Apple