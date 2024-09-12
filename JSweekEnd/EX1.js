///Ex1.1 
function Boolean(value){
    if(typeof value !== "boolean"){//checks if the input is boolean
        return "uncorrect value";
    }
    if(value){
        return "yes";
    }
        return "no"
    }
    console.log("test EX1.1");
    console.log(Boolean(true));
    console.log(Boolean(false));
    console.log(Boolean(5));

/////////// EX2.1 Sum of the lowest numbers

function LowestNumbers(array1){
    const array2 = array1.toSorted( (a,b)=> b-a); //sort the array
    console.log(array2);
    
    for(let i= 0 ;i<4;i++){//checks if there is atleast 4 positive values
        if(array2[i]<0)
            return "uncorrect input";
    }
    return array2[array2.length-1]+array2[array2.length-2];
    }
    console.log("test EX2.1");
    const array1=[90,5,5,-1,-2];
    const array2=[90,5,5,1,-2,-5];
    console.log(LowestNumbers(array1));///test
    console.log(LowestNumbers(array2));


    //////////Ex2.2 One and Zero - Binary
    function OneZero(array1){
        /// convert the array to binary number
        let num =array1[0];
        for(let i = 1; i <array1.length; i++){
            if(array1[i]!==0 && array1[i]!==1){//checks if there the values 1 or 0
                return "uncorrect input";
            }
            num = num*10 + array1[i];
            console.log(num);
            
        }
        console.log(num);
        
        // for(let i= 0 ;i<4;i++){//checks if there is atleast 4 positive values
        //     if(array2[i]<0)
        //         return "uncorrect input";
        // }
        // return array2[array2.length-1]+array2[array2.length-2];
        }
        console.log("test EX2.2");
        const array=[1,0,1,1,0];
        console.log(OneZero(array));///test