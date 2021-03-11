let th_val = ['', 'thousand', 'million', 'billion'];
let dg_val = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tw_val = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



const translateElementRec = (num,translatedNumArray)=>{
    if(num >= 100){
        translatedNumArray.push(dg_val[Math.floor(num/100)]) ;
        translatedNumArray.push('hundred');
        translateElementRec(Math.floor(num%100),translatedNumArray);
    }
    else if(num >=20){
        let tens =tw_val[Math.floor(num/10)-2];   
        const dig = Math.floor(num%10);
        //if digit of the tens number is not 0 -> adding after the tens digit '-'
        // for example 'twenty-four'  
        if(dig){
            tens+='-';
            tens+=dg_val[dig];
            translatedNumArray.push(tens);     
        }
    }
    else if(num >0){
        translatedNumArray.push(dg_val[num]);
       
    }
    return;
    
}

const translateElementToWord = (currentValue,index, translatedNumArray,length ) =>{
    const num = parseInt(currentValue);
    translateElementRec(num,translatedNumArray);
    translatedNumArray.push(th_val[length-index-1]);
    if(length-index ===2 ){
      translatedNumArray.push('and');
    }
     
}

const ValidationCheck = (num)=>{
        // handling un-valid number 
        if(isNaN(num) || (num.length > 0 && num[0] === '0')){
            // eslint-disable-next-line no-throw-literal
            throw {error:'not a valid number'};
        }
        else if(num.length > 10){
            // eslint-disable-next-line no-throw-literal
            throw {error:'the number is too big'}
        }
}
//still need to figure out where to put the 'and' word exactly
const convertNumToEnglish =(num)=>{

    try{
        ValidationCheck(num);
    }catch(err){
        return err;
    }

    if(num === '0'){
        return dg_val[0];
    }
    
    const translatedNumArray = [];
    if(num[0] === "-"){
        //if negative number the sentence will start with the word 'negative'
        translatedNumArray.push('negative');
        num = num.substr(1,num.length-1);
    }
    // creating an array that contain threesome from right to left for better analyzing
    //example : '2048' ->> ['2','048']
    const numArray = num.toString().match(/\d{1,3}(?=(\d{3})*$)/g);
    
    //sending each threesome for 'translation'
    numArray.forEach((currentValue,index)=>translateElementToWord(currentValue, index, translatedNumArray,numArray.length));
    
    //join the translated number array to a one big sentence
    return  translatedNumArray.join(' ');   
}

export default convertNumToEnglish;