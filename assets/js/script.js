document.addEventListener('DOMContentLoaded', function () {


    /*-------------------------------------------
        global search collapse/show
     --------------------------------------------- */

    const globalSearch = document.getElementById('globalSearch');
    const searchToggleWrap = document.querySelector('.search-toggle-wrap');

    globalSearch.addEventListener('click', function () {
        // Use classList.toggle() to add/remove 'active' class
        searchToggleWrap.classList.toggle('active');
    });


    /*-------------------------------------------
        mobile menu 
     --------------------------------------------- */


    const toggleBtn = document.querySelector('.toggle-icon');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('open')
        toggleBtn.classList.toggle('open')
    })


    document.querySelectorAll('.mobile-main-menu > li > a').forEach(mainMenuItem => {
        mainMenuItem.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default link behavior

            // Toggle the open class on the clicked item
            const parentLi = mainMenuItem.parentElement;
            const isOpen = parentLi.classList.contains('open');
            document.querySelectorAll('.mobile-main-menu > li').forEach(li => li.classList.remove('open'));

            if (!isOpen) {
                parentLi.classList.add('open');
            }
        });
    });


    document.querySelectorAll('.mobile-sub-menu > li > a').forEach(subMenuItem => {
        subMenuItem.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default link behavior

            // Toggle the open class on the clicked item
            const parentLi = subMenuItem.parentElement;
            const isOpen = parentLi.classList.contains('open');
            document.querySelectorAll('.mobile-sub-menu > li').forEach(li => li.classList.remove('open'));

            if (!isOpen) {
                parentLi.classList.add('open');
            }
        });
    });

    /*-------------------------------------------
         Sticky Header
     --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-bottom");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    /*-------------------------------------------
         footer items collapsed
     --------------------------------------------- */

    document.querySelectorAll('.footer-widget h4').forEach(header => {
        header.addEventListener('click', function () {
            const parentWidget = this.parentElement;

            // Check if this footer-widget is already active
            const isActive = parentWidget.classList.contains('active');

            // Collapse all footer widgets
            document.querySelectorAll('.footer-widget').forEach(widget => widget.classList.remove('active'));

            // If it wasn't active, expand this one
            if (!isActive) {
                parentWidget.classList.add('active');
            }
        });
    });






    /*-------------------------------------------
         mobile footer fixed
     --------------------------------------------- */

    document.querySelectorAll('.mobile-footer-items').forEach(item => {
        const href = item.getAttribute('href');
        const currentUrl = window.location.pathname.split('/').pop(); // Get the current page

        if (href === `./${currentUrl}` || href === currentUrl) {
            item.classList.add('active');
        }
    });



    /*-------------------------------------------
         product size and color active
     --------------------------------------------- */


    // Size Selection
    const selectedSizeInput = document.getElementById('selected-size');
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedSizeInput.value = this.dataset.size;
        });
    });

    // Color Selection
    const selectedColorInput = document.getElementById('selected-color');
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function () {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedColorInput.value = this.dataset.color;
        });
    });



    /*-------------------------------------------
         product add to cart 
     --------------------------------------------- */



    const decreaseBtns = document.querySelectorAll('.product-decrease');
    const increaseBtns = document.querySelectorAll('.product-increase');
    const inputFields = document.querySelectorAll('.product-countdown-input');
    const clearCartBtn = document.getElementById('clearAllCart');
    const totalPriceElement = document.querySelector('.total'); // Total selector
    const clearSingleCartBtns = document.querySelectorAll('.clear-single-cart i');


    // Function to calculate the subtotal and total price
    function calculateSubtotalAndTotal() {
        let subtotal = 0;

        const subtotalElements = document.querySelectorAll('.cart-subtotal-price');
        subtotalElements.forEach(subtotalElem => {
            const price = parseFloat(subtotalElem.innerText.replace('Tk', '').trim());
            subtotal += price;
        });
        if (totalPriceElement) {
            totalPriceElement.innerText = `Tk ${subtotal.toFixed(2)}`;
        }
    }


    // Function to update the subtotal for individual items
    function updateSubtotal(input, row) {
        const priceElement = row.querySelector('.cart-product-price');
        const subtotalElement = row.querySelector('.cart-subtotal-price');
        const price = parseFloat(priceElement.innerText.replace('Tk', '').trim());
        const quantity = parseInt(input.value);
        const newSubtotal = price * quantity;

        if (subtotalElement) {
            subtotalElement.innerText = `Tk ${newSubtotal.toFixed(2)}`;
        }

        calculateSubtotalAndTotal();
    }

    if (decreaseBtns) {
        // Decrease button event listener
        decreaseBtns.forEach((btn, index) => {
            const input = inputFields[index];
            const row = btn.closest('tr');
            btn.addEventListener('click', function () {
                let currentValue = parseInt(input.value);
                if (currentValue > 1) {
                    input.value = currentValue - 1;
                    if (totalPriceElement) {
                        updateSubtotal(input, row);
                    }
                }
            });
        });
    }

    if (increaseBtns) {
        // Increase button event listener
        increaseBtns.forEach((btn, index) => {
            const input = inputFields[index];
            const row = btn.closest('tr');
            btn.addEventListener('click', function () {
                let currentValue = parseInt(input.value);
                input.value = currentValue + 1;
                if (totalPriceElement) {
                    updateSubtotal(input, row);
                }
            });
        });
    }

    if (inputFields) {
        // Input field event listener for direct changes
        inputFields.forEach((input, index) => {
            const row = input.closest('tr');
            input.addEventListener('input', function () {
                if (input.value < 1) input.value = 1;
                updateSubtotal(input, row);
            });
        });
    }

    if (clearCartBtn) {
        // Clear all cart items
        clearCartBtn.addEventListener('click', function () {
            const cartWrap = document.querySelector('.cart-wrap table');
            cartWrap.innerHTML =
                `<div class='py-5'>
                    <div class="mb-3 text-center">
                        <h3>Shopping Cart</h3>
                    </div>
                    <div class="mb-3 text-center">
                        <h4 class='text-theme'>Your cart is currently empty.</h4>
                    </div>
                        <div class='text-center'>
                        <p>Continue browsing <a class='fw-bold' href='../../collection.html'><u>here</u></a></p>
                        </div>
                </div>`;
            console.log('cart', cartWrap);
            calculateSubtotalAndTotal();
        });
    }

    if (clearSingleCartBtns) {
        // Remove single item from the cart
        clearSingleCartBtns.forEach((btn) => {
            btn.addEventListener('click', function () {
                const row = btn.closest('tr');
                row.remove();
                calculateSubtotalAndTotal();
            });
        });
    }


    calculateSubtotalAndTotal();


    /*-------------------------------------------
     product offcanvas script
 --------------------------------------------- */

    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const removeItemIcons = document.querySelectorAll('.remove-item');
    const emptyCartMessage = document.querySelector('.cart-empty-message');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartButtons = document.getElementById('cartButtons');
    const subtotalPriceElement = document.getElementById('subtotalPrice');

    // Function to calculate the subtotal price
    function calculateSubtotal() {
        let total = 0;
        const cartItems = document.querySelectorAll('.product-cart-items');

        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('Tk', '').trim());
            total += quantity * price;
        });

        // Update the displayed subtotal price
        subtotalPriceElement.textContent = total.toFixed(2);
    }

    // Function to check if the cart is empty and update the UI
    function checkIfCartIsEmpty() {
        const cartItems = document.querySelectorAll('.product-cart-items');
        if (cartItems.length === 0) {
            cartItemsContainer.style.display = 'none'; // Hide cart items container
            cartSubtotal.style.display = 'none'; // Hide subtotal section
            cartButtons.style.display = 'none'; // Hide buttons (View Cart, Checkout)
            emptyCartMessage.style.display = 'block'; // Show empty cart message
        }
    }

    // Remove item from cart and update subtotal when 'fa-times' icon is clicked
    removeItemIcons.forEach((icon) => {
        icon.addEventListener('click', function () {
            const cartItem = icon.closest('.product-cart-items');
            cartItem.remove(); // Remove the clicked item
            calculateSubtotal(); // Recalculate subtotal
            checkIfCartIsEmpty(); // Check if the cart is empty after item removal
        });
    });

    // Initial calculation and empty cart check
    calculateSubtotal();
    checkIfCartIsEmpty();


    /*-------------------------------------------
     product compare script 
 --------------------------------------------- */
    document.querySelectorAll('.remove-column').forEach((removeLink) => {
        removeLink.addEventListener('click', function () {
            const colIndex = this.getAttribute('data-col');

            // Remove the <th> in the header
            const headerCell = document.querySelector(`#compareTable thead tr th:nth-child(${parseInt(colIndex) + 1})`);
            if (headerCell) {
                headerCell.remove();
            }

            // Remove the corresponding <td> elements in each row
            document.querySelectorAll(`#compareTable tbody tr`).forEach((row) => {
                const bodyCell = row.querySelector(`td:nth-child(${parseInt(colIndex) + 1})`);
                if (bodyCell) {
                    bodyCell.remove();
                }
            });

            // Update the remaining columns' indices
            updateColumnIndices();

            // Check if all products are removed
            checkIfAllProductsRemoved();
        });
    });

    // Function to update the indices for "Remove" links after a column is removed
    function updateColumnIndices() {
        document.querySelectorAll('.remove-column').forEach((removeLink, index) => {
            removeLink.setAttribute('data-col', index + 1);
        });
    }

    // Function to check if all product columns are removed
    function checkIfAllProductsRemoved() {
        const remainingColumns = document.querySelectorAll('#compareTable thead tr th').length;

        // If only one column (Action) is left, hide the table and show the message
        if (remainingColumns === 1) {
            document.getElementById('compareTable').style.display = 'none';
            document.getElementById('emptyMessage').style.display = 'block';
        }
    }




})
