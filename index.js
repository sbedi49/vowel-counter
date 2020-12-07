const button = document.querySelector(".btn")
const span = document.getElementById('span')
const vowels = ['a','e','i','o','u']
const search = document.getElementById("searchbar")


const onClick = (count) => {
    const val = search.value.toLowerCase();
    for (var i = 0; i < val.length; i++) {
        if (vowels.includes(val[i])) {
            text(count++);
        } 
    } 
}
const getValue = () => {
    if (search.value == "") {
        onClick(0);
    } else {
        onClick(1);
    }
}
const text = (count)=>{
    return span.innerText = count
}


    