const sbtn = document.getElementById("btn");
const CarList = document.getElementById("Car");

sbtn.addEventListener('click', searchCar); 
function searchCar() {
    const apiurl = `https://myfakeapi.com/api/cars/year/1991`;
    fetch(apiurl)
        .then(function(res) { 
            console.log(res);
            if (!res.ok) {
                throw new Error("Network problem");
            }
            
            return res.json();
        })
        .then(function(data) {
            const listItem = document.createElement('div');
                listItem.textContent = element; // You may need to specify the property here, e.g., element.name
                CarList.appendChild(listItem);
            });
        })
        .catch(function(error) {
            console.error(error);
        });
}
