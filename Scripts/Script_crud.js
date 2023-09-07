document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('crudForm');
    const listaUsuarios = document.getElementById('listaUsuarios');
    const guardarBtn = document.getElementById('guardar');
    const editarBtn = document.getElementById('editar');
    const eliminarBtn = document.getElementById('eliminar');

    let selectedUser = null;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;

        if (selectedUser) {
            selectedUser.querySelector('strong').innerHTML = `${nombre} ${apellido}`;
            selectedUser.innerHTML += ` - ${correo}`;
            selectedUser.removeAttribute('data-id');
            selectedUser = null;
        } else {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${nombre} ${apellido}</strong> - ${correo}`;
            listaUsuarios.appendChild(listItem);
        }

        form.reset();
    });

    listaUsuarios.addEventListener('click', function(event) {
        const listItem = event.target.closest('li');
        if (listItem) {
            selectedUser = listItem;
            const id = selectedUser.getAttribute('data-id');
            const [nombre, apellido, correo] = selectedUser.textContent.split(' - ');

            document.getElementById('nombre').value = nombre.split(' ')[0];
            document.getElementById('apellido').value = nombre.split(' ')[1];
            document.getElementById('correo').value = correo;

            guardarBtn.innerHTML = 'Actualizar';
        }
    });

    editarBtn.addEventListener('click', function() {
        if (selectedUser) {
            form.reset();
            selectedUser.setAttribute('data-id', Date.now());
            guardarBtn.innerHTML = 'Guardar';
            selectedUser = null;
        }
    });

    eliminarBtn.addEventListener('click', function() {
        if (selectedUser) {
            selectedUser.remove();
            form.reset();
            guardarBtn.innerHTML = 'Guardar';
            selectedUser = null;
        }
    });
});
