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
     

    putClient=()=>{
        const id = window.location.search.split('=')[1];
        console.log(id);
        const form = document.getElementById('client-form')
        console.log(form);
        form.addEventListener('submit', (e) => {
                e.preventDefault()
                ;
                const data = new FormData(form)
                const dataForm=[...data]
                const dataEteries = JSON.stringify(Object.fromEntries(dataForm))
                console.log(dataEteries);
                axios({
                    method: "put",
                    url: `http://localhost:8000/api/clients/${id}`,
                    data: dataEteries,
                    headers: { "Content-Type": "application/json" }

                }


                )
                    .then((res) =>
                        console.log(res + "klient upraven"))
                        .then( () => window.location.href=`http://127.0.0.1:5500/clients-list.html?id=1`)

                    .catch((err) =>
                    console.log(err));
            });
    }
   putClient();
    editClient=()=>{
        const id = window.location.search.split('=')[1];
        console.log(id);
        if (id) {
            axios.get(`http://localhost:8000/api/clients/${id}`)
            .then((res) => {
                console.log(res.data);
                const client=res.data;
                console.log(client);
                document.getElementById('firstName').value=client.firstName;
                document.getElementById('lastName').value=client.lastName;
                document.getElementById('email').value=client.email;
                document.getElementById('phone').value=client.phone;
                document.getElementById('streetNumber').value=client.streetNumber;
                document.getElementById('city').value=client.city;
                document.getElementById('posteNumber').value=client.posteNumber;
                
            })
           

            .catch((err) =>
            console.log(err));
        }
    }
    editClient(); 
   
    
    

        



    
 


// axios.get("http://localhost:8000/api/clients")
// .then((res) => 
//     console.log(res + "klienti"))
// .catch((err) =>
//     console.log(err));



//     axios.post("http://localhost:8000/api/clients", {
//         firstName:"jakub",
//         lastName:"pepa",
//         email:"j@seznam.cz",
//         phone:"123456789",
//         streetNumber:"zlatá 1",
//         city:"Praha",
//         posteNumber: "12345",

//     })
    
//     .then((res) => 
//     console.log(res + "klient přidán"))
// .catch((err) =>
//     console.log(err));
    
//     axios.put("http://localhost:8000/api/clients/645d2274d2964af84dd3b08b", {
//         firstName:"zdenek",
//         lastName:"vitek",
//         email:"j@seznam.cp",
//         phone:"123456788",
//         streetNumber:"zlatá 6",
//         city:"Praha 1",
//         posteNumber: "12349",

//     })
    

    
//     .then((res) => 
//     console.log(res + "klient upraven"))
// .catch(error => console.error('Error:', error));
//     axios.delete("http://localhost:8000/api/clients/645ac5014c2757e6a4845dd7", )
    
//     .then((res) => 
//     console.log(res + "klient smazán"))
// .catch((err) =>
//     console.log(err));

   


