function showlist() 
{
                   
    var shophttp=new XMLHttpRequest ();

    shophttp.open("GET","shopping.json",true);

    shophttp.send();

    shophttp.onreadystatechange=function()
                 
            { 
                if ( this.readyState==4 && this.status==200)

                    {   var response=JSON.parse(this.responseText);
                        console.log(response);
                        var ajshoplist=response.shoplist;
                        console.log (ajshoplist);
                        var tabledata="";
                        

                        for( var i=0; i<ajshoplist.length; i++) 
                                {var currentdata=ajshoplist[i];
                                     tabledata= tabledata + 
                                                "<tr> <td>" 
                                                +currentdata.serialnumber + 
                                                "</td><td>" 
                                                +currentdata.Name +
                                                 "</td><td>" 
                                                +currentdata.Quantity + 
                                                "</td><td>" 
                                                +currentdata.unit+ 
                                                "</td><td>" 
                                                +currentdata.Department + 
                                                "</td><td>" 
                                                +currentdata.Notes + 
                                                "</td></tr>";
                                 }


                        document.getElementById ("tabledatas").innerHTML=tabledata;  
                        
                    }
                     
            
            }

    
    

}