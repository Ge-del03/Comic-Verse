// URLs for Loops
const COMIC_ASSET_UPLOAD_URL = 'https://magicloops.dev/api/loop/35d2f7a8-9029-47d3-bab6-6afad16e8bed/run';
const SITE_STATS_LOOP_URL = 'https://magicloops.dev/api/loop/3684bf4b-6588-4e4a-8d13-85a0b10aa416/run';
const COMIC_API_FETCH_URL = 'https://magicloops.dev/api/loop/7030592e-75ae-476e-90e8-7517831bfefe/run';

$(document).ready(function () {
    $(document).ready(function () {
        // Mostrar/ocultar la barra de búsqueda en Marvel
$('#toggle-marvel-search').click(function () {
    const searchInput = $('#marvel-search');
    if (searchInput.is(':visible')) {
        searchInput.hide(); // Ocultar si ya está visible
    } else {
        searchInput.show().focus(); // Mostrar y enfocar
    }
});

// Mostrar/ocultar la barra de búsqueda en DC
$('#toggle-dc-search').click(function () {
    const searchInput = $('#dc-search');
    if (searchInput.is(':visible')) {
        searchInput.hide(); // Ocultar si ya está visible
    } else {
        searchInput.show().focus(); // Mostrar y enfocar
    }
});

// Mostrar/ocultar la barra de búsqueda en Favoritos
$('#toggle-favorites-search').click(function () {
    const searchInput = $('#favorites-search');
    if (searchInput.is(':visible')) {
        searchInput.hide(); // Ocultar si ya está visible
    } else {
        searchInput.show().focus(); // Mostrar y enfocar
    }
});

        // Función para normalizar texto eliminando guiones, espacios y convirtiendo a minúsculas
        function normalizeText(text) {
            return text.toLowerCase().replace(/[\s-]+/g, '');
        }
    
        // Función para buscar cómics en Marvel
        $('#marvel-search').on('input', function () {
            const searchTerm = normalizeText($(this).val());
            $('#marvel-comics-grid .comic-item').each(function () {
                const title = normalizeText($(this).find('h4').text());
                if (title.includes(searchTerm)) {
                    $(this).show(); // Mostrar si coincide
                } else {
                    $(this).hide(); // Ocultar si no coincide
                }
            });
        });
    
        // Función para buscar cómics en DC
        $('#dc-search').on('input', function () {
            const searchTerm = normalizeText($(this).val());
            $('#dc-comics-grid .comic-item').each(function () {
                const title = normalizeText($(this).find('h4').text());
                if (title.includes(searchTerm)) {
                    $(this).show(); // Mostrar si coincide
                } else {
                    $(this).hide(); // Ocultar si no coincide
                }
            });
        });

// Función para buscar cómics en Favoritos
$('#favorites-search').on('input', function () {
    const searchTerm = $(this).val().toLowerCase().replace(/[\s-]+/g, '');
    $('#favorites-grid .comic-item').each(function () {
        const title = $(this).find('h4').text().toLowerCase().replace(/[\s-]+/g, '');
        if (title.includes(searchTerm)) {
            $(this).show(); // Mostrar si coincide
        } else {
            $(this).hide(); // Ocultar si no coincide
        }
    });
});
    });

    // Aplicar el modo oscuro o claro al cargar la página según la preferencia guardada
    $(document).ready(function () {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            $('body').addClass('dark-mode');
            $('#toggle-dark-mode').html(`<i class="fas fa-sun me-2"></i> Modo Claro`);
        } else {
            $('body').removeClass('dark-mode');
            $('#toggle-dark-mode').html(`<i class="fas fa-moon me-2"></i> Modo Oscuro`);
        }
    });

    // Alternar entre modo claro y oscuro y guardar la preferencia
    $('#toggle-dark-mode').click(function () {
        $('body').toggleClass('dark-mode');
        const isDarkMode = $('body').hasClass('dark-mode');
        $(this).html(`<i class="fas fa-${isDarkMode ? 'sun' : 'moon'} me-2"></i> ${isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}`);
        localStorage.setItem('darkMode', isDarkMode); // Guardar preferencia en localStorage
    });

    // Simulated data (to be replaced with API calls if needed)
    const marvelComics = [

];

    const dcComics = [
        {
            id: 478,
            title: "Absolute Wonder Woman",
            cover: "./Portadas Marvel/Avengers Prime.jpg",
            authors: "William Moulton Marston, George Pérez, Greg Rucka, Gail Simone, Grant Morrison",
            characters: "Wonder Woman",
            synopsis: "Recopilación de historias clásicas o significativas de Wonder Woman.",
            publicationDate: "Desconocido",
            volumes: [
                { 
                    name: 'Volumen 1', 
                    pages: 5, 
                    images: [
                        "./Portadas Marvel/spider-society.jpg",
                        "./Paginas/SpiderSociety/2.jpg",
                        "./Paginas/SpiderSociety/3.jpg",
                        "./Paginas/SpiderSociety/4.jpg",
                        "./Paginas/SpiderSociety/5.jpg"
                    ]
                }
            ]
        }
    ];

    // Datos de personajes de Marvel y DC
    const marvelCharacters = [
        { name: "Spider-Man", image: "./images/marvel/spiderman.jpg" },
        { name: "Iron Man", image: "./images/marvel/ironman.jpg" },
        { name: "Captain America", image: "./images/marvel/captainamerica.jpg" },
        { name: "Thor", image: "./images/marvel/thor.jpg" }
    ];

    const dcCharacters = [
        { name: "Batman", image: "./images/dc/batman.jpg" },
        { name: "Superman", image: "./images/dc/superman.jpg" },
        { name: "Wonder Woman", image: "./images/dc/wonderwoman.jpg" },
        { name: "Flash", image: "./images/dc/flash.jpg" }
    ];

    // Función para generar personajes en la sección de personajes
    function generateCharacters() {
        const marvelGrid = $('#marvel-characters-grid');
        const dcGrid = $('#dc-characters-grid');

        marvelCharacters.forEach(character => {
            const characterCard = `
                <div class="character-card">
                    <img src="${character.image}" alt="${character.name}" class="character-image">
                    <h4>${character.name}</h4>
                </div>`;
            marvelGrid.append(characterCard);
        });

        dcCharacters.forEach(character => {
            const characterCard = `
                <div class="character-card">
                    <img src="${character.image}" alt="${character.name}" class="character-image">
                    <h4>${character.name}</h4>
                </div>`;
            dcGrid.append(characterCard);
        });
    }

    // Llamar a la función para generar personajes al cargar la página
    $(document).ready(function () {
        generateCharacters();
    });

    // Navegación entre secciones
    function showSection(sectionId) {
        $('#home-section, #marvel-comics, #dc-comics, #comic-detail, #reading-page, #favorites-section, #characters-section, #history-section, #reader-universe-section, #stats-section').hide();
        $(sectionId).show();

        // Mostrar "Personajes Icónicos" solo en el menú principal
        if (sectionId === '#home-section') {
            $('#characters-section').fadeIn(); // Mostrar con animación
        } else {
            $('#characters-section').hide(); // Asegurarse de ocultarlo en cualquier otra sección
        }

        window.scrollTo(0, 0);
    }

    // Mostrar la sección de Marvel
    $('#marvel-btn').click(function () {
        showSection('#marvel-comics');
        loadMarvelComics();
    });

    // Mostrar la sección de DC
    $('#dc-btn').click(function () {
        showSection('#dc-comics');
        loadDCComics();
    });

    // Mostrar la sección de favoritos
    $('#favorites-btn').click(function () {
        showSection('#favorites-section'); // Usar la función showSection para consistencia
        updateFavoritesSection(); // Asegurarse de actualizar la sección al mostrarla
    });

    // Volver al menú principal desde favoritos
    $('#back-to-home-from-favorites').click(function () {
        $('#favorites-section').hide();
        $('#home-section').show();
    });

    // Volver al listado desde detalles del cómic
    $('#back-to-list').click(function () {
        const universe = $(this).attr('data-universe'); // Obtiene el universo del botón
        if (universe === 'marvel') {
            showSection('#marvel-comics'); // Redirige a Marvel
        } else if (universe === 'dc') {
            showSection('#dc-comics'); // Redirige a DC
        }
    });

    // Volver a detalles desde la página de lectura
    $('#back-to-detail').click(function () {
        const comicId = $('#reading-title').data('comic-id');
        const universe = $('#reading-title').data('universe');
        if (comicId && universe) {
            loadComicDetail(comicId, universe);
        }
    });

    // Volver a la página principal desde la lectura
    $('#reading-home').click(function () {
        showSection('#home-section');
        updateContinueReadingOption(); // Actualizar automáticamente al salir
    });

    // Eliminada la lógica relacionada con la sección de historial
    $('#history-btn').off();
    $('#clear-history-btn').off();
    $('#history-search').off();

    // Eliminada la lógica relacionada con "Mi Universo Lector"
    $('#reader-universe-btn').off();
    $('#clear-universe-btn').off();
    $('#detailed-stats-btn').off();

    // Eliminar eventos y funciones relacionadas con estadísticas
    $('#stats-btn').off();
    $('#reset-stats-btn').off();
    $('#detailed-stats-btn').off();

    // Función para cargar cómics en fragmentos para mejorar el rendimiento
    function loadComicsInChunks(comics, containerId, universe) {
        const container = $(containerId);
        container.empty(); // Limpiar el contenedor antes de cargar

        comics.forEach((comic) => {
            const comicElement = `
                <div class="comic-item" data-id="${comic.id}" data-universe="${universe}">
                    <img src="${comic.cover}" alt="${comic.title}" class="comic-cover" style="width: 100%; height: auto; border-radius: 10px;">
                    <h4 class="mt-2 text-center" style="color: var(--comic-white);">${comic.title}</h4>
                </div>`;
            container.append(comicElement);
        });

        // Agregar eventos a los cómics para redirigir a los detalles
        $(`${containerId} .comic-item`).click(function () {
            const comicId = $(this).data('id');
            const universe = $(this).data('universe');
            loadComicDetail(comicId, universe);
        });
    }

    // Función para inicializar la paginación
    function initializePagination(comics, containerId, paginationContainerId, universe) {
        const itemsPerPage = universe === 'favorites' ? 4 : 10; // Limitar a 4 en favoritos
        const totalPages = Math.ceil(comics.length / itemsPerPage);

        function renderPage(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const comicsToRender = comics.slice(startIndex, endIndex);

            loadComicsInChunks(comicsToRender, containerId, universe);
            renderPagination(page);
        }

        function renderPagination(currentPage) {
            const paginationContainer = document.querySelector(paginationContainerId);
            paginationContainer.innerHTML = '';

            if (totalPages <= 1) {
                paginationContainer.innerHTML = `<button class="comic-button pagination-btn active">1</button>`;
                return;
            }

            const maxVisibleButtons = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
            let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

            if (endPage - startPage + 1 < maxVisibleButtons) {
                startPage = Math.max(1, endPage - maxVisibleButtons + 1);
            }

            if (currentPage > 1) {
                paginationContainer.innerHTML += `<button class="comic-button pagination-btn prev-btn">‹</button>`;
            }

            if (startPage > 1) {
                paginationContainer.innerHTML += `<button class="comic-button pagination-btn">1</button>`;
                if (startPage > 2) {
                    paginationContainer.innerHTML += `<span class="pagination-ellipsis">...</span>`;
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                paginationContainer.innerHTML += `<button class="comic-button pagination-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    paginationContainer.innerHTML += `<span class="pagination-ellipsis">...</span>`;
                }
                paginationContainer.innerHTML += `<button class="comic-button pagination-btn">${totalPages}</button>`;
            }

            if (currentPage < totalPages) {
                paginationContainer.innerHTML += `<button class="comic-button pagination-btn next-btn">›</button>`;
            }

            paginationContainer.querySelectorAll('.pagination-btn').forEach(button => {
                button.addEventListener('click', () => {
                    if (button.classList.contains('prev-btn')) {
                        renderPage(currentPage - 1);
                    } else if (button.classList.contains('next-btn')) {
                        renderPage(currentPage + 1);
                    } else {
                        renderPage(parseInt(button.textContent));
                    }
                });
            });
        }

        renderPage(1);
    }

    // Inicializar la paginación para Marvel
    function loadMarvelComics() {
        const containerId = '#marvel-comics-grid';
        const paginationContainerId = '#marvel-pagination';
        initializePagination(marvelComics, containerId, paginationContainerId, 'marvel');
    }

    // Inicializar la paginación para DC
    function loadDCComics() {
        const containerId = '#dc-comics-grid';
        const paginationContainerId = '#dc-pagination';
        initializePagination(dcComics, containerId, paginationContainerId, 'dc');
    }

    // Reemplazar las funciones de carga de cómics con la nueva función optimizada
    function updateFavoritesSection() {
        const favorites = getFavorites();
        const containerId = '#favorites-grid';
        const paginationContainerId = '#favorites-pagination';
        const itemsPerPage = 6; // Número de elementos por página
        const totalPages = Math.ceil(favorites.length / itemsPerPage);

        function renderPage(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const favoritesToRender = favorites.slice(startIndex, endIndex);

            const container = $(containerId);
            container.empty(); // Limpiar el contenedor antes de cargar

            if (favoritesToRender.length === 0) {
                container.html('<p class="text-center text-muted">No tienes cómics en favoritos.</p>');
                return;
            }

            favoritesToRender.forEach((comic) => {
                const comicElement = `
                    <div class="comic-item" data-id="${comic.id}" data-universe="${comic.universe}">
                        <img src="${comic.cover}" alt="${comic.title}" class="comic-cover">
                        <h4>${comic.title}</h4>
                    </div>`;
                container.append(comicElement);
            });

            // Agregar eventos a los cómics para redirigir a los detalles
            $(`${containerId} .comic-item`).click(function () {
                const comicId = $(this).data('id');
                const universe = $(this).data('universe');
                loadComicDetail(comicId, universe); // Mostrar los detalles del cómic
            });
        }

        function renderPagination(currentPage) {
            const paginationContainer = $(paginationContainerId);
            paginationContainer.empty();

            if (totalPages <= 1) return; // No mostrar paginación si solo hay una página

            if (currentPage > 1) {
                paginationContainer.append(`<button class="comic-button pagination-btn prev-btn">‹</button>`);
            }

            for (let i = 1; i <= totalPages; i++) {
                const button = `<button class="comic-button pagination-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
                paginationContainer.append(button);
            }

            if (currentPage < totalPages) {
                paginationContainer.append(`<button class="comic-button pagination-btn next-btn">›</button>`);
            }

            // Agregar eventos a los botones de paginación
            $(`${paginationContainerId} .pagination-btn`).click(function () {
                if ($(this).hasClass('prev-btn')) {
                    renderPage(currentPage - 1);
                    renderPagination(currentPage - 1);
                } else if ($(this).hasClass('next-btn')) {
                    renderPage(currentPage + 1);
                    renderPagination(currentPage + 1);
                } else {
                    const page = parseInt($(this).text());
                    renderPage(page);
                    renderPagination(page);
                }
            });
        }

        renderPage(1); // Renderizar la primera página por defecto
        renderPagination(1); // Renderizar la paginación
    }

    // Llamada al Loop ComicAPIFetch para obtener el detalle del cómic
    async function loadComicDetail(comicId, universe) {
        const comic = (universe === 'marvel')
            ? marvelComics.find(c => c.id === comicId)
            : dcComics.find(c => c.id === comicId);
    
        if (!comic) {
            $('#comic-detail-content').html('<p class="text-center text-danger">No se encontró el cómic.</p>');
            return;
        }
    
        $('#back-to-list').attr('data-universe', universe);
    
        const bgClass = (universe === 'marvel') ? 'marvel-bg' : 'dc-bg';
    
        let volumeButtons = '';
        comic.volumes.forEach(volume => {
            volumeButtons += `<button class="comic-button ${universe === 'marvel' ? 'marvel-button' : 'dc-button'} read-volume-btn" data-id="${comicId}" data-universe="${universe}" data-volume="${volume.name}">${volume.name}</button>`;
        });
    
        const detailHtml = `
            <div class="comic-panel ${bgClass}">
                <h2 class="text-center mb-4" style="color: white;">${comic.title || 'Unknown'}</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="placeholder-img" style="border: 1px solid #ccc; border-radius: 10px; overflow: hidden;">
                            <img src="${comic.cover}" alt="${comic.title}" style="width: 100%; height: auto; border-radius: 10px;">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="comic-detail-info">
                            <h5>Sinopsis:</h5>
                            <div class="comic-detail-synopsis">
                                ${comic.synopsis || '<span style="color: yellow;">No data available.</span>'}
                            </div>
                            <hr>
                            <div>
                                <strong>Autores:</strong> ${comic.authors || 'Unknown'}<br>
                                <strong>Personajes principales:</strong> ${comic.characters || 'Unknown'}<br>
                                <strong>Año de publicación:</strong> ${comic.publicationDate || 'Unknown'}<br>
                                <strong>Género:</strong> ${comic.genre || 'Unknown'}
                            </div>
                        </div>
                        <h5 style="color: white;">Volúmenes disponibles:</h5>
                        <div id="comic-volumes" class="d-flex flex-wrap">
                            ${volumeButtons}
                        </div>
                    </div>
                </div>
            </div>`;
    
        $('#comic-detail-content').html(detailHtml);
        showSection('#comic-detail');
    
        $('.read-volume-btn').click(function () {
            const volumeName = $(this).data('volume');
            loadComicPages(comicId, universe, volumeName);
        });

        const isFavorite = getFavorites().some(fav => fav.id === comicId && fav.universe === universe);
        const favoriteButton = `
            <button class="comic-button ${isFavorite ? 'remove-favorite-btn' : 'add-favorite-btn'}" data-id="${comicId}" data-universe="${universe}">
                <i class="fas fa-${isFavorite ? 'trash' : 'heart'}"></i> ${isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>`;

        $('#comic-detail-content').append(favoriteButton);

        // Evento para agregar o quitar de favoritos
        $('.add-favorite-btn').click(function () {
            addFavorite(comicId, universe);
            loadComicDetail(comicId, universe); // Recargar detalles para actualizar el botón
        });

        $('.remove-favorite-btn').click(function () {
            removeFavorite(comicId, universe);
            loadComicDetail(comicId, universe); // Recargar detalles para actualizar el botón
        });
    }

    // Función para guardar el historial de lectura
    function saveToHistory(comicId, universe, volumeName) {
        const historyList = JSON.parse(localStorage.getItem('readingHistory')) || [];
        const timestamp = new Date().toISOString();

        // Evitar duplicados en el historial
        if (!historyList.some(entry => entry.comicId === comicId && entry.volumeName === volumeName)) {
            historyList.push({ comicId, universe, volumeName, timestamp });
            localStorage.setItem('readingHistory', JSON.stringify(historyList));
        }
    }

    // Función para guardar el progreso de lectura
    function saveReadingProgress(comicId, universe, volumeName, currentPage) {
        const progressList = JSON.parse(localStorage.getItem('readingProgressList')) || [];
        const existingProgressIndex = progressList.findIndex(p => p.comicId === comicId && p.volumeName === volumeName);

        if (existingProgressIndex !== -1) {
            progressList[existingProgressIndex].currentPage = currentPage;
        } else {
            progressList.push({ comicId, universe, volumeName, currentPage });
        }

        localStorage.setItem('readingProgressList', JSON.stringify(progressList));
        updateContinueReadingOption(); // Actualizar la sección automáticamente
    }

    // Función para obtener el progreso de lectura
    function getReadingProgress() {
        const progress = localStorage.getItem('readingProgress');
        return progress ? JSON.parse(progress) : null; // Retornar el progreso o null si no existe
    }

    // Función para eliminar el progreso de lectura
    function removeReadingProgress(comicId, volumeName) {
        let progressList = JSON.parse(localStorage.getItem('readingProgressList')) || [];
        progressList = progressList.filter(p => !(p.comicId === comicId && p.volumeName === volumeName));
        localStorage.setItem('readingProgressList', JSON.stringify(progressList));
        updateContinueReadingOption(); // Actualizar la sección automáticamente
    }

    // Guardar en el historial al completar un cómic
    function completeComic(comicId, universe, volumeName) {
        saveToHistory(comicId, universe, volumeName);
        removeReadingProgress(comicId, volumeName); // Eliminar de "Continúa tu aventura"
        $('#continue-reading-scroll .scroll-item').filter(function () {
            return $(this).find('.continue-reading-btn').data('id') === comicId;
        }).remove(); // Remover el elemento de la interfaz
        updateContinueReadingOption(); // Actualizar la sección automáticamente
    }

    // Función para actualizar la opción de "Continuar Leyendo"
    function updateContinueReadingOption() {
        const progressList = JSON.parse(localStorage.getItem('readingProgressList')) || [];
        const itemsPerPage = 4; // Número de elementos por página
        const totalPages = Math.ceil(progressList.length / itemsPerPage);

        function renderPage(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const filteredProgressList = progressList.slice(startIndex, endIndex);

            const comics = [...marvelComics, ...dcComics];
            const scrollItems = filteredProgressList.map(progress => {
                const comic = comics.find(c => c.id === progress.comicId);
                const volume = comic?.volumes.find(v => v.name === progress.volumeName);
                return comic && volume
                    ? `<div class="scroll-item">
                           <img src="${comic.cover}" alt="${comic.title}" class="comic-cover">
                           <h4>${comic.title}</h4>
                           <p>Volumen: ${progress.volumeName}</p>
                           <p>Página: ${progress.currentPage} de ${volume.pages}</p>
                           <div class="button-container">
                               <button class="comic-button continue-reading-btn" data-id="${comic.id}" data-universe="${progress.universe}" data-volume="${progress.volumeName}">
                                   Continuar
                               </button>
                               <button class="comic-button remove-progress-btn" data-id="${comic.id}" data-volume="${progress.volumeName}">
                                   Eliminar
                               </button>
                           </div>
                       </div>`
                    : '';
            }).join('');

            $('#continue-reading-scroll').html(scrollItems);

            // Agregar eventos a los botones dinámicos
            $('.continue-reading-btn').click(function () {
                const comicId = $(this).data('id');
                const universe = $(this).data('universe');
                const volumeName = $(this).data('volume');
                loadComicPages(comicId, universe, volumeName);
            });

            $('.remove-progress-btn').click(function () {
                const comicId = $(this).data('id');
                const volumeName = $(this).data('volume');
                removeReadingProgress(comicId, volumeName);
            });
        }

        function renderPagination(currentPage) {
            const paginationContainer = $('#continue-reading-pagination');
            paginationContainer.empty();

            if (totalPages <= 1) return;

            if (currentPage > 1) {
                paginationContainer.append(`<button class="pagination-btn" data-page="${currentPage - 1}">Anterior</button>`);
            }

            for (let i = 1; i <= totalPages; i++) {
                paginationContainer.append(`<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`);
            }

            if (currentPage < totalPages) {
                paginationContainer.append(`<button class="pagination-btn" data-page="${currentPage + 1}">Siguiente</button>`);
            }

            $('.pagination-btn').click(function () {
                const page = $(this).data('page');
                renderPage(page);
                renderPagination(page);
            });
        }

        if (progressList.length > 0) {
            renderPage(1);
            renderPagination(1);
            $('#continue-reading-option').show();
        } else {
            $('#continue-reading-scroll').html('<p>No tienes ningún cómic en progreso.</p>');
            $('#continue-reading-pagination').empty();
            $('#continue-reading-option').show();
        }
    }

    // Actualizar la opción de "Continuar Leyendo" al cargar la página
    $(document).ready(function () {
        updateContinueReadingOption();
    });

    // Función para cargar varias páginas del cómic en el modo lectura horizontal
    function loadComicPages(comicId, universe, volumeName, startPage = 1) {
        const comic = (universe === 'marvel')
            ? marvelComics.find(c => c.id === comicId)
            : dcComics.find(c => c.id === comicId);

        let volume = comic?.volumes.find(v => v.name === volumeName);

        // Si no se encuentra el volumen, cargar el primer volumen disponible
        if (!volume && comic?.volumes.length > 0) {
            volume = comic.volumes[0];
            volumeName = volume.name; // Actualizar el nombre del volumen
        }

        if (!volume) {
            console.error('No hay volúmenes disponibles para este cómic.');
            return;
        }

        // Obtener el progreso guardado
        const progressList = JSON.parse(localStorage.getItem('readingProgressList')) || [];
        const savedProgress = progressList.find(p => p.comicId === comicId && p.volumeName === volumeName);
        const currentPage = savedProgress ? savedProgress.currentPage : startPage;

        showSection('#reading-page');
        $('#reading-title').text(`${comic.title} - ${volume.name}`);
        $('#reading-title').data('comic-id', comicId);
        $('#reading-title').data('universe', universe);
        $('#reading-title').data('volume-name', volumeName);

        let pagesHtml = '';
        volume.images.forEach((image, index) => {
            pagesHtml += `
                <div class="comic-page-container">
                    <img src="${image}" alt="Página ${index + 1}" class="comic-page">
                </div>`;
        });
        $('#comic-pages').html(pagesHtml);

        updatePageCounter(currentPage, volume.images.length);

        // Ajustar el scroll a la página guardada
        const container = $('#comic-pages')[0];
        container.scrollLeft = (currentPage - 1) * container.offsetWidth;

        saveReadingProgress(comicId, universe, volumeName, currentPage);

        // Evento para manejar el scroll horizontal y actualizar el progreso
        document.getElementById('comic-pages').addEventListener('scroll', function () {
            const container = this;
            const totalPages = document.querySelectorAll('.comic-page-container').length;
            const currentPage = Math.round(container.scrollLeft / container.offsetWidth) + 1;

            if (currentPage >= 1 && currentPage <= totalPages) {
                updatePageCounter(currentPage, totalPages);
                saveReadingProgress(comicId, universe, volumeName, currentPage);
            }

            // Si se llega al final, eliminar el progreso y actualizar la sección
            if (currentPage === totalPages) {
                completeComic(comicId, universe, volumeName);
            }
        });
    }

    // Función para actualizar el contador de páginas
    function updatePageCounter(currentPage, totalPages) {
        $('#page-counter').text(`Página ${currentPage} de ${totalPages}`);
    }

    // Evento para manejar el scroll horizontal y actualizar el contador de páginas
    $('#comic-pages').on('scroll', function () {
        const container = $(this)[0];
        const totalPages = $('.comic-page-container').length;
        const currentPage = Math.round(container.scrollLeft / container.offsetWidth) + 1;

        if (currentPage >= 1 && currentPage <= totalPages) {
            updatePageCounter(currentPage, totalPages);

            // Actualizar el progreso de lectura
            const comicId = $('#reading-title').data('comic-id');
            const universe = $('#reading-title').data('universe');
            const volumeName = $('#reading-title').data('volume-name');
            saveReadingProgress(comicId, universe, volumeName, currentPage);
        }
    });

    // Evento para manejar el zoom con la rueda del mouse
    $('#comic-pages').on('wheel', function (event) {
        event.preventDefault();
        const delta = event.originalEvent.deltaY;
        const scaleStep = 0.1; // Incremento o decremento del zoom
        const minScale = 1; // Escala mínima (no permitir zoom hacia atrás excesivo)
        const maxScale = 3; // Escala máxima

        $('.comic-page').each(function () {
            let currentScale = parseFloat($(this).data('scale')) || 1;

            // Calcular el nuevo nivel de zoom
            if (delta > 0) {
                currentScale = Math.max(minScale, currentScale - scaleStep);
            } else {
                currentScale = Math.min(maxScale, currentScale + scaleStep);
            }

            // Obtener la posición del puntero del mouse
            const rect = this.getBoundingClientRect();
            const mouseX = event.originalEvent.clientX - rect.left;
            const mouseY = event.originalEvent.clientY - rect.top;

            // Ajustar el origen del zoom al puntero del mouse
            $(this).css({
                transform: `scale(${currentScale})`,
                'transform-origin': `${(mouseX / rect.width) * 100}% ${(mouseY / rect.height) * 100}%`
            });

            $(this).data('scale', currentScale);
        });
    });

    // Función para manejar los botones de desplazamiento horizontal
    $('#scroll-left-btn').click(function () {
        const container = $('#comic-pages')[0];
        const pageWidth = container.offsetWidth;
        container.scrollLeft = Math.max(0, container.scrollLeft - pageWidth);
    });

    $('#scroll-right-btn').click(function () {
        const container = $('#comic-pages')[0];
        const pageWidth = container.offsetWidth;
        container.scrollLeft = Math.min(container.scrollWidth, container.scrollLeft + pageWidth);
    });

    // Función para alternar pantalla completa
    $('#fullscreen-btn').click(function () {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
            elem.requestFullscreen().catch(err => {
                alert(`Error al intentar entrar en pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Función para seleccionar un cómic aleatorio
    function getRandomComic() {
        const allComics = [...marvelComics, ...dcComics];
        const randomIndex = Math.floor(Math.random() * allComics.length);
        return allComics[randomIndex];
    }

    // Función para obtener la clave única del cómic del día basada en la zona horaria y la fecha
    function getComicOfTheDayKey() {
        const timezoneOffset = new Date().getTimezoneOffset(); // Diferencia en minutos con UTC
        const currentDate = new Date(new Date().getTime() - timezoneOffset * 60 * 1000); // Ajustar a UTC
        const dayKey = currentDate.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
        return `comicOfTheDay_${dayKey}`;
    }

    // Función para seleccionar y almacenar el cómic del día
    function selectAndStoreComicOfTheDay() {
        const comicOfTheDay = getRandomComic();
        const comicKey = getComicOfTheDayKey();
        localStorage.setItem(comicKey, JSON.stringify(comicOfTheDay)); // Guardar en localStorage
        return comicOfTheDay;
    }

    // Función para obtener el cómic del día desde localStorage o seleccionarlo si no existe
    function getComicOfTheDay() {
        const comicKey = getComicOfTheDayKey();
        const storedComic = localStorage.getItem(comicKey);
        if (storedComic) {
            return JSON.parse(storedComic); // Retornar el cómic almacenado
        }
        return selectAndStoreComicOfTheDay(); // Seleccionar y almacenar un nuevo cómic
    }

    // Función para actualizar el cómic del día en la interfaz
    function updateComicOfTheDay() {
        const comicOfTheDay = getComicOfTheDay();

        // Actualizar la información del cómic del día
        $('#comic-day-btn').data('comic-id', comicOfTheDay.id);
        $('#comic-day-btn').data('universe', marvelComics.some(c => c.id === comicOfTheDay.id) ? 'marvel' : 'dc');
        $('.comic-speech-bubble h3').text(comicOfTheDay.title || 'Título no disponible');
        $('.comic-speech-bubble p').text(comicOfTheDay.synopsis || 'Sinopsis no disponible.');
        $('.comic-speech-bubble .mt-3').html(`
            <strong>Autores:</strong> ${comicOfTheDay.authors || 'Desconocido'}<br>
            <strong>Fecha de publicación:</strong> ${comicOfTheDay.publicationDate || 'Desconocida'}<br>
            <strong>Personajes principales:</strong> ${comicOfTheDay.characters || 'Desconocidos'}
        `);

        // Actualizar la portada del cómic del día
        $('.placeholder-img').html(`
            <img src="${comicOfTheDay.cover}" alt="${comicOfTheDay.title}" style="width: 100%; height: auto; border-radius: 10px;">
        `);
    }

    // Evento para redirigir al detalle del cómic del día
    $('#comic-day-btn').click(function () {
        const comicOfTheDay = getComicOfTheDay(); // Obtener el cómic del día
        if (comicOfTheDay) {
            const universe = marvelComics.some(c => c.id === comicOfTheDay.id) ? 'marvel' : 'dc';
            loadComicDetail(comicOfTheDay.id, universe); // Cargar detalles del cómic
        }
    });

    // Actualizar el cómic del día al cargar la página
    $(document).ready(function () {
        updateComicOfTheDay();
    });

    // Cómic del día
    $('#comic-day-btn').click(function () {
        loadComicDetail(1, 'marvel');
    });

    // Volver al menú principal desde Marvel
    $('#back-to-home-from-marvel').click(function () {
        showSection('#home-section');
    });

    // Volver al menú principal desde DC
    $('#back-to-home-from-dc').click(function () {
        showSection('#home-section');
    });

    // Función para inicializar la aplicación
    function initializeApp() {
        // Mostrar la sección inicial
        showSection('#home-section');

        // Cargar los cómics de Marvel y DC en sus respectivas secciones
        loadMarvelComics();
        loadDCComics();

        // Actualizar la opción de "Continuar Leyendo"
        updateContinueReadingOption();

        // Actualizar el cómic del día
        updateComicOfTheDay();
    }

    // Asegurarse de que todo esté listo al cargar la página
    $(document).ready(function () {
        initializeApp();
    });

    // Función para guardar los favoritos en localStorage
    function saveFavorites(favorites) {
        localStorage.setItem('favoriteComics', JSON.stringify(favorites));
    }

    // Función para obtener los favoritos desde localStorage
    function getFavorites() {
        return JSON.parse(localStorage.getItem('favoriteComics')) || [];
    }

    // Función para agregar un cómic a favoritos
    function addFavorite(comicId, universe) {
        const comics = universe === 'marvel' ? marvelComics : dcComics;
        const comic = comics.find(c => c.id === comicId);
        if (!comic) return;

        const favorites = getFavorites();
        if (!favorites.some(fav => fav.id === comicId && fav.universe === universe)) {
            favorites.push({ id: comicId, universe, title: comic.title, cover: comic.cover });
            saveFavorites(favorites);
            updateFavoritesSection();
        }
    }

    // Función para quitar un cómic de favoritos
    function removeFavorite(comicId, universe) {
        let favorites = getFavorites();
        favorites = favorites.filter(fav => !(fav.id === comicId && fav.universe === universe));
        saveFavorites(favorites);
        updateFavoritesSection();
    }

    // Actualizar la sección de favoritos al cargar la página
    $(document).ready(function () {
        updateFavoritesSection();
    });

    // Función para generar los cómics destacados en un carrusel interactivo
    function generateFeaturedComics() {
        const featuredComics = [
            ...marvelComics.slice(0, 3), // Seleccionar 3 cómics de Marvel
            ...dcComics.slice(0, 3) // Seleccionar 3 cómics de DC
        ];

        const carouselInner = $('#featured-carousel-inner');
        carouselInner.empty();

        featuredComics.forEach((comic, index) => {
            const isActive = index === 0 ? 'active' : '';
            const universeClass = marvelComics.some(c => c.id === comic.id) ? 'marvel-bg' : 'dc-bg';

            const carouselItem = `
                <div class="carousel-item ${isActive}">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img src="${comic.cover}" class="d-block w-100 rounded" alt="${comic.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="comic-panel ${universeClass}">
                                <h3>${comic.title}</h3>
                                <p>${comic.synopsis || 'Sinopsis no disponible.'}</p>
                                <button class="comic-button read-now-btn mt-3" data-id="${comic.id}" data-universe="${marvelComics.some(c => c.id === comic.id) ? 'marvel' : 'dc'}">
                                    <i class="fas fa-book-open me-2"></i> Leer Ahora
                                </button>
                                <button class="comic-button details-btn mt-3" data-id="${comic.id}" data-universe="${marvelComics.some(c => c.id === comic.id) ? 'marvel' : 'dc'}">
                                    <i class="fas fa-info-circle me-2"></i> Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
            carouselInner.append(carouselItem);
        });

        // Modificar el evento del botón "Leer Ahora" para redirigir al modo lectura
        $('#featured-carousel').on('click', '.read-now-btn', function () {
            const comicId = $(this).data('id');
            const universe = $(this).data('universe');
            const comic = (universe === 'marvel')
                ? marvelComics.find(c => c.id === comicId)
                : dcComics.find(c => c.id === comicId);

            if (comic && comic.volumes.length > 0) {
                const firstVolume = comic.volumes[0].name; // Seleccionar el primer volumen
                loadComicPages(comicId, universe, firstVolume); // Cargar directamente el modo lectura
            }
        });

        $('#featured-carousel').on('click', '.details-btn', function () {
            const comicId = $(this).data('id');
            const universe = $(this).data('universe');
            loadComicDetail(comicId, universe); // Mostrar detalles del cómic
        });
    }

    // Llamar a la función para generar los destacados al cargar la página
    $(document).ready(function () {
        generateFeaturedComics();
    });

    // Función para manejar los botones "Leer Ahora" en todas las secciones
    function initializeReadNowButtons() {
        // Botones en el carrusel de destacados
        $('#featured-carousel').on('click', '.read-now-btn', function () {
            const comicId = $(this).data('id');
            const universe = $(this).data('universe');
            loadComicPages(comicId, universe); // Cargar directamente el modo lectura
        });

        // Botones en la sección de Marvel
        $('#marvel-comics-grid').on('click', '.read-now-btn', function () {
            const comicId = $(this).data('id');
            loadComicDetail(comicId, 'marvel'); // Cargar detalles del cómic de Marvel
        });

        // Botones en la sección de DC
        $('#dc-comics-grid').on('click', '.read-now-btn', function () {
            const comicId = $(this).data('id');
            loadComicDetail(comicId, 'dc'); // Cargar detalles del cómic de DC
        });

        // Botones en la sección de favoritos
        $('#favorites-grid').on('click', '.read-now-btn', function () {
            const comicId = $(this).data('id');
            const universe = $(this).data('universe');
            loadComicDetail(comicId, universe); // Cargar detalles del cómic favorito
        });
    }

    // Inicializar los botones al cargar la página
    $(document).ready(function () {
        initializeReadNowButtons();
    });

    let hasShownRatingModal = false; // Evitar mostrar el modal varias veces

    // Mostrar el modal de calificación al finalizar la lectura
    function showRatingModal() {
        if (!hasShownRatingModal) {
            hasShownRatingModal = true; // Asegurar que solo se muestre una vez
            $('#rating-modal').modal('show');
        }
    }

    // Evento para manejar la selección de estrellas
    $('#rating-modal .rating label').hover(function () {
        const index = $(this).index(); // Obtener el índice de la estrella
        $('#rating-modal .rating i').removeClass('selected'); // Limpiar selección previa
        $('#rating-modal .rating label:lt(' + (index + 1) + ') i').addClass('selected'); // Sombrear hasta la estrella seleccionada
    });

    $('#rating-modal .rating label').click(function () {
        const rating = $(this).find('input').val();
        $('#rating-modal').data('selected-rating', rating); // Guardar calificación seleccionada
    });

    // Evento para enviar la calificación
    $('#submit-rating-btn').click(function () {
        const rating = $('#rating-modal').data('selected-rating');
        $('#rating-modal').modal('hide');
        if (rating) {
            let feedbackMessage = '';
            switch (parseInt(rating)) {
                case 1:
                case 2:
                    feedbackMessage = 'Lamentamos que no hayas disfrutado mucho de este cómic. ¡Gracias por tu opinión!';
                    break;
                case 3:
                    feedbackMessage = '¡Gracias por tu calificación! Seguiremos mejorando para ofrecerte mejores historias.';
                    break;
                case 4:
                case 5:
                    feedbackMessage = '¡Nos alegra que te haya encantado este cómic! Gracias por tu calificación.';
                    break;
            }
            $('#feedback-modal .modal-body').html(`<p>${feedbackMessage}</p>`);
            $('#feedback-modal').modal('show'); // Mostrar mensaje de agradecimiento
        }
    });

    // Evento para cerrar el modal sin calificar
    $('#skip-rating-btn').click(function () {
        $('#rating-modal').modal('hide'); // Cerrar el modal sin mostrar retroalimentación
    });

    // Mostrar el modal de calificación al llegar a la última página
    $('#comic-pages').on('scroll', function () {
        const container = $(this)[0];
        const totalPages = $('.comic-page-container').length;
        const currentPage = Math.round(container.scrollLeft / container.offsetWidth) + 1;

        if (currentPage === totalPages) {
            showRatingModal(); // Mostrar el modal de calificación
        }
    });

    // Función para guardar el progreso de lectura en el historial
    function saveToReadingHistory(comicId, currentPage, totalPages) {
        const comics = [...marvelComics, ...dcComics];
        const comic = comics.find(c => c.id === comicId);
        if (!comic) return; // Validar que el cómic exista

        const history = JSON.parse(localStorage.getItem('readingHistory')) || [];
        const timestamp = new Date().toISOString();
        const progress = Math.round((currentPage / totalPages) * 100);

        // Buscar si ya existe el cómic en el historial
        const existingEntryIndex = history.findIndex(entry => entry.comicId === comicId);

        if (existingEntryIndex !== -1) {
            // Actualizar la entrada existente
            history[existingEntryIndex] = { ...history[existingEntryIndex], currentPage, totalPages, progress, timestamp };
        } else {
            // Agregar una nueva entrada
            history.push({
                comicId,
                title: comic.title,
                cover: comic.cover,
                universe: marvelComics.includes(comic) ? 'Marvel' : 'DC',
                currentPage,
                totalPages,
                progress,
                timestamp
            });
        }

        // Guardar el historial actualizado en localStorage
        localStorage.setItem('readingHistory', JSON.stringify(history));
    }

    // Función para registrar una sesión de lectura
    function registerReadingSession(comicId, universe, volumeName, totalPages, pagesRead, startTime, endTime) {
        const history = JSON.parse(localStorage.getItem('readingHistory')) || [];
        const duration = Math.round((new Date(endTime) - new Date(startTime)) / 1000); // Duración en segundos
        const speed = pagesRead > 0 ? Math.round((pagesRead / duration) * 60) : 0; // Páginas por minuto

        history.push({
            comicId,
            universe,
            volumeName,
            totalPages,
            pagesRead,
            startTime,
            endTime,
            duration,
            speed
        });

        localStorage.setItem('readingHistory', JSON.stringify(history));
    }

    // Función para calcular estadísticas generales
    function calculateStats() {
        const history = JSON.parse(localStorage.getItem('readingHistory')) || [];
        const totalComicsRead = history.length;
        const totalVolumesRead = new Set(history.map(entry => `${entry.comicId}-${entry.volumeName}`)).size;
        const totalReadingTime = history.reduce((sum, entry) => sum + (entry.duration || 0), 0);
        const activeDays = new Set(history.map(entry => new Date(entry.startTime).toDateString())).size;
        const completedComics = history.filter(entry => entry.progress === 100).length; // Cómics completados
        const lastComic = history.length > 0 ? history[history.length - 1].title : null;
        const mostReadComic = history.reduce((acc, entry) => {
            acc[entry.title] = (acc[entry.title] || 0) + 1;
            return acc;
        }, {});
        const mostReadComicTitle = Object.keys(mostReadComic).reduce((a, b) => mostReadComic[a] > mostReadComic[b] ? a : b, null);
        const favorites = JSON.parse(localStorage.getItem('favoriteComics')) || [];
        const streak = calculateReadingStreak(history);

        return {
            totalComicsRead,
            totalVolumesRead,
            totalReadingTime: formatDuration(totalReadingTime),
            activeDays,
            completedComics,
            lastComic,
            mostReadComic: mostReadComicTitle,
            favoritesCount: favorites.length,
            streak
        };
    }

    // Función para calcular la racha de lectura
    function calculateReadingStreak(history) {
        const today = new Date().toDateString();
        return history.reduce((streak, entry) => {
            const entryDate = new Date(entry.startTime).toDateString();
            if (entryDate === today || streak.lastDate === entryDate) {
                streak.count++;
                streak.lastDate = entryDate;
            } else {
                streak.count = 0;
            }
            return streak;
        }, { count: 0, lastDate: today }).count;
    }

    // Función para actualizar la sección de estadísticas
    function updateStatsSection() {
        const stats = calculateStats();
        $('#total-comics-read').text(stats.totalComicsRead);
        $('#unique-volumes-read').text(stats.totalVolumesRead);
        $('#total-reading-time').text(stats.totalReadingTime);
        $('#active-days').text(stats.activeDays);
        $('#completed-comics').text(stats.completedComics); // Actualizar cómics completados
        $('#current-streak').text(stats.streak > 3 ? `${stats.streak} días 🔥` : `${stats.streak} días`);
        $('#favorites-count').text(stats.favoritesCount);
        $('#last-comic').text(stats.lastComic || 'N/A');
        $('#most-read-comic').text(stats.mostReadComic || 'N/A');

        // Actualizar tabla de historial
        const historyTableBody = $('#reading-history-table tbody');
        historyTableBody.empty();
        const history = JSON.parse(localStorage.getItem('readingHistory')) || [];
        history.forEach(entry => {
            const rowHtml = `
                <tr>
                    <td>${entry.title || 'N/A'}</td>
                    <td>${entry.volumeName || 'N/A'}</td>
                    <td><img src="${entry.editorialLogo}" alt="${entry.editorial}" style="width: 20px;"> ${entry.editorial || 'N/A'}</td>
                    <td>${formatDate(entry.startTime)}</td>
                    <td>${formatTime(entry.startTime)}</td>
                    <td>${formatTime(entry.endTime)}</td>
                    <td>${formatDuration(entry.duration)}</td>
                </tr>`;
            historyTableBody.append(rowHtml);
        });
    }

    // Función para formatear fechas
    function formatDate(dateString) {
        const date = new Date(dateString);
        return isNaN(date) ? 'N/A' : date.toLocaleDateString('es-ES');
    }

    // Función para formatear horas
    function formatTime(dateString) {
        const date = new Date(dateString);
        return isNaN(date) ? 'N/A' : date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    }

    // Función para formatear duración
    function formatDuration(seconds) {
        if (isNaN(seconds)) return '00:00:00';
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Eventos para manejar la sección de estadísticas
    $('#stats-btn').click(function () {
        showSection('#stats-section');
        updateStatsSection();
    });

    // Handle the reset stats button click
    $('#reset-stats-btn').click(function () {
        $('#confirm-reset-modal').modal('show'); // Show the custom confirmation modal
    });

    // Handle the confirmation button in the modal
    $('#confirm-reset-btn').click(function () {
        localStorage.removeItem('readingHistory'); // Clear the statistics
        $('#confirm-reset-modal').modal('hide'); // Hide the modal
        updateStatsSection(); // Update the stats section
    });

    $('#detailed-stats-btn').click(function () {
        generateDetailedStats();
        $('#detailed-stats-modal').modal('show');
    });

    // Handle the "Volver al Menú Principal" button in the statistics section
    $('#back-to-home-from-stats').click(function () {
        showSection('#home-section'); // Navigate back to the home section
    });

    // Función para generar gráficos detallados
    function generateDetailedStats() {
        const history = JSON.parse(localStorage.getItem('readingHistory')) || [];

        // Gráfico de barras: Lecturas por día
        const dailyCounts = history.reduce((counts, entry) => {
            const date = new Date(entry.startTime).toISOString().split('T')[0];
            counts[date] = (counts[date] || 0) + 1;
            return counts;
        }, {});
        const labels = Object.keys(dailyCounts).slice(-7);
        const data = labels.map(date => dailyCounts[date]);
        const ctx1 = document.getElementById('comics-per-day-chart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels,
                datasets: [{ label: 'Cómics Leídos', data, backgroundColor: '#FF3131' }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });

        // Gráfico circular: Tiempo total por editorial
        const editorialTimes = history.reduce((counts, entry) => {
            counts[entry.editorial] = (counts[entry.editorial] || 0) + (entry.duration || 0);
            return counts;
        }, {});
        const ctx2 = document.getElementById('time-per-editorial-chart').getContext('2d');
        new Chart(ctx2, {
            type: 'pie',
            data: {
                labels: Object.keys(editorialTimes),
                datasets: [{ data: Object.values(editorialTimes), backgroundColor: ['#FF3131', '#0476F2', '#CCCCCC'] }]
            },
            options: { responsive: true }
        });

        // Otros gráficos...
    }

    // Global variables for tracking active reading session
    let activeReadingSession = false;
    let readingStartTime = null;

    // Function to update statistics in real-time
    function updateRealTimeStats() {
        const stats = calculateStats();

        // Update DOM elements with the latest statistics
        $('#total-comics-read').text(stats.totalComicsRead);
        $('#unique-volumes-read').text(stats.totalVolumesRead);
        $('#total-reading-time').text(stats.totalReadingTime);
        $('#active-days').text(stats.activeDays);
        $('#current-streak').text(stats.streak > 3 ? `${stats.streak} días 🔥` : `${stats.streak} días`);
        $('#favorites-count').text(stats.favoritesCount);
        $('#last-comic').text(stats.lastComic || 'N/A');
        $('#most-read-comic').text(stats.mostReadComic || 'N/A');
    }

    // Function to start tracking reading time
    function startReadingSession() {
        if (!activeReadingSession) {
            activeReadingSession = true;
            readingStartTime = Date.now();
        }
    }

    // Function to stop tracking reading time and update total time
    function stopReadingSession() {
        if (activeReadingSession) {
            const elapsedTime = Math.floor((Date.now() - readingStartTime) / 1000); // Time in seconds
            const history = JSON.parse(localStorage.getItem('readingHistory')) || [];
            history.forEach(entry => {
                entry.duration = (entry.duration || 0) + elapsedTime;
            });
            localStorage.setItem('readingHistory', JSON.stringify(history));
            activeReadingSession = false;
            readingStartTime = null;
        }
    }

    // Function to observe changes in localStorage
    function observeLocalStorage() {
        window.addEventListener('storage', () => {
            updateRealTimeStats();
        });
    }

    // Function to initialize real-time updates
    function initializeRealTimeUpdates() {
        // Update statistics every second
        setInterval(() => {
            if (activeReadingSession) {
                const elapsedTime = Math.floor((Date.now() - readingStartTime) / 1000);
                const stats = calculateStats();
                stats.totalReadingTime = formatDuration(stats.totalReadingTimeInSeconds + elapsedTime);
                $('#total-reading-time').text(stats.totalReadingTime);
            }
        }, 1000);

        // Observe localStorage changes
        observeLocalStorage();

        // Update statistics on page load
        updateRealTimeStats();
    }

    // Event listeners for reading actions
    $('#comic-pages').on('scroll', function () {
        startReadingSession();
    });

    $('#back-to-home-from-stats, #back-to-home-from-marvel, #back-to-home-from-dc, #reading-home').click(function () {
        stopReadingSession();
    });

    // Initialize real-time updates on page load
    $(document).ready(function () {
        initializeRealTimeUpdates();
    });
});