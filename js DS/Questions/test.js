



function leftRot(rotations)
{
    let count = 0
    let myArr = [1, 2, 3, 4, 5];
   while (rotations > count){
     var result = myArr.shift();
     myArr.push(result);
     count++;
   }
   console.log(myArr);
}

leftRot(4);