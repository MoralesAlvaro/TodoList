
// btn.addEventListener('click', function (){
//     console.log('click');
// });

// Esperando a que se carge el html
document.addEventListener('DOMContentLoaded', function(){
    // Opteniendo los elementos
    const btn = document.getElementById('add');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    let id = 1;

    // Removiendo Toddo
    function removeToddo(id) {
        document.getElementById(id).remove();
    }

    // Agregando contenido a la tabla
    function addToddo() {
        if (title.value === '' || description.value === '') {
            alert.classList.remove('d-none');
            alert.innerText = 'Title and Description are required';
            return;
        }

        alert.classList.add('d-none');
        const row = table.insertRow();
        row.setAttribute('id', id++);
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        // Botón de Borrar
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = function(e){
            removeToddo(row.getAttribute('id'));
        }
        row.children[3].appendChild(removeBtn);

        
    }
    
    btn.onclick = addToddo;

});