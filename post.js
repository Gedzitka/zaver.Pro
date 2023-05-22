const form = document.getElementById('client-form')
console.log(form);
form.addEventListener('submit', (e) => {
     e.preventDefault()
     ;
     const data = new FormData(form)
     const dataForm=[...data]
     const dataEteries = JSON.stringify(Object.fromEntries(dataForm))
     console.log(dataEteries);

    ;
     
    axios({
        method: "post",
        url: "http://localhost:8000/api/clients",
        data: dataEteries,
        headers: { "Content-Type": "application/json" }
        
    }
    
    )
        .then((res) => 
            console.log(res + "klient přidán"))
            .then( () => window.location.href=`http://127.0.0.1:5500/clients-list.html?id=1`)
           
           
           
            .catch((err) =>
            console.log(err));
      });