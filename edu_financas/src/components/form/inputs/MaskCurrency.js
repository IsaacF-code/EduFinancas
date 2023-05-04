export const MaskCurrency = ({ nextState }) => {
    const { value } = nextState || {};

    let valorFormatado = value?.replace?.(/\D/g, '');
    valorFormatado = valorFormatado?.replace?.(/^0+/g, '');

    valorFormatado = valorFormatado?.length < 3 ? valorFormatado?.padStart(3, "0") : valorFormatado;

    if (valorFormatado?.length === 2) {
        return {
            ...nextState,
            value: `R$ ${valorFormatado}`,
            selection: {
                start: valorFormatado.length + 3,
                end: valorFormatado.length + 3
            }
        }
    }

    const valorFormatadoComVirgula = valorFormatado?.replace?.(/(?=\d{2})(\d{2})$/, ',$1');
    const valorFormatadoComPonto = valorFormatadoComVirgula?.replace?.(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    if (valorFormatadoComPonto) {
        return {
            ...nextState,
            value: `R$ ${valorFormatadoComPonto}`,
            selection: {
                start: valorFormatadoComPonto.length + 3,
                end: valorFormatadoComPonto.length + 3
            }
        }
    }

    return nextState;
}