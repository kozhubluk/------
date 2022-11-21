document.addEventListener('DOMContentLoaded', ()=>{
    const text=document.getElementsByClassName("review_text");

    for(let i=0;i<text.length;i++){
        text[i].textContent=truncate(text[i].textContent,260);      
    }
    
    function truncate(str,maxlength){
        if (str.length>maxlength){
            return str.slice(0,maxlength-1)+"…";
        } else return str;
    }
});
