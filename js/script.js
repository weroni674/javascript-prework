{function playGame(playerInput){
  function getMoveName(argMoveId){
  if(argMoveId == 1){
  return 'kamień';
  }

  if(argMoveId == 2){
    return 'papier';
  }

  if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
  }

  function displayResult(computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

  if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  
  else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  }
  
  else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  
  else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
  }
  
  else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  
  else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  }
  
  else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
  
  else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }
  else
    printMessage('Nieznany ruch')
  }


  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  const displayResult = function(computerMove, playerMove){}
}
 

  const paperbutton = document.getElementById('play-paper');

  paperbutton.addEventListener('click', function(){playGame(1)});


  const rockbutton = document.getElementById('play-rock');

  rockbutton.addEventListener('click', function(){playGame(2)});


  const scissorsbutton = document.getElementById('play-scissors');

  scissorsbutton.addEventListener('click', function(){playGame(3)});
}

      
