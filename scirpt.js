



const api_url = 'https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/a16955a5-4ad0-f761-5e9e-389df1c892fb?size=100&startIndex=0&api_key=RGAPI-8e4244c4-7cb7-4353-bf08-920e93da36c3'
async function getStats() {
    const response = await fetch(api_url);
    const data = await response.json();
    const users = data.players
    let table = document.getElementById('myTable')

    for (let i=0; i<users.length;i++){
        let row = `<tr>
                        <td>${users[i]["gameName"]}</td>
                        <td>${users[i]["rankedRating"]}</td>
                        <td>${users[i]["numberOfWins"]}</td>
                        <td>${i+1}</td>
                    </tr>`
        table.innerHTML += row
    }
}


getStats()


    
function tableSearch() {
    let input, filter, table, tr, td, txtValue;

    //Intialising Variables
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}