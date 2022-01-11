
let init1=0;
let init2=0;
// constsetinit1

const handlerock=()=>{
    // var img=document.getElementsByTagName('img');
 document.getElementById('yr').classList.remove('dn');
 document.getElementById('yp').classList.add('dn');
 document.getElementById('ys').classList.add('dn');
    let randomNumber = Math.floor(Math.random() * 3) + 0;
    console.log(randomNumber)
    if(randomNumber===1){
                init1=parseInt(document.getElementById('bpoint').innerHTML);
        document.getElementById('bpoint').innerHTML= init1+1;
 document.getElementById('bp').classList.remove('dn');
 document.getElementById('bs').classList.add('dn');
 document.getElementById('br').classList.add('dn');
     
        
    }

    if(randomNumber===2)
    {
     init2=parseInt(document.getElementById('ypoint').innerHTML);
        document.getElementById('ypoint').innerHTML= init2+1;
 document.getElementById('bs').classList.remove('dn');
 document.getElementById('bp').classList.add('dn');
 document.getElementById('br').classList.add('dn');
       
    }
    if(randomNumber===0){
        document.getElementById('bp').classList.add('dn');
 document.getElementById('br').classList.remove('dn');
 document.getElementById('bs').classList.add('dn');
    }
}
const handlepaper=()=>{
    // var img=document.getElementsByTagName('img');
    document.getElementById('yp').classList.remove('dn');
    document.getElementById('yr').classList.add('dn');
    document.getElementById('ys').classList.add('dn');
 
    let randomNumber = Math.floor(Math.random() * 3) + 0;
    console.log(randomNumber)
    if(randomNumber===2){
                init1=parseInt(document.getElementById('bpoint').innerHTML);
        document.getElementById('bpoint').innerHTML= init1+1;
     
 document.getElementById('bs').classList.remove('dn');
 document.getElementById('br').classList.add('dn');
 document.getElementById('bp').classList.add('dn');
        
    }

    if(randomNumber===0)
    {
     init2=parseInt(document.getElementById('ypoint').innerHTML);
        document.getElementById('ypoint').innerHTML= init2+1;
 document.getElementById('br').classList.remove('dn');
 document.getElementById('bp').classList.add('dn');
 document.getElementById('bs').classList.add('dn');
       
    }
    if(randomNumber===1){
        document.getElementById('br').classList.add('dn');
 document.getElementById('bp').classList.remove('dn');
 document.getElementById('bs').classList.add('dn');
    }
}
const handlescissor=()=>{
    // var img=document.getElementsByTagName('img');
    document.getElementById('ys').classList.remove('dn');
    document.getElementById('yp').classList.add('dn');
    document.getElementById('yr').classList.add('dn');
 
    let randomNumber = Math.floor(Math.random() * 3) + 0;
    console.log(randomNumber)
    if(randomNumber===0){
                init1=parseInt(document.getElementById('bpoint').innerHTML);
        document.getElementById('bpoint').innerHTML= init1+1;
     
 document.getElementById('br').classList.remove('dn');
 document.getElementById('bs').classList.add('dn');
 document.getElementById('bp').classList.add('dn');
        
    }

    if(randomNumber===1)
    {
     init2=parseInt(document.getElementById('ypoint').innerHTML);
        document.getElementById('ypoint').innerHTML= init2+1;
 document.getElementById('bp').classList.remove('dn');
 document.getElementById('bs').classList.add('dn');
 document.getElementById('br').classList.add('dn');
       
    }
    if(randomNumber===2){
        document.getElementById('bp').classList.add('dn');
 document.getElementById('br').classList.add('dn');
 document.getElementById('bs').classList.remove('dn');
    }

}

const resetgame=()=>{
    document.getElementById('bpoint').innerHTML=0;
    document.getElementById('ypoint').innerHTML=0;
    document.getElementById('yr').classList.add('reset');
    document.getElementById('yp').classList.add('reset');
    document.getElementById('ys').classList.add('reset');
    document.getElementById('br').classList.add('reset');
    document.getElementById('bs').classList.add('reset');
    document.getElementById('bp').classList.add('reset');
}