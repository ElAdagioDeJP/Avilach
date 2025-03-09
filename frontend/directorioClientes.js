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