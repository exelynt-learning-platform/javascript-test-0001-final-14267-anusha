let rows = 5;
for(let i = 1; i <= rows; i++)
{
let output ="";
for(let s = 1; s <= rows - i; s++)
{
  output += "";
}
  output += "*";
if(i > 1)
{
  for(let s = 1; s <= (2*i-3); s++)
  {
    output += "";
  }
  output += "*";
 }
  console.log(output);
}
  for(let i = rows -1; i>= 1; i--)
  {
    let output = "";
    for (let s = 1; s <= rows - i; s++)
    {
      output += "";
    }
    output += "*";
    if(i > 1){
      for(let s = 1; s <= (2*i-3); s++)
      {
        output += "";
      }
      output += "*";
  }
console.log(output);
}
  
