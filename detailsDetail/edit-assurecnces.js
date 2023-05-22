const id = window.location.search.split('=')[1];
axios.get(`http://localhost:8000/api/clients/${id}`)
      .then((res) => {
          console.log(res.data);
          const client = res.data;
          console.log(client);
      
      
      const clientName=document.getElementById('name')
      
      let h4=`<h4 id="${client._id}" class="mb-5">${client.firstName} ${client.lastName}</h4> `
      clientName.innerHTML=h4
      
      
      
      })
// const form = document.getElementById('form')
// console.log(form);
// form.addEventListener('submit', (e) => {
//      e.preventDefault()
//      ;
//      const data = new FormData(form)
//      const dataForm=[...data]
//      const dataEteries = JSON.stringify(Object.fromEntries(dataForm))
//      console.log(dataEteries);

//     ;
     
//     axios({
//         method: "post",
//         url: "http://localhost:8000/api/assurances",
//         data: dataEteries,
//         headers: { "Content-Type": "application/json" }
        
//     }
    
//     )
//         .then((res) => 
//             console.log(res + "klient přidán"))
//             .then( () => window.location.href=`http://127.0.0.1:5500/clients-list.html?id=1`)
           
           
           
//             .catch((err) =>
//             console.log(err));
//       });
    
editAssurecnces=()=>{


 const id = window.location.search.split('=')[1];
    
    axios.get(`http://localhost:8000/api/assurances/`)
    .then((res) => {

        const resData = res.data;
        const data=resData.find((item)=>item.clientID===id)
        console.log(data);
       


    
        // const resData = res.data;
    
      
        
        
       
        document.getElementById('assurence-type').value=data.assurenceType;
        document.getElementById('clientID').value=data.clientID;
        document.getElementById('price').value=data.price;
        document.getElementById('valid-from').value=data.validFrom;
        document.getElementById('subject-asurance').value=data.subjectOfinsurance;
        document.getElementById('valid-to').value=data.validTo;
        
      
        


    })

    .catch((err) =>
    console.log(err));

    





  

    putAssurences=()=>{
 
        const form = document.getElementById('form')

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
        method: "put",
        url: `http://localhost:8000/api/assurances/${id}`,
        data: dataEteries,
        headers: { "Content-Type": "application/json" }
        
    }
    
    )
        .then((res) => 
            console.log(res + "pojištění přidáno"))
            
            

            .then( () => window.location.href=`http://127.0.0.1:5500/client-detail.html?=${id}`)
           
           
           
            .catch((err) =>
            console.log(err));
      });

    }
}
editAssurecnces();
putAssurences()
      


