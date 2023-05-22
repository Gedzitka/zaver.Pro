
export default function deleteAll(data) {
    const deleteBtn = document.getElementById("deleteBtn");
    let clientID = window.location.search.split('=')[1]; 
    let id = data._id;
            deleteBtn.addEventListener("click", () => {
                
                if (confirm('Opravdu chcete smazat klienta?')) {
                    axios.delete(`http://localhost:8000/api/assurances/${id}`)&&axios.delete(`http://localhost:8000/api/clients/${clientID}`)
                  .then(() => location.reload())
                 
                    

                    .catch(error => console.error(error))
                    
                  



            }

        }

    );
}
