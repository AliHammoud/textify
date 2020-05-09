document.addEventListener('DOMContentLoaded', function(e){
	var input = document.querySelector('input');
	
	input.addEventListener('focus', clearTextOnClick);
	input.addEventListener('blur', resetDummyClick);
	input.addEventListener('input', generateHash);
	
	var clr = document.querySelector('.clr');
	clr.textContent = document.body.style.backgroundColor;
})

function clearTextOnClick(e){
	e.target.value = '';
}

function resetDummyClick(e){
	e.target.value = 'type something here to see magic ✨';
}

function hashString(str){
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}

function generateHash(e){
	var str = e.target.value;
	var hash = md5(str);
	var hex = '#' + hash.substring(0, 6);
	document.body.style.backgroundColor = hex;
	
	var clr = document.querySelector('.clr');
	clr.textContent = hex;
}