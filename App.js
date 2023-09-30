const menuBtn = document.getElementById("menu-btn");

// console.log()
// console.log(menuBtn)
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay")
const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightBox = document.querySelector(".lightbox-container .main-thumbnail");
const images = document.querySelectorAll(".preview img")
// console.log(images)
console.log(images)
const plusBtn = document.querySelector("#plus")
// console.log(plusBtn)
const minusBtn = document.querySelector("#minus")
const amount = document.querySelector(".amount")
const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("previous")
const slider = document.querySelector(".mobile-thumb")
const thumbMob = document.querySelector(".thumb-mob")
const cartBtn = document.querySelector(".cart-btn")
const cart = document.querySelector(".cart-warp")
// console.log(cart)
const closeLightboxBtn = document.querySelector(".close-lightbox")
const lightbox = document.querySelector(".lightbox")
const addBtn = document.querySelector(".add-btn")
// console.log(addBtn);
const indicator = document.querySelector(".indicator")
const wrp = document.querySelector(".cart-content")
const deleteBtn = document.querySelector(".delete-btn")

// console.log(indicator);
// console.log(wrp);
let amountValue = 0
let currentImage = 1
indicator.style.display = "none"

// console.log(amount);
function openMenu() {
    menu.classList.add("active")
    overlay.classList.add("active")

}

function closeMenu() {
    menu.classList.remove("active")
    overlay.classList.remove("active")
}

function handlePlus() {
    amountValue++;
    amount.textContent = amountValue

}
function handleMinus() {
    if (amountValue > 0) {
        amountValue--;
        amount.textContent = amountValue
    }

}
function nextImage() {
    if (currentImage === 4) {
        currentImage = 1;
    } else {
        currentImage++
    }
    thumbMob.src = `./images/image-product-${currentImage}.jpg`
}

function prevImage() {
    if (currentImage === 1) {
        currentImage = 4
    } else {
        currentImage--
    }
    thumbMob.src = `./images/image-product-${currentImage}.jpg`
}

function toggleCart() {
    cart.classList.toggle("invisible")
}

function closeLightBox() {
    lightbox.classList.add("invisible")
}

function openLightBox() {
    lightbox.classList.remove("invisible")
}

function addItem() {
    if (amountValue > 0) {
        const total = 125.00 * amountValue
        wrp.classList.remove("empty");
        wrp.innerHTML = `
        <div class="product">
        <div>
        <img class="product-img" src="./images/image-product-1-thumbnail.jpg">
        <div class="product-info">
        <p class="product-title">Fall limited Edition Sneakers</p>
        <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b class="total">$${total}</p>
        </div>
        <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg"</button>
        </div>
        <button class="checkout-btn">Checkout</button>
        </div>
        `;
        indicator.style.display = "block"
        indicator.textContent = amountValue
    }
}

function deleteItem() {
    wrp.classList.add("empty")
    wrp.innerHTML = ` 
        <p class="empty-text">Your cart is empty</p>
`

    indicator.style.display = "none"
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const lastImg = document.querySelectorAll(".selected")
        if (lastImg) {
            lastImg[0].classList.remove("selected");
        }
        image.classList.add("selected")

        const selectedImg = document.querySelector(".selected")

        switch(selectedImg.getAttribute("src")) {
         case "./images/image-product-1-thumbnail.jpg":
            mainThumbnail.src = "./images/image-product-1-thumbnail.jpg";
            mainThumbnailLightBox.src = "./images/image-product-1-thumbnail.jpg";
            break;

         case "./images/image-product-2-thumbnail.jpg":
            mainThumbnail.src = "./images/image-product-2-thumbnail.jpg";
            mainThumbnailLightBox.src = "./images/image-product-2-thumbnail.jpg";
            break;

        case "./images/image-product-3-thumbnail.jpg":
            mainThumbnail.src = "./images/image-product-3-thumbnail.jpg";
            mainThumbnailLightBox.src = "./images/image-product-3-thumbnail.jpg";
            break   ;
        

        case "./images/image-product-4-thumbnail.jpg":
            mainThumbnail.src = "./images/image-product-4-thumbnail.jpg";
            mainThumbnailLightBox.src = "./images/image-product-4-thumbnail.jpg";
            break;

        }
    
    
    })
})


addBtn.addEventListener("click", addItem)
closeLightboxBtn.addEventListener("click", closeLightBox)
mainThumbnail.addEventListener("click", openLightBox)
cartBtn.addEventListener("click", toggleCart)
plusBtn.addEventListener("click", handlePlus)
minusBtn.addEventListener("click", handleMinus)
prevBtn.addEventListener("click", prevImage)
nextBtn.addEventListener("click", nextImage)
menuBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)