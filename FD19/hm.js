function start(){
    console.log("Fill the form.... ")

}

function PREPARATION(){
    setTimeout(()=>{
    console.log("Start preparation for cracking exam ")

    },4000)
}

function TakesAdmitcard(){
    setTimeout(()=>{
   
        console.log("Download admit card ")

    },5000)
}


function EXAMDAY(){
    setTimeout(()=>{
       console.log("Go to give exam and after giving exam start preparation for interview....")


    },6000)
}


 function FINAL(){
    setTimeout(()=>{
       console.log(" After craking exam go for crack the interview.")


    },7000)
} 
   
 function CALL(){
    start()
    PREPARATION()
    TakesAdmitcard()
    EXAMDAY()
    FINAL()
   

}

CALL()