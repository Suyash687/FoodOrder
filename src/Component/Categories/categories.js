import React  from 'react';
 


function categories({categories,filterItems}) {

  return <div className="container my-4">
          
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {categories.map((category, index) =>{
                  return <li><a class="dropdown-item" type='button' href="#" onClick={()=>{filterItems(category)}}>{category}</a></li>
                })}
            
              </ul>
            </div>
        </div>
  
}

export default categories;

