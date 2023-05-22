export default function editAssurence(){
    const editBtn = document.getElementById("btn-edit");
     editBtn.addEventListener("click", (e) => {
                let id = e.target.parentElement.parentElement.id;
                console.log(id);
                window.location.href = `http://127.0.0.1:5500/edit-assurences.html?=${id}`;
                



            });
        }
     