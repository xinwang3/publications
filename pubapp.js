console.log('pubapp.js loaded');

(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:brown">Faculty Publications</h3>'
    
    h += 'Last Name: <input id="lastname" size=4 value="70"> <br> '
    h += '<button id="subButton" type="button" >submit</button> '
    
     
    
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = h
        document.body.appendChild(dv)
    }
    
    subButton.onclick=function(){
         
        var x = lastname.value
         
            alert( "Thank you, isn't " + x +" %  too dark!")
        
         
    }
     
})()
Status API Training Shop Blog About
