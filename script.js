let aimbotActivo = false;

const toggleBtn = document.getElementById('toggleAimbotBtn');
const statusText = document.getElementById('status');

toggleBtn.addEventListener('click', () => {
    aimbotActivo = !aimbotActivo;  // Alterna el estado

    if (aimbotActivo) {
        statusText.textContent = 'Aimbot Activado';
        toggleBtn.textContent = 'Desactivar Aimbot';
    } else {
        statusText.textContent = 'Aimbot Desactivado';
        toggleBtn.textContent = 'Activar Aimbot';
    }
});

