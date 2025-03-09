// directorioClientes.js
document.addEventListener('DOMContentLoaded', () => {
    // Datos dummy
    const dummyData = [
        {
            nombre: "María González",
            tipo: "Vendedor",
            ubicacion: "Ciudad de México",
            presupuesto: 2500000,
            estado: "Activo",
            contacto: "maria@email.com | 55-1234-5678",
            propiedades: "Casa Las Lomas #123"
        },
        {
            nombre: "Carlos Mendoza",
            tipo: "Comprador",
            ubicacion: "Guadalajara",
            presupuesto: 1800000,
            estado: "Activo",
            contacto: "carlos_m@mail.com | 33-9876-5432",
            propiedades: "Departamento Centro Histórico #45"
        },
        {
            nombre: "Ana Torres",
            tipo: "Arrendador",
            ubicacion: "Monterrey",
            presupuesto: 850000,
            estado: "Inactivo",
            contacto: "anatorres@correo.com | 81-5555-1212",
            propiedades: "Casa Residencial San Pedro #78"
        },
        {
            nombre: "Luis Hernández",
            tipo: "Inversionista",
            ubicacion: "Cancún",
            presupuesto: 4500000,
            estado: "Activo",
            contacto: "luish@inversiones.mx | 998-234-5678",
            propiedades: "Terreno Playa Delfines #15"
        },
        {
            nombre: "Fernanda Castro",
            tipo: "Vendedor",
            ubicacion: "Puebla",
            presupuesto: 3200000,
            estado: "Activo",
            contacto: "fcastro@propiedades.com | 222-765-4321",
            propiedades: "Local Comercial Angelópolis #22"
        },
        {
            nombre: "Diego Rojas",
            tipo: "Comprador",
            ubicacion: "Tijuana",
            presupuesto: 1500000,
            estado: "Activo",
            contacto: "diego.rojas@mail.com | 664-111-2233",
            propiedades: "Casa Fracc. El Lago #9"
        },
        {
            nombre: "Sofía Ramírez",
            tipo: "Arrendatario",
            ubicacion: "Querétaro",
            presupuesto: 12000,
            estado: "Activo",
            contacto: "sofiar@correo.com | 442-444-5566",
            propiedades: "Departamento Centro #301"
        },
        {
            nombre: "Jorge Navarro",
            tipo: "Inversionista",
            ubicacion: "Los Cabos",
            presupuesto: 6800000,
            estado: "Inactivo",
            contacto: "jnavarro@luxury.com | 624-789-0123",
            propiedades: "Villa Privada Marina #5"
        },
        {
            nombre: "Adriana Mejía",
            tipo: "Vendedor",
            ubicacion: "Merida",
            presupuesto: 1950000,
            estado: "Activo",
            contacto: "amejia@casas.com | 999-321-6547",
            propiedades: "Casa Col. México Norte #33"
        },
        {
            nombre: "Oscar Delgado",
            tipo: "Comprador",
            ubicacion: "León",
            presupuesto: 950000,
            estado: "Activo",
            contacto: "odelgado@mail.com | 477-135-7924",
            propiedades: "Terreno Residencial #12"
        },
        {
            nombre: "Patricia Cordero",
            tipo: "Arrendador",
            ubicacion: "Puerto Vallarta",
            presupuesto: 2800000,
            estado: "Inactivo",
            contacto: "pcordero@pv.com | 322-987-6543",
            propiedades: "Condominio Playa #404"
        },
        {
            nombre: "Ricardo Vargas",
            tipo: "Inversionista",
            ubicacion: "CDMX",
            presupuesto: 8250000,
            estado: "Activo",
            contacto: "rvargas@capital.mx | 55-2468-1357",
            propiedades: "Edificio Corporativo Reforma #1500"
        },
        {
            nombre: "Gabriela Ortiz",
            tipo: "Vendedor",
            ubicacion: "Aguascalientes",
            presupuesto: 1650000,
            estado: "Activo",
            contacto: "g.ortiz@prop.com | 449-753-1598",
            propiedades: "Casa Fracc. Las Flores #78"
        },
        {
            nombre: "Manuel Jiménez",
            tipo: "Comprador",
            ubicacion: "Toluca",
            presupuesto: 750000,
            estado: "Inactivo",
            contacto: "manu_j@correo.com | 722-951-3574",
            propiedades: "Departamento Centro #25B"
        },
        {
            nombre: "Lucía Sánchez",
            tipo: "Arrendatario",
            ubicacion: "CDMX",
            presupuesto: 18000,
            estado: "Activo",
            contacto: "lusanz@mail.com | 55-3698-1472",
            propiedades: "Loft Condesa #PH3"
        },
        {
            nombre: "Enrique Fuentes",
            tipo: "Inversionista",
            ubicacion: "Riviera Maya",
            presupuesto: 12000000,
            estado: "Activo",
            contacto: "efuentes@resorts.com | 984-222-3333",
            propiedades: "Complejo Vacacional Xcaret #1"
        }
    
        // ... más datos
    ];
    
    let currentData = [];
    let currentPage = 1;
    const itemsPerPage = 10;

    // Funciones principales
    function init() {
        renderTable(dummyData);
        setupEventListeners();
        updateSummary();
    }

    function renderTable(data) {
        const tbody = document.getElementById('clientTableBody');
        tbody.innerHTML = '';
        
        data.forEach(client => {
            const row = `
                <tr>
                    <td>${client.nombre}</td>
                    <td>${client.tipo}</td>
                    <td>${client.ubicacion}</td>
                    <td>$${client.presupuesto.toLocaleString()}</td>
                    <td><span class="status-badge ${client.estado.toLowerCase()}">${client.estado}</span></td>
                    <td>
                        <div class="buttons-actions">
                            <button class="btn-action" id="viewClient">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button class="btn-action" id="editClient">
                                <i class="fa-solid fa-user-pen"></i>
                            </button>
                            <button class="btn-action deleteClient" id="deleteClient">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

    }
    
    /*
                                <button class="btn-action" onclick="showActionsMenu(event)">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
    */
    // Sistema de filtrado combinado
    function applyFilters() {
        const searchTerm = document.getElementById('clientSearch').value.toLowerCase();
        const selectedTypes = [...document.querySelectorAll('[name="type"]:checked')].map(c => c.value);
        const selectedStatus = [...document.querySelectorAll('[name="status"]:checked')].map(c => c.value);

        currentData = dummyData.filter(client => {
            const matchesSearch = Object.values(client).some(value => 
                String(value).toLowerCase().includes(searchTerm)
            );
            const matchesType = selectedTypes.includes('Todos') || selectedTypes.includes(client.tipo);
            const matchesStatus = selectedStatus.includes(client.estado);
            
            return matchesSearch && matchesType && matchesStatus;
        });
        
        renderTable(currentData);
        updatePagination();
    }

    // Paginación
    function updatePagination() {
        const totalPages = Math.ceil(currentData.length / itemsPerPage);
        document.getElementById('currentPage').textContent = currentPage;
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === totalPages;
    }

    // Sistema de ordenamiento
    function sortData(column, direction) {
        currentData.sort((a, b) => {
            if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        renderTable(currentData);
    }

    // Event Listeners
    function setupEventListeners() {
        document.getElementById('clientSearch').addEventListener('input', 
            debounce(applyFilters, 300));
        
        document.querySelectorAll('[name="type"], [name="status"]')
            .forEach(checkbox => checkbox.addEventListener('change', applyFilters));
        
        document.querySelectorAll('th[data-sort]').forEach(header => {
            header.addEventListener('click', () => {
                const column = header.dataset.sort;
                const direction = header.classList.contains('asc') ? 'desc' : 'asc';
                sortData(column, direction);
                header.classList.toggle('asc', direction === 'asc');
                header.classList.toggle('desc', direction === 'desc');
            });
        });
    }

    // Utilidades
    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), timeout);
        };
    }

    init();
});