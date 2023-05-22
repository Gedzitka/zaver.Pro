     export default function deleteAssurences(){
        const deleteBtn = document.getElementById("btn-delete");
                deleteBtn.addEventListener("click", (e) => {
                    let id = e.target.parentElement.parentElement.id;
                console.log(id);
                    
                    if (confirm('Opravdu chcete smazat klienta?')) {
                        axios.delete(`http://localhost:8000/api/assurances/${id}`)
                       
                        .then(assurence => console.log(assurence + "deleted"))
                        .then(() => location.reload())
    
                        .catch(error => console.error(error))
                    }
                });

            };
        
