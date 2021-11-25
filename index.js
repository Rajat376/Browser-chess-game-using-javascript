var start;
var finish;
var f;
var l;
var piece;
count=0;
wc=0;
bc=0;
index=0;

function allowDrop(ev) {
    ev.preventDefault();
    finish=ev.target.id;
  }
  function leave(ev)
  { if(count<=1)
  start=ev.target.id;
    count++;

  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    piece=ev.target.id;
  }
  
  function drop(ev) {
    ev.preventDefault();
  
    
    f=parseInt(start);
    l=parseInt(finish);
    diff=f-l;
    /*document.write(count," ");
    document.write(diff," ");
    document.write(f," ");
    document.write(l," ");
    document.write(start," ");
    document.write(finish," ");*/
   if(piece.includes("White"))
   {
     if(index%2==1)
    return;
    if(piece.includes("rook") )
    {if((l-(l-1)%8)==(f-(f-1)%8) )
      {

      }
      else if(diff%8==0)
      {

      }
    else
      return;
    }
    if(piece.includes("bishop"))
    {if(diff % 7==0)
      {

      }
      else if(diff % 9==0)
      {

      }
      else
      return;
    }
    if(piece.includes("queen"))
    {if(diff % 7==0)
      {

      }
      else if(diff % 9==0)
      {

      }
      else if(diff%8==0)
      {

      }
      else if((l-(l-1)%8)==(f-(f-1)%8) )
      {

      }
      else
      return;
    }
    if(piece.includes("king"))
    {if(diff==7||diff==-7||diff==9||diff==-9||diff==8||diff==-8||diff==-1||diff==1)
      {

      }
      else
      return;
    }
    if(piece.includes("knight"))
    {if(diff==17||diff==-17||diff==15||diff==-15||diff==10||diff==-10||diff==6||diff==-6)
      {

      }
      else
      return;
    }
    if(piece.includes("pawn"))
    {if(diff==8)
      {var x = document.getElementById(ev.target.id).childElementCount;
        if(x>0 )
        return;
        

      }
      else if(diff==16 && (f-(f-1)%8)==49 )
      {var x = document.getElementById(ev.target.id).childElementCount;
        if(x>0 )
        return;
        var x = document.getElementById(l+8).childElementCount;
        if(x>0 )
        return;

      }
      else if(diff==7 || diff==9)
      {var x = document.getElementById(ev.target.id).childElementCount;
        if(x==0)
        return;

      }
      
      else
      return;
    }
    var x = document.getElementById(ev.target.id).childElementCount;
    if(x>0)
    {var c= document.getElementById(ev.target.id).childNodes[0];
      if(c.id.includes("White"))
      {
        return;
      }
      else
      {document.getElementById("left").appendChild(c);

      }
    }
   }
   // for black
   else
   {if(index%2==0)
    return;
    
    if(piece.includes("rook") )
    {if((l-(l-1)%8)==(f-(f-1)%8) )
      {

      }
      else if(diff%8==0)
      {

      }
    else
      return;
    }
    if(piece.includes("bishop"))
    {if(diff % 7==0)
      {

      }
      else if(diff % 9==0)
      {

      }
      else
      return;
    }
    if(piece.includes("queen"))
    {if(diff % 7==0)
      {

      }
      else if(diff % 9==0)
      {

      }
      else if(diff%8==0)
      {

      }
      else if((l-(l-1)%8)==(f-(f-1)%8) )
      {

      }
      else
      return;
    }
    if(piece.includes("king"))
    {if(diff==7||diff==-7||diff==9||diff==-9||diff==8||diff==-8||diff==-1||diff==1)
      {

      }
      else
      return;
    }
    if(piece.includes("knight"))
    {if(diff==17||diff==-17||diff==15||diff==-15||diff==10||diff==-10||diff==6||diff==-6)
      {

      }
      else
      return;
    }
    if(piece.includes("pawn"))
    {if(diff==-8)
      {var x = document.getElementById(ev.target.id).childElementCount;
        if(x>0 )
        return;

      }
      else if(diff==-16 && (f-(f-1)%8)==9 )
      {var x = document.getElementById(ev.target.id).childElementCount;
        if(x>0 )
        return;
        var x = document.getElementById(l-8).childElementCount;
        if(x>0 )
        return;

      }
      else if(diff==-7 || diff==-9)
      {var x = document.getElementById(ev.target.id).childElementCount;
        if(x==0)
        return;

      }
      else
      return;
    }
    var x = document.getElementById(ev.target.id).childElementCount;
    if(x>0)
    {var c= document.getElementById(ev.target.id).childNodes[0];
      if(c.id.includes("Black"))
      {
        return;
      }
      else
      {document.getElementById("right").appendChild(c);

      }
    }
   }

    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    index++;
   /* document.write(f);
    document.write(l);
    document.write("\n")
    document.write(diff);
    document.write(piece);
    document.write(count);
    
   if(diff==-8)
   {document.write("game");
  }*/
  
    count=0;

    
    
  }
  