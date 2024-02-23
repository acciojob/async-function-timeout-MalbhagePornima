//your JS code here. If required.
document.getElementById("btn").addEventListener("click",()=>{
	let text=document.getElementById("text").value;
	let delay=document.getElementById("delay").value;

	if(text && delay){
		let myPromise=new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(text);
			},delay)
		});
	}
});