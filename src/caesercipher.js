const getlowerCaseCharCode = (charCode, shiftfactor) => {
    let newCharCode = charCode;
    if(charCode + shiftfactor >= 123) // Wrapping case for lowercase character
    {
        newCharCode = charCode - 123 + 97;
    }
    else if(charCode + shiftfactor < 97)
    {
        newCharCode = charCode - 96 + 122;
    }
    return newCharCode;
}

const getUpperCaseCharCode = (charCode, shiftfactor) => {
    let newCharCode = charCode;
    if(charCode + shiftfactor >= 91 && charCode + shiftfactor < 97) // Wrapping case for uppercase character
    {
        newCharCode = charCode - 91 + 65;
    }
    else if(charCode + shiftfactor < 65)
    {
        newCharCode = charCode - 64 + 90;
    }
    return newCharCode;
}




export const caeserCipher = (string, shiftfactor) => {
    let shiftedStr = "";

    for(let i = 0; i < string.length; i++)
    {
        let charCode = string.charCodeAt(i);
        if( (charCode < 65 ) || charCode > 122 || (charCode < 90 && charCode > 97) )
        {
            shiftedStr += string[i];
            continue;
        }
        
        if(charCode >= 97) 
        {
            charCode = getlowerCaseCharCode(charCode, shiftfactor);
        }
        else
        {
            charCode = getUpperCaseCharCode(charCode, shiftfactor);
        }
        
        shiftedStr += String.fromCharCode(charCode + shiftfactor);
    }
    return shiftedStr
}

caeserCipher("abc", -3)


