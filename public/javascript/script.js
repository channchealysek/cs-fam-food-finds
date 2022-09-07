

// if (document.querySelector('#category')){// change to check if the categories drop down is there
//     document.querySelector("#category").addEventListener("mousedown", selectCategoryHandler);
// }

const spanElstart="<span class='mr-1 dropdownwidth'>"
const spanElend="</span>"
const svgEl ="<svg class='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/> </svg>"
const listEl = document.querySelector("#itemCategoris");
if(listEl) {
    listEl.addEventListener("click", categoryHandler);
}

function categoryHandler(event) {
    event.preventDefault();  
    //document.reload();
    let category = event.target.textContent;
    let categoryName = category.trim().replace(" ", "-")
    document.location.replace(`/category/${categoryName}`);
}

$( document ).ready(function() {
    const itemCategory = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    if(itemCategory===""){document.getElementById('btnCategories').innerHTML = spanElstart + "Categories" + spanElend + svgEl;}
    else{document.getElementById('btnCategories').innerHTML = spanElstart + itemCategory + spanElend + svgEl;}
    
    listEl.style.display = "";
});