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
    let uS=window.prompt('make your choice');
    let userSelection=uS.toLowerCase();
    let computerSelection=computerPlay();
    
    
    console.log(result(userSelection,computerSelection));
    }
    console.log('Total wins '+resultcount+ ' out of 5');
}

startGame();