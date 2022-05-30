var player1Score=0;
var player2Score=0;
console.log('player1Score',player1Score);
console.log('player2Score',player2Score);
let button1=document.getElementById('btn_ply_1');
button1.addEventListener('click',player1);
let button2=document.getElementById('btn_ply_2');
button2.addEventListener('click',player2);
function player1()
{
    var player=1
    value1=die_value()
    player1Score=add_score(player1Score,player,value1)
    player1Score=check_for_snake(player1Score)
    player1Score=check_for_ladder(player1Score)
    if(value1==6)
    {
      lucky_draw()
    }
    else
    {
        if(player1Score>=100)
        {
          result()
        }
        else
        {
            button1.setAttribute('disabled','disabled')
            button2.querySelector('btn_ply_2')
            button2.disabled = false
        }
    }
}
function player2()
{
  var player=2
  value2=die_value()
  player2Score=add_score(player2Score,player,value2)
  player2Score=check_for_snake(player2Score)
  player2Score=check_for_ladder(player2Score)
  if(value2==6)
    {
      lucky_draw()
    }
    else
    {
        if(player2Score>=100)
        {
          result()
        }
        else
        {
            button2.setAttribute('disabled','disabled')
            button1.querySelector('btn_ply_2')
            button1.disabled = false
        }
    }
} 
function die_value()
      {
          let die=Math.floor(Math.random()*6)+1;
          console.log('Die value',die);
          return die
}
function add_score(score,no,value)
{
  score+=value
  console.log('Player ',`${no}`,'score',score);
  return score
}  
  
function check_for_snake()
{
  let snake_head=[98,95,92,83,73,64,69]
  let snake_tail=[28,24,51,19,2,36,33]
  var len_snake=snake_head.length
  for(i=0;i<=len_snake-1;i++)
  {
      if(snake_head[i]==player1Score)
      {
        console.log("Bitten by Snake");
        player1Score=snake_tail[i]
        console.log(player1Score);
      }
  } 
      return player1Score
}
function check_for_ladder(score)
{
  let ladder_bottom=[8,10,13,18,20,22,43,49,55,62,66,80]
  let ladder_top=[26,29,50,45,60,44,77,91,85,96,87,99]
  var len_ladder=ladder_bottom.length
  for(i=0;i<=len_ladder-1;i++)
  {
      if(ladder_bottom[i]==score)
      {
      console.log("Climbed in ladder");
      score=ladder_top[i]
      console.log("Player 1 score",score);
      }
  }
      return score
}
function lucky_draw()
{
  console.log('Lucky draw')
}
function result()
{
        console.log('Match is ended');
        button1.setAttribute('disabled','disabled')
        button2.setAttribute('disabled','disabled')
        if(player1Score>=0)
        console.log('Player 1 won the match');
        else 
        console.log('Player 2 won the match');
}