

const id = window.location.search.split('=')[1];
console.log(id);
axios.get(`http://localhost:8000/api/clients/${id}`)
    .then((res) => {
        console.log(res.data);
        const client = res.data;
        console.log(client);


const clientName=document.getElementById('name')

let h4=`<h4 id="${client._id}" class="mb-5">${client.firstName} ${client.lastName}</h4> `
clientName.innerHTML=h4



    })
const form = document.getElementById('form')
const imputName=document.getElementById('clientID')
imputName.value=id
console.log(imputName.value);

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
        url: "http://localhost:8000/api/assurances",
        data: dataEteries,
        headers: { "Content-Type": "application/json" }
        
    }
    
    )
        .then((res) => 
            console.log(res + "pojištění přidáno"))
            
            

            .then( () => window.location.href=`http://127.0.0.1:5500/client-detail.html?=${id}`)
           
           .then (()=> new Error('Something went badly wrong!') )         
            .catch((Error) =>
            console.log(Error));
      });
