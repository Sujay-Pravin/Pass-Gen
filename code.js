const genbtn = document.getElementById("generate")
const len = document.getElementById("length")
const error = document.getElementById("erro")
const ulel = document.getElementById("ul-el")
const symbtn = document.getElementById("sym-btn")
const numbtn = document.getElementById("num-btn")
const alphbtn = document.getElementById("alp-btn")
const appear1 = document.querySelectorAll(".appear")
const symbox = document.getElementById("symbox")
const numbox = document.getElementById("numbox")

let sym = true
let num = true
let alph = true

function symbt(){
    if(sym===true){
        sym=false
        symbtn.textContent = "OFF"
        symbtn.style.color = "red"
        symbtn.style.border = "3px solid red"
        appear1[0].style.display="none"
        appear1[1].style.display="none"
    }
    else{
        sym=true
        symbtn.textContent = "ON"
        symbtn.style.color = "green"
        symbtn.style.border = "3px solid green"
        alph=false
        setalph()
        appear1[0].style.display="block"
        appear1[1].style.display="block"
        
    }
}
function numbt(){
    if(num===true){
        num=false
        numbtn.textContent = "OFF"
        numbtn.style.color = "red"
        numbtn.style.border = "3px solid red"
        appear1[2].style.display="none"
        appear1[3].style.display="none"
        
    }
    else{
        num=true
        numbtn.textContent = "ON"
        numbtn.style.color = "green"
        numbtn.style.border = "3px solid green"
        if(alph===true || sym === true){        
            appear1[2].style.display="block"
            appear1[3].style.display="block"}

    }
}

symbtn.addEventListener("click",function(){
    symbt()
    numbt()
    numbt()
    
})
numbtn.addEventListener("click",function(){
    numbt()
})


function setalph(){
    if(alph===true){
        alph=false
        alphbtn.textContent = "OFF"
        alphbtn.style.color = "red"
        alphbtn.style.border = "3px solid red"
        
    }
    else{
        alph=true
        alphbtn.textContent = "ON"
        alphbtn.style.color = "green"
        alphbtn.style.border = "3px solid green"
    }
}

alphbtn.addEventListener("click",function(){
    if (sym===false){
        setalph()
        numbt()
        numbt()
        
    
    }
    else{
        alert("Turn off symbols to toggle alpha")
    }
})



genbtn.addEventListener("click",function(){
    if(alph || num || sym){
        if (len.value>=6 && len.value<=20){ 
                if(symbox.value<11 && numbox.value<11 && symbox.value>=0 && numbox.value>=0){
                    if(Math.floor(len.value)>Math.floor(symbox.value)+Math.floor(numbox.value)){
                        console.log(symbox.value+numbox.value)
                        if(sym===true && num === true && alph===true){
                            ulel.innerHTML = ""
                            password(symbox.value,numbox.value)
                            
                            
                            error.textContent = "*Password strength : STRONG"
                        }
                        else if(sym===true && num===false && alph===true){
                            ulel.innerHTML = ""
                            password(symbox.value,-999)
                            
                            
                            error.textContent = "*Password strength : moderate"
                        }
                        else if(sym===false && num===true && alph===true){
                            ulel.innerHTML = ""
                            password(-999,numbox.value)
                            
                            
                            error.textContent = "*Password strength : moderate"
                        }
                        else if (sym===false && num===false && alph===true){
                            ulel.innerHTML = ""
                            password()
                            
                            
                            error.textContent = "*Password strength : Weak(consider symbols and numbers)"
                        }
                        else if (sym===false && num===true && alph===false ){
                            ulel.innerHTML = ""
                            password()
                        
                            
                            error.textContent = "*Pin generated"

                        }
                    }  
                    else{
                        error.textContent = "*Total LENGTH must be greater than > (Symbol + Number) COUNT" 
                        reset()
                    }
                } 
                else{
                    error.textContent = "*Enter valid COUNT"
                    reset()
                }
        
        }
        else{
            error.textContent = "*please enter valid LENGTH"
            reset()
        }
    }
    else{
        error.textContent = "*Toggle atleast 1 option"
        reset()
    }



})






