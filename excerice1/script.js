var showProducts = document.querySelector(".show-products");

var allproducts = [
    {
        id: 1,
        name: "Iphone 16 pro",
        price: 1316,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-157904/Apple-iPhone-15_-blue_featured-image-packshot-review.jpg"
    },
    {
        id: 2,
        name: "Iphone 15 pro",
        price: 916,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 3,
        name: "Iphone 15 pro Max",
        price: 1116,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 4,
        name: "Iphone 14 pro",
        price: 811,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 5,
        name: "Iphone 13 pro Max",
        price: 750,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 6,
        name: "Iphone 15 pro Max",
        price: 1099,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 7,
        name: "Iphone 12 pro Max",
        price: 590,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 8,
        name: "Iphone 14 pro",
        price: 912,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 9,
        name: "Iphone 14 pro Max",
        price: 1011,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 10,
        name: "Iphone 13 pro",
        price: 616,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    },
    {
        id: 11,
        name: "Iphone 15 pro",
        price: 976,
        image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
    }
    // Add more products here
];

allproducts.forEach((product, index) => {
    var card = `
        <div class="col-lg-3 mb-3"> 
            <div class="card"> 
                 <img src="${product.image}" alt="" class="card-img-top"> 
                 <div class="card-body"> 
                    <h4 class="card-title">${product.name}</h4> 
                    <h5 class="card-title">$ ${product.price}</h5> 
                    <button class="btn btn-primary btn-sm rounded-2 buynow">Buy Now</button>
                    <button class="btn btn-primary btn-sm rounded-2 moreinfo" data-bs-toggle="modal" data-bs-target="#modal${index}">More Info</button>
                 </div> 
            </div> 
        </div>
    `;
    showProducts.insertAdjacentHTML('beforeend', card);

    var modal = `
        <div class="modal fade" id="modal${index}" tabindex="-1" aria-labelledby="modalLabel${index}" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel${index}">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${product.image}" alt="" class="modal-img-top"> 
                        <p>Details for ${product.name}.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    showProducts.insertAdjacentHTML('beforeend', modal);
});

// Event listener for Buy Now button
var btnBuyNow = document.querySelectorAll(".buynow");
btnBuyNow.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Product bought!");
    });
});
