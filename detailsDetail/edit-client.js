export default function editClient(){
    const editBtn = document.getElementById("btnEdit");
    console.log(editBtn);
    editBtn.addEventListener("click", () => {

        let id = window.location.search.split('=')[1];
    window.location.href = `http://127.0.0.1:5500/form-client.html?=${id}`;

    });
};

