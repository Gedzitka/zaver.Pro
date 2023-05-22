import creatAssurences from "./creat-assurences.js";
import printAssurences from "./print-assurences.js";
// import deleteAssurences from "./deleteAssurences.js";
import deleteAll from "./deleteAll.js";

// import deleteAssurences from "./deleteAssurences.js";



function detailClient() {
    const id=window.location.search.split('=')[1];
    console.log(id);
if (id) {
    axios.get(`http://localhost:8000/api/clients/${id}`)
    .then((res) => {
        console.log(res.data);
        const client=res.data;
        console.log(client);

const clientInfo = document.getElementById("clientDiv");

clientInfo.innerHTML=`  <div class="col-2">
<img src="klient.png" alt="klient fotografie" class="img-fluid">
</div>
<div id="clientInfo" class="col-3"> <ul class="ul ul-expand-md">
<dt>${client.firstName} ${client.lastName}</dt>

<dd>${client.streetNumber}</dd>
<dd>${client.city}</dd>
<dd>${client.posteNumber}</dd>
</ul>
</div>
<div id="nextInfo" class="col-6">



<ul>
<dd>${client.email}</dd>
<dd>${client.phone}</dd>
</ul>
</div>
`   
    







}
)
.catch((err) =>
console.log(err));
}
}
detailClient();
creatAssurences();
// deleteAssurences();
printAssurences();
// deleteAll();


// const postBtn = document.getElementById("btnPost");
// creatAssurences=()=>{
//     postBtn.addEventListener("click", () => {
   
//    console.log(id);
// window.location.href = `http://127.0.0.1:5500/edit-assurences.html?=${id}`;
// });
// }

// creatAssurences();   

// axios.get(`http://localhost:8000/api/assurances/`,


// )
// .then((res) => {
//     const resData = res.data;

//     const data=resData.find((item)=>item.clientID===id
//     )
    
//     console.log(data);

    


    
// const assurences = document.getElementById("table");
// let table=

// `<thead class="">
// <tr>
//  <th scope="col">Pojištění</th>
//  <th scope="col">Částka</th>
//  <th scope="col"></th>

// </tr>
// </thead>

//   <tbody id="tbody" class="w-auto"
//   < id="tbody" class="w-auto">
// <tr id="${data._id}">
//   <td data-label="Jméno a příjmeni"><a href="#">${data.type}</a></td>
//   <td data-label="telefon">${data.price}</td>
//   <td data-label="button"><button type="button" class="mr-2 btn btn-danger">Odstranit</button><button type="button" class="  btn btn-warning">Editovat</button></td>
// </tr>
//   `
    
        
// table += `</tbody>
//             </table>`;
//             assurences.innerHTML = table; 


       


  
//      deleteAssurences=()=>{
//         const deleteBtn = document.querySelectorAll(".btn-danger");
//         if (deleteBtn) {
//             deleteBtn.forEach((btn) => {
//                 btn.addEventListener("click", (e) => {
//                     let id = e.target.parentElement.parentElement.id;
//                 console.log(id);
//                     sessionStorage.setItem('id', id);
//                     if (confirm('Opravdu chcete smazat klienta?')) {
//                         axios.delete(`http://localhost:8000/api/assurances/${id}`)
                       
//                         .then(assurence => console.log(assurence + "deleted"	))
//                         .then(() => location.reload())
    
//                         .catch(error => console.error(error))
//                     }
    
    
//                 });
    
    
    
//             });
    
//         }
    
//     }
    
//     deleteAssurences();

// }

// )


        






