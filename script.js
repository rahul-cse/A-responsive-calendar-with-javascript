window.onload= function(){
	var d = new Date();
	var month_name= ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var month = d.getMonth();		// It will return no of the month as May = 5
	var year = d.getFullYear();
	var firstdate = month_name[month] + "" + 1 + "" + year;
	
	
	var tmp = new Date(firstdate).toDateString();
	var firstday = tmp.substring(0, 3);  		//WED
	var day_name=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var day_no = day_name.indexOf(firstday);		//Returns 3 cause wed=3
	var days = new Date(year, month+1, 0).getDate();
	var calendar = get_calendar(day_no, days);
	document.getElementById("cal-mon-year").innerHTML = month_name[month]+ " " + year;
	document.getElementById("cal_date").appendChild(calendar);
	
}

function get_calendar(day_no, days){
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	var k = new Date();
	var g = k.getDate();
	// row for the day letters
	
	for (var c=0; c<=6;c++){
		var td = document.createElement('td');
		td.innerHTML="SMTWTFS"[c];
		tr.appendChild(td);
	}
	table.appendChild(tr);
	
	//create 2nd row
	
	tr= document.createElement('tr');
	var c;
	for(c=0;c<=6;c++){
		if (c==day_no){
			break;
		}
		var td = document.createElement('td');
		td.innerHTML="";
		tr.appendChild(td);
	}
	var count = 1;
	for(;c<=6;c++){
		var  td = document.createElement('td');
		td.innerHTML = count;
		if(count==g){
			td.style.backgroundColor="red";
		}
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
	
	//rest of the date rows
	
	for(var r=3;r<=6;r++){
		tr= document.createElement('tr');
		for(var c=0;c<=6; c++){
			if(count>days){
				table.appendChild(tr);
				return table;
			}
		
			var td=document.createElement('td');
			td.innerHTML = count;
				if(count==g){			
			td.style.backgroundColor="red";
		}
			count++;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
}