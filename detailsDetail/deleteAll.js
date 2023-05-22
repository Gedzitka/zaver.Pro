

export default function deleteAll(data) {
    const deleteBtn = document.getElementById("deleteBtn");
    let clientID = window.location.search.split('=')[1]; 
    axios.get(`http://localhost:8000/api/assurances/`)
        .then((res) => {
            const resData = res.data;
            const data = resData.find((item) => item.clientID === clientID
            )
            console.log(data);
            const id = data._id;
            console.log(id);


 
            deleteBtn.addEventListener("click", (e) => {
              
                if (confirm('Opravdu chcete smazat klienta?')) {
                    axios.delete(`http://localhost:8000/api/assurances/${id}`)&&axios.delete(`http://localhost:8000/api/clients/${clientID}`)
                  .then(() => location.reload())
                 
                    

                    .catch(error => console.error(error))
                    
                  



            }

        }

    );
}
)
}
