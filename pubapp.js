console.log('cocao.js loaded');

(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:brown">Dark Chocolate Survey</h3>'
    
    h += 'What % of cocoa do you like the most: <input id="cocaoPct" size=4 value="70"> <br> '
    h += '<button id="subButton" type="button" >submit</button> '
    
     
    
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = h
        document.body.appendChild(dv)
    }
    
    subButton.onclick=function(){
         
        var x = parseInt(cocaoPct.value)
        if (x >=87) {
            alert( "Thank you, isn't " + x +" %  too dark!")
        }
        else{
            alert("Thank you, I like " + x +" %  too.");
        }
    }
     
})()
Status API Training Shop Blog About
