let countValue = document.querySelector('#val');

function inc() {
    //get the value 
    let value = parseInt(countValue.innerText);
    // update value
    value = value+1;
    // update the value at ui
    countValue.innerText= value;


}

function dec(){
    let value = parseInt(countValue.innerText);
    value = value-1;
    countValue.innerText= value;

}