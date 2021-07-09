const button = `
<style>
#pranah_signin_button ul{
    list-style-type: none;
    display: flex;
    padding: 0;
    margin:0;
}
#pranah_signin_button img{
    width: 50px;
    height: 50px;
}
#pranah_signin_button{
    font-family: sans-serif;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    width: max-content;
    padding: 10px;
}
#pranah_signin_button:hover{
    box-shadow: 0 0 20px #ddd;
}
.pranah-login-title-text{
    margin-top: 15px;
    margin-left: 10px;
}
</style>
<div id="pranah_signin_button">
<ul>
    <li><img src="https://epic-heisenberg-205f29.netlify.app/favicon.png" alt="Pranah Logo"></li>
    <li class="pranah-login-title-text">SIGNIN WITH PRANAH</li>
</ul>
</div>
`;
let comp = document.getElementById("pranah_root");
comp.innerHTML = button;
comp.addEventListener("click", ()=>{
    alert('You clicked me!');
});
