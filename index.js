let resultcount=0;



function computerPlay(){
    let array=['rock','paper','scissor'];

    return array[Math.floor(Math.random()*3)];
}
function result(userSelect,computerSelect){
    
    if(userSelect=='rock')
    {
        if(computerSelect==userSelect)
        {
            return "no winner";
        }
        else if(computerSelect=='scissor')
        {
            resultcount+=1;
            return `You win ! ${userSelect} beats ${computerSelect}`;
        }
        else{
            return `You Lose ! ${computerSelect} beats ${userSelect}`;
        }
    }
    else if(userSelect=='paper')
    {
        if(computerSelect==userSelect)
        {
            return "no winner";
        }
        else if(computerSelect=='rock')
        {
            resultcount+=1;
            return `You win ! ${userSelect} beats ${computerSelect}`;
        }
        else{
            return `You lose ! ${computerSelect} beats ${userSelect}`;
        }
    }
    else if(userSelect=='scissor')
    {
        if(computerSelect==userSelect)
        {
            return "no winner";
        }
        else if(computerSelect=='paper')
        {
            resultcount+=1;

            return `You win ! ${userSelect} beats ${computerSelect}`;
        }
        else{
            return `You lose ! ${computerSelect} beats ${userSelect}`;
        }
    }
}


//starting the game for the user;
function startGame(){
   
   
        
            for(var i=0;i<5;i++)
            {
                //setTimeout(function(){
                    let uS=window.prompt('make your choice');
            
                    let userSelection=uS.toLowerCase();
                    
                    if(userSelection!=='rock')
                    {
                        if(userSelection!=='paper')
                        {
                            if(userSelection!=='scissor')
                            {
                                window.alert('incorrect value');
                                i--;
                                continue;

                            }
                        }
                    
                    }
                    console.log('your selection '+userSelection);
                    let computerSelection=computerPlay();
                    console.log('computer selection '+computerSelection);
                    
                    let res=result(userSelection,computerSelection);
                    console.log(res);
                    setTimeout(10000);

               // },1000);
            
            
           
        }
            

     
    
    console.log(`Total wins ${resultcount} out of 5`);
}

startGame();