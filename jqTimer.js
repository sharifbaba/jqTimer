/**
 * jqTimer - jquery time ticker simple jquery time ticker
 */
$.fn.jqTimer = function(cb){
			
			// Assign Element for further usage  
			$.each(this,function(i,ele){
				// read data from start attribute of the element 
					ele.secs = $(ele).attr('start');
					console.log(ele.secs);
				// check if secs is greater than -1 if no then stop loading timer else continue loading timer  
					if(ele.secs >= 0){
							if(ele.timer)
								window.clearInterval(ele.timer);	
					// Start Timer
						ele.timer = setInterval(function(){
				
							 // Calculate Time Objects
							 var d = Math.floor((ele.secs/(3600*24)));
							 var h = Math.floor((ele.secs/3600)%24);
				             var m = Math.floor((ele.secs/60)%60 );
				             var s = Math.floor(ele.secs%60);
				
				             // Reset for time specific display
				             	h = (h <= 9)?'0'+h:h;
				             	m = (m <= 9)?'0'+m:m;
				             	s = (s <= 9)?'0'+s:s;
				
				             	var stime = new Array();
				             		stime.push(h);
				             		stime.push(m);
				             		stime.push(s);
				
				             	var timestr = 	'';
				             		if(d)
				             			timestr = d+'d ';
				
				             		timestr = timestr+ stime.join(':');
				
				    			// check if callback function is specified
					    		if(typeof(cb)=='function')
					    			cb(ele,timestr);	
				
					    		ele.secs++;
						 },1000);
					}	
				});
};
