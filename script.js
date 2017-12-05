var begin = false;
var max_way = 5;
var max_wall = 5;
var _fail = false;
var finish = false;


window.onload = function()
{
  for(var c1=1;c1<=5;c1++)
  {
    $('#w'+c1.toString()).bind('mouseenter',c1,fail);
    $('#way'+c1.toString()).bind('mouseleave',c1,passed).bind('mouseenter',c1,passing);
  }

  $('#begin').mouseleave(begun).mouseenter(beginning);

  document.getElementById('arrive').onmouseout = function(){arrived();};
  document.getElementById('arrive').onmouseover = function(){arriving();};

  document.getElementById('container').onmouseleave = function(){init();};
}


function fail(event)
{
  var c_wall =event.data;
  if(begin == false)
    return;
  if(_fail==true||finish ==true)
    return;
  else
    _fail=true;
  document.getElementById("w"+c_wall.toString()).className="com_wall";
  document.getElementById("info").innerHTML = "You lose";
}

function beginning()
{
  if(_fail==true||finish ==true)
      return;
  begin=true;
  finish = false;
  document.getElementById("begin").className = 'beginning';
  for(var c1=1;c1<=max_way;c1++)
  {
    if(document.getElementById("way"+c1.toString()).style.backgroundColor=="rgba(0, 255, 0, 0.5)")
      document.getElementById("way"+c1.toString()).className = 'never_visit_way';
  }
}
function begun()
{
  if(_fail==true||finish ==true)
    return;
  document.getElementById("begin").className = 'begun';
}

function arriving()
{
  if(_fail==true||finish ==true)
      return;
  if(begin==false)
  {
    document.getElementById("info").innerHTML = "Don't cheat!";
    return;
  }
  else
  {
    if(document.getElementById('way5').className != 'visited_way')
    {
      document.getElementById("info").innerHTML = "Don't cheat!";
      return;
    }
    document.getElementById("arrive").className = 'arriving';
    for(var c1=1;c1<=max_way;c1++)
    {
      document.getElementById("way"+c1.toString()).className = 'visiting_way';
    }
    document.getElementById("begin").className = 'arriving';
    document.getElementById("info").innerHTML = "You win";
    document.getElementById("info").style.color = "green";
  }
}

function arrived()
{
  if(_fail==true)
    return;
  if(begin==false)
    document.getElementById("info").innerHTML = "开心闯迷宫";
  else
    finish = true;
}

function passing(event)
{
  var c_way = event.data;
  if(begin == false)
    return;
  if(_fail==true||finish ==true)
    return;
  document.getElementById("way"+c_way.toString()).className = 'visiting_way';
  for(var c1=0;c1<max_way-c_way;c1++)
  {
    if(document.getElementById("way"+(c_way+c1).toString()).style.backgroundColor=="rgba(0, 255, 0, 0.5)")
      document.getElementById("way"+(c_way+c1).toString()).className='never_visit_way';
  }
}

function passed(event)
{
  var c_way = event.data;
  if(begin == false)
    return;
  if(_fail==true||finish ==true)
    return;
  document.getElementById("way"+c_way.toString()).className = 'visited_way';
}

function init()
{
  begin=false;
  _fail=false;
  finish = false;
  document.getElementById("begin").className = 'not_begin';
  document.getElementById("arrive").className = 'not_arrive';
  for(var c1=1;c1<=max_way;c1++)
  {
    document.getElementById("way"+c1.toString()).className = 'never_visit_way';
  }

  for(var c1=1;c1<=max_wall;c1++)
  {
    document.getElementById("w"+c1.toString()).className = 'normal_wall';
  }

  document.getElementById("info").innerHTML = "开心闯迷宫";
}


//
