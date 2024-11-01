'use client'

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function inputAlertDelete(action) {
    return MySwal.fire({
        title: '¿Are you sure?',
        text: "¡You don't revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            action();

            Swal.fire(
                'Deleted!',
                'success'
            );
        }
    });
}