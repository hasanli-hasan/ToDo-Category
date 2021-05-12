let newCategoryBtn = document.getElementById("addItem");
let newCategoryName = document.getElementById("input");
let inputArea = document.getElementById("newCatArea");
let cancelArea = document.getElementById("cancel");
let addNewCategory = document.getElementById("add")

let subCategoryParent = document.getElementById("subCategoryParent");

//open & closed event
newCategoryBtn.addEventListener("click", function () {
    inputArea.style.display = "block";
})

cancelArea.addEventListener("click", function () {
    inputArea.style.display = "none";
});


//create new sub category event

addNewCategory.addEventListener("click", function () {
    let text = newCategoryName.value.trim();

    if (text == '') {
        return alert("Please Add Something")
    };

    //create elements and add subCategory Parents innerHtml
    let div = document.createElement("div");
    div.className = "subCategory"
    //create p element and its innerHTML
    let p = document.createElement("p");
    p.innerText = text;
    p.innerHTML += (
        ` <i id="addItem" class="fas fa-plus-circle"></i>
              <i class="fas fa-trash-alt" id="cancel"></i>`
    )

    //remove sub category
    p.lastElementChild.addEventListener("click", function () {
        this.parentNode.parentNode.remove()
    })

    newCategoryName.value = ''
    div.appendChild(p)

    inputArea.style.display = "none";

    //create modal
    let modalDiv = document.createElement("div");
    modalDiv.className = "subcategory-modal";
    modalDiv.innerHTML = (
        ` <input type="text" placeholder="add new item">
        <i class="fas fa-check-circle" id="add"></i>
        <i class="fas fa-times-circle" id="cancel"></i>`
    )

    div.appendChild(modalDiv)

    subCategoryParent.appendChild(div)

    // open modal event
    p.firstElementChild.addEventListener("click", function () {
        let modal = this.parentNode.nextElementSibling
        modal.style.display = "block";
    })

    //close modal
    p.nextElementSibling.lastElementChild.addEventListener("click", function () {
        this.parentNode.style.display = "none"
    })

    //create children
    p.nextElementSibling.lastElementChild.previousElementSibling.addEventListener("click", function () {
        let childText = this.previousElementSibling.value.trim();

        //create children html
        let childDiv = document.createElement("div");
        childDiv.className = "subCategory-childs";

        let ul = document.createElement("ul")
        let li = document.createElement("li")

        li.innerText = childText;
        ul.appendChild(li);
        childDiv.appendChild(ul);

        let mainParentDiv = this.parentNode.parentNode
        mainParentDiv.appendChild(childDiv)

        this.previousElementSibling.value = ''
        this.parentNode.style.display = "none"
    })

})


//zoom js
var zoom = 1;
		
$('.zoom').on('click', function(){
    zoom += 0.1;
    $('.container').css('zoom', zoom);
});
$('.zoom-init').on('click', function(){
    zoom = 1;
    $('.container').css('zoom', zoom);
});
$('.zoom-out').on('click', function(){
    zoom -= 0.1;
    $('.container').css('zoom', zoom);
});