let key = ""
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const ncharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const scharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const symb = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const acharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numb = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function rand(char){
    return Math.floor(Math.random()*char.length)
}
function password(sym=-999,nun=-999) {



        let skey = ""
        let nkey = ""
        let akey = ""
        // console.log(numbox.value)
        if(sym>0){
            // console.log("1")
            for(let i=0 ; i<sym ;i++){
            skey+=symb[rand(symb)]
            
        }
        }
        if(nun>0){
            // console.log("2")
            for(let i=0 ; i<nun ;i++){
                nkey+=numb[rand(numb)]
                
            }
        }
        if(nun>0 && sym>0){
            // console.log("3")
            for(let i=0 ; i<len.value-nun-sym ;i++){
                akey+=acharacters[rand(acharacters)]
            }
        }
        else if(nun<1 && sym>0 && nun!=-999){
            console.log("4")
            
            for(let i=0 ; i<len.value-sym ;i++){
                akey+=ncharacters[rand(ncharacters)]
            }
        }
        else if(sym<1 && nun>0 && sym!=-999){
            console.log("5")
            for(let i=0 ; i<len.value-nun ;i++){
                akey+=scharacters[rand(scharacters)]
            }
        }
        else if(nun<1 && sym<1 && nun!=-999 && sym!=-999){
            console.log("6")
            sym = Math.floor(Math.random()*3)+1
            for(let i = 0 ; i < sym ; i++){
                skey+=symb[rand(symb)]
            }
            nun = Math.floor(Math.random()*3)+1
            for(let i = 0 ; i < nun ; i++){
                nkey+=numb[rand(numb)]
            }
            for(let i=0 ; i<len.value-sym-nun ;i++){
                akey+=characters[rand(characters)]
            }
        }
        else if(nun==-999 && sym>0){
            console.log("7")
            for(let i=0 ; i<len.value-sym ;i++){
                akey+=acharacters[rand(acharacters)]
            }
        }
        else if(nun==-999 && sym<1 && sym!=-999){
            console.log("8")
            sym = Math.floor(Math.random()*5)+1
            for(let i = 0 ; i < sym ; i++){
                skey+=symb[rand(symb)]
            }
            for(let i=0 ; i<len.value-sym ;i++){
                akey+=scharacters[rand(scharacters)]
            }
        }
        else if(sym==-999 && nun>0){
            console.log("9")
            for(let i=0 ; i<len.value-nun ;i++){
                akey+=acharacters[rand(acharacters)]
            }
        }
        else if(sym==-999 && nun<1 && nun!=-999){
            console.log("10")
            nun = Math.floor(Math.random()*5)+1
            for(let i = 0 ; i < nun ; i++){
                nkey+=numb[rand(numb)]
            }
            console.log(nun)
            console.log(nkey)
            for(let i=0 ; i<len.value-nun ;i++){
                akey+=ncharacters[rand(ncharacters)]
            }
        }
        else if(sym==-999 && nun==-999 && alph){
            console.log("11")
            for(let i=0 ; i<len.value ;i++){
                akey+=acharacters[rand(acharacters)]
            }

        }
        else if(sym==-999 && nun==-999 && !alph){
            console.log("12")
            for(let i=0 ; i<len.value ;i++){
                nkey+=numb[rand(numb)]
            }

        }
      


        
        let tkey = skey+nkey+akey
        key = tkey.split('').sort(function(){return 0.5-Math.random()}).join('');
        let out1 = `<li id='hell' onclick='coopy()'>${key}</li>`
        ulel.innerHTML += out1
        key=""

}


function coopy(){
    navigator.clipboard.writeText( document.getElementById("hell").textContent )
    alert("Password copied to Clipboard!!!")
}

function reset(){
    ulel.innerHTML=""
}

