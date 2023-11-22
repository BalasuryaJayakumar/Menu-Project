const menu = [ 
    {
        id: 1,
        title: "chicken fry",
        category: "starter",
        price: 100,
        img: "./img/chicken65.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 2,
        title: "grill chicken",
        category: "starter",
        price: 200,
        img: "./img/grillchicken.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 3,
        title: "prawn fry",
        category: "starter",
        price: 150,
        img: "./img/prawnfry.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 4,
        title: "chicken tandoori",
        category: "starter",
        price: 280,
        img: "./img/chicken_tandoori.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 5,
        title: "pizza",
        category: "lunch",
        price: 250,
        img: "./img/pizza.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 6,
        title: "paneer nan",
        category: "lunch",
        price: 80,
        img: "./img/nan.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 7,
        title: "chicken kawab",
        category: "lunch",
        price: 300,
        img: "./img/kawab_chicken.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 8,
        title: "thai puri",
        category: "lunch",
        price: 100,
        img: "./img/Thaipuri.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 9,
        title: "ice coffee",
        category: "shake",
        price: 90,
        img: "./img/icecoffee.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 10,
        title: "mojito",
        category: "shake",
        price: 80,
        img: "./img/Mojito.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 11,
        title: "strawberry milkshake",
        category: "shake",
        price: 90,
        img: "./img/strawberyshake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
    {
        id: 12,
        title: "chocklate milkshake",
        category: "shake",
        price: 100,
        img: "./img/choclateshake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquam sapiente est ea facere labore magni ratione ipsa."
    },
];

const sectionCenter = document.querySelector(".sectionCenter");
const btns = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
})

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(menuItem => {
            if (menuItem.category === category) {
                return menuItem;
            }
        })

        if (category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory)
        }
    });
});



const displayMenuItems = (menuItem) => {
    const displayMenu = menuItem.map(item => {
        return `<article class="menuItem">
        <figure class="fig">
            <img src=${item.img} alt=${item.title} class="image" width="150px" height="100px">
        </figure>
        <div class="textContent">
            <aside class="menuAside">
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
            </aside>
            <p class="menuPara">
                ${item.desc}
            </p>
        </div>
    </article>`
    });

    const getDisplayMenu = displayMenu.join("");
    sectionCenter.innerHTML = getDisplayMenu;
};
