
export default function creatAssurences(){
    const id = window.location.search.split("=")[1];
    const postBtn = document.getElementById("btnPost");
    postBtn.addEventListener("click", () => {
   
   console.log(id);
window.location.href = `http://127.0.0.1:5500/post-assurences.html?=${id}`;
});
}

creatAssurences();   