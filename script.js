var BTN = document.getElementById("123");
BTN.addEventListener("click", function(){
    alert("Hello");
})
/*
document.addEventListener('click',function(){
    $('#content').hide();
},true);
    
    document.getElementById('btn').addEventListener('click',function(){
    $('#content').slideDown(300);
});

let select = document.querySelector("#selectMode");
select.addEventListener("change", selectFun);
function selectFun() {
	const switchValue = this.value;
	switch (switchValue) {
		case "1":
			option_01();
			break;
		case "2":
			option_02();
			break;
		case "3":
			option_03();
			break;
		case "4":
			option_04();
			break;
		default:
			return;
	}
}

function option_01() {
	alert("選到 option_01");
}

function option_02() {
	alert("選到 option_02");
}

function option_03() {
	alert("選到 option_03");
}

function option_04() {
	alert("選到 option_04");
}


/*
let select = document.querySelector("#selectMode");
select.addEventListener("change", selectFun);
function selectFun() {
    const switchValue = this.value;
    switch (switchValue) {
      case "1":
        option_01();
        break;
      case "2":
        option_02();
        break;
      case "3":
        option_03();
        break;
      case "4":
        option_04();
        break;
      default:
        return;
    }
  }
  function option_01() {
    alert("選到 option_01");
  }
  
  function option_02() {
    alert("選到 option_02");
  }
  
  function option_03() {
    alert("選到 option_03");
  }
  
  function option_04() {
    alert("選到 option_04");
  }
*/
 
