
function login(){
	var u = document.forms["home"]["Username"].value;
    var p = document.forms["home"]["Password"].value;
    var e = document.forms["home"]["Email"].value;
    if (u !="" && p !="" && e !=""){
        alert("Successfully registered !");
    }
    else if (e !="" && u =="" && p !=""){
        alert("Please enter your username");
    }
    else if (e !="" && u !="" && p ==""){
        alert("Please enter your password");
    }
    else if (e =="" && u !="" && p !=""){
        alert("Please enter your email");
    }
    else if (e =="" && u =="" && p !=""){
        alert("Please enter your email and username");
    }
    else if (e =="" && u !="" && p ==""){
        alert("Please enter your email and password");
    }
    else if (e !="" && u =="" && p ==""){
        alert("Please enter your username and password");
    }
    else if (e =="" && u =="" && p ==""){
        alert("Please fill all the details");
    }
}

function feed() {
    var x =document.forms["fe"]["feedbox"].value;
        
    if (x!=""){
		alert("Thank you for your Feedback!");
    }
    else if(x==""){
        alert("Pls enter Feedback");
    }
}

function reg() {
    var u = document.forms["regpay"]["Username"].value;
    var p = document.forms["regpay"]["Password"].value;
    var e = document.forms["regpay"]["Email"].value;
    if (u !="" && p !="" && e !=""){
        alert("Successfully registered !");
    }
    else if (e !="" && u =="" && p !=""){
        alert("Please enter your username");
    }
    else if (e !="" && u !="" && p ==""){
        alert("Please enter your password");
    }
    else if (e =="" && u !="" && p !=""){
        alert("Please enter your email");
    }
    else if (e =="" && u =="" && p !=""){
        alert("Please enter your email and username");
    }
    else if (e =="" && u !="" && p ==""){
        alert("Please enter your email and password");
    }
    else if (e !="" && u =="" && p ==""){
        alert("Please enter your username and password");
    }
    else if (e =="" && u =="" && p ==""){
        alert("Please fill all the details");
    }
}

function pay(){
	var c = document.forms["payform"]["CardN"].value;
    var n = document.forms["payform"]["NameC"].value;
	var m = document.forms["payform"]["mm"].value;
	var y = document.forms["payform"]["yy"].value;
	var cvc = document.forms["payform"]["cvc"].value;
	if (c !="" && n !="" && m !="" && y !="" && cvc !=""){
		alert("Payment is Successful");
	}
	else if( c =="" && n !=="" && m !=="" && y !=="" && cvc !==""){
		alert("Please enter you Card Number");
	}
	else if ( c=="" && n =="" && m =="" && y =="" && cvc !=""){
		alert("Card CVC Confirmed");
	}
	else if( c !=="" && n =="" && m !=="" && y !=="" && cvc !==""){
		alert("Please enter the Name on Card");
	}
	else if( c !=="" && n !=="" && m =="" && y !=="" && cvc !==""){
		alert("Please choose the month when the card expries");
	}	
	else if( c !=="" && n !=="" && m !=="" && y =="" && cvc !==""){
		alert("Please choose the year when the card expries");
	}
	else if( c !=="" && n !=="" && m !=="" && y !=="" && cvc ==""){
		alert("Please choose CVC");
	}	
	else if( c =="" && n =="" && m =="" && y =="" && cvc ==""){
		alert("Please full in all the details");
	}
}

function del() {
	var nm =document.forms["deliver"]["recipient"].value;
	var add =document.forms["deliver"]["Address"].value;
	var ph =document.forms["deliver"]["phone"].value;
	var pro1 = document.forms["deliver"]["proA"].value;
	var pro2 = document.forms["deliver"]["proB"].value;
	var pro3 = document.forms["deliver"]["proC"].value;
	var pro4 = document.forms["deliver"]["proD"].value;
	var changedA = +pro1 *50;
	var changedB = +pro2 *72;
	var changedC = +pro3 *110;
	var changedD = +pro4 *150;
	var d =document.forms["deliver"]["date"].value;
	var t =document.forms["deliver"]["time"].value;
	if (nm !="" && add !="" && ph!="" && d!="" && t!="" && pro1!=""){
		alert("Giftee: " + nm + ", the contact number is - " + ph + ", will recieve " +pro1 + " of The Seclusion Sweets and will be delivered to " + add + " on "+ d +", " + "between " + t + " and the cost comes up to $"  + changedA  );
	}
	else if (nm !="" && add !="" && ph!="" && d!="" && t!="" && pro2!=""){
		alert("Giftee: " + nm + ", the contact number is - " + ph + ", will recieve " +pro2 + " of The Coffee Lover and will be delivered to " + add + " on "+ d +", " + "between " + t + " and the cost comes up to $"  + changedB );
	}
	else if (nm !="" && add !="" && ph!="" && d!="" && t!="" && pro3!=""){
		alert("Giftee: " + nm + ", the contact number is - " + ph + ", will recieve " +pro3 + " of The Pamper Pack and will be delivered to " + add + " on "+ d +", " + "between " + t + " and the cost comes up to $"  + changedC );
	}
	else if (nm !="" && add !="" && ph!="" && d!="" && t!="" && pro4!=""){
		alert("Giftee: " + nm + ", the contact number is - " + ph + ", will recieve " +pro4 + " of The Indulge Her and will be delivered to " + add + " on "+ d +", " + "between " + t + " and the cost comes up to $"  + changedD );
	}
	else{
		alert("Please fill all the blanks")
	}
}