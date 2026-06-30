function step1(callback)
{
    setTimeout(()=>{
            console.log("Add milk and water and put pot on stove");
            callback()
    },5000)
    
}

function step2(callback)
{
    setTimeout(()=>{
                console.log("Add sugar and tea in starting");
                callback()
    },10000)
    
}

function step3(callback)
{
    setTimeout(()=>{
                console.log("Serve tea with biscuits");
                callback()
    },15000)
}

function call()
{
    step1(()=>{
        step2(()=>{
            step3(()=>{
                console.log("Task Completed");
                
            })
        })
    });
    
}
call();
