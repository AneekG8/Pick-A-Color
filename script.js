var start=document.querySelector("#start");
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#header h2");
var resultDisplay=document.querySelector("#navigator span");
var header=document.querySelector("#header");
var reset=document.querySelector("#reset");		//new colors button
var easy=document.querySelector("#easy");		//easy level button
var hard=document.querySelector("#hard");
var row2=document.querySelectorAll(".row2");		//hard level button
var isEasy=true;		//default level is easy
var colors=generateColors(3);
var pickedColor=pickRandom(colors);
colorDisplay.textContent=pickedColor.toUpperCase();
start.addEventListener("click",function(){
	document.querySelector("#instruction").classList.add("d-none");
})
reset.addEventListener("click",function(){
	if(isEasy)
	{
		colors=generateColors(3);		//for easy level 3 new colors
	}
	else
	{
		colors=generateColors(6);
	}
	pickedColor=pickRandom(colors);
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	this.textContent="New Colors";
	header.classList.add("bg-info");
})
easy.addEventListener("click",function(){
	if(!isEasy)
	{
		for(var i=0;i<row2.length;i++)
		{
			row2[i].classList.add("d-none");
		}
			colors=generateColors(3);			//for easy level 3 new colors
			pickedColor=pickRandom(colors);
			colorDisplay.textContent=pickedColor;
			for(var i=0;i<squares.length;i++)
			{
				squares[i].style.backgroundColor=colors[i];
			}
		isEasy=true;
		this.classList.remove("btn-outline-success");
		this.classList.add("btn-success");
		hard.classList.add("btn-outline-danger");
		hard.classList.remove("btn-danger");
		if(reset.textContent==="Play Again?")
		{
			reset.textContent="New Colors";
		}
	}
})
hard.addEventListener("click",function(){
	if(isEasy){
		for(var i=0;i<row2.length;i++)
		{
			row2[i].classList.remove("d-none");
		}
		colors=generateColors(6);			//for easy level 3 new colors
		pickedColor=pickRandom(colors);
		colorDisplay.textContent=pickedColor;
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=colors[i];
		}
		isEasy=false;
		this.classList.remove("btn-outline-danger");
		this.classList.add("btn-danger");
		easy.classList.add("btn-outline-success");
		easy.classList.remove("btn-success");
		if(reset.textContent==="Play Again?")
		{
			reset.textContent="New Colors";
		}
	}
})
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function() {
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
		{
			header.classList.remove("bg-info");
			header.style.backgroundColor=pickedColor;
			resultDisplay.textContent="CORRECT!";
			resultDisplay.style.backgroundColor="green";
			for(var j=0;j<squares.length;j++){
				squares[j].style.backgroundColor=pickedColor;
			}
			reset.textContent="Play Again?";	
		}
		else
		{
			resultDisplay.textContent="TRY AGAIN!";
			resultDisplay.style.backgroundColor="red";
			this.style.backgroundColor="#232323";
		}
	})
}
//--------------------Utility Functions are here----------------
//pick a random element from an array
function pickRandom(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}
//generate a random color
function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b +")" ;
}
//generate array of num random colors
function generateColors(num){
	//create an empty array
	var arr=[];
	//add random colors to that array
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	//return the array
	return arr;
}