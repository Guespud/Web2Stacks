export function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export function csrfHeaders(token) {
    return {
        'X-CSRF-TOKEN': token,
    };
}

export function formatCurrency(value) {
    return `$${Number(value || 0).toLocaleString('es-CO')}`;
}

export function formatBadge(mode) {
    return mode === 'En Vivo' ? 'En vivo' : mode;
}
