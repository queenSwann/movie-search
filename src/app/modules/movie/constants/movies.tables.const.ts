export const USERS_TABLES = {
    SETTINGS: {
        mode: 'external',
        selectedRowIndex: -1,
        pager: {
            display: true,
        },
        actions: {
            columnTitle: 'Acciones',
            position: 'right',
            add: false,
            delete: true,
        },
        edit: {
            editButtonContent: 'Consultar',
        },

        noDataMessage: 'No hay personal para mostrar',
        columns: {
            nif: {
                title: 'Nombre',
            }
        },
        attr: {
            class: 'smart-table',
        },
    },
}
