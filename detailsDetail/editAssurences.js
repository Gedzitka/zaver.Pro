export default function editAssurence(){
    const editBtn = document.getElementById("btn-edit");
    const id = window.location.search.split("=")[1];
 
            editBtn.addEventListener("click", () => {
                
                console.log(id);
                window.location.href = `http://127.0.0.1:5500/edit-assurences.html?=${id}`;
                



            });
        }
