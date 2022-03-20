document.title="MoneyDropVerify";


let link = document.querySelector("a"),
		time= 13,
		params = new URLSearchParams(location.search),
	  id = params.get('id'),
	  idLink = params.get('idLink');
	  
	  link.href=`https://moneydrop.vercel.app/verify/?id=${id}&idlink=${idLink}`;
    link.style.pointerEvents = 'none';

   const interval = setInterval(function(){
   	    	document.querySelector("p span").innerHTML= time

    	if( time <= 0){
    		link.style.pointerEvents = null;
    		link.classList.add("active");
        clearInterval(interval);
        document.querySelector("p").innerHTML ="El enlace ya esta listo";
    	}
        time--
    }, 1000);
