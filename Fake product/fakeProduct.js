const sbtn = document.getElementById('btn');
const productList = document.getElementById('product');

sbtn.addEventListener('click', serchProduct);

function serchProduct() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            data.array.forEach(
                function (index) {
                    console.log(data)
                }
            );
        }
        )
}


