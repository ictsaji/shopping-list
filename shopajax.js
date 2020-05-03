function showlist() 
{
                   
    var shophttp=new XMLHttpRequest ();

    shophttp.onreadystatechange=function()
                 
            { 
                if ( this.readyState==4&&this.status==200)

                    {   var response=JSON.parse(this.responseText);
                        console.log(response);
                        var ajshoplist=response.shoplist;
                        console.log (ajshoplist);
                        var snum="";
                        var nme="";
                        var qty="";
                        var unt="";
                        var dpt="";
                        var nts="";

                        for( var i=0; i<ajshoplist.length; i++) 
                                {snum += "<li>"+ ajshoplist[i].serialnumber + "</li>";

                                }
                        document.getElementById ("snum").innerHTML=snum;  
                        
                        for( var i=0; i<ajshoplist.length; i++) 
                                {nme += "<li>"+ ajshoplist[i].Name + "</li>";

                                }
                        document.getElementById ("nme").innerHTML=nme;        

                        for( var i=0; i<ajshoplist.length; i++) 
                                {qty += "<li>"+ ajshoplist[i].Quantity + "</li>";

                                }
                        document.getElementById ("qty").innerHTML=qty;        

                        for( var i=0; i<ajshoplist.length; i++) 
                                {unt += "<li>"+ ajshoplist[i].unit + "</li>";

                                }
                        document.getElementById ("unt").innerHTML=unt;        

                        for( var i=0; i<ajshoplist.length; i++) 
                                {dpt += "<li>"+ ajshoplist[i].Department + "</li>";

                                }
                        document.getElementById ("dpt").innerHTML=dpt;
                        
                        for( var i=0; i<ajshoplist.length; i++) 
                                {nts += "<li>"+ ajshoplist[i].Notes + "</li>";

                                }
                        document.getElementById ("nts").innerHTML=nts;        




                    }
                     
            
            };

    shophttp.open("GET","shopping.json",true);
    shophttp.send();

}