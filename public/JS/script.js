document.getElementById("btn").addEventListener("click",()=>{
    Swal.fire({
        title:"<strong>Página Desenvolvida com Express</strong>",
        icon:"info",
        html:"Utilizamos os métodos express.static(), app.use(), app.get() e app.listen() para desenvolver a nossa aplicação backend",
    })

})