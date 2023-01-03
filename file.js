   // check prime or not  

    let num = 11 ;
    let count = 0 ;
    for( let i = 1 ; i <= num ; i++ ){
        if ( num % i == 0 ){
            count++;
        }
    }
    ( count== 2 )? console.log( "prime"):
    console.log("not prime");
    
    //check Palindrome or not

    let str= "NAMAN" ;
    let rev= "" ;
    for( let i = str.length-1 ; i >= 0 ; i--){
        rev += str[i];
    }
    ( str == rev )? console.log( "plaindrome" ):
    console.log("not plaindrome");