export const breakPoints: [number] = [
    0, 576, 768, 992, 1200,
]

export const breakPointsName = [
    'xs', 'sm', 'md', 'lg', 'xl',
]

export const containerWidths: [number] = [
    540, 720, 960, 1140,
]

export const colors = {
    white: '#fff',
    black: '#000',
    red: '#d9534f',
    orange: '#f0ad4e',
    yellow: '#ffd500',
    green: '#5cb85c',
    blue: '#0275d8',
    teal: '#5bc0de',
    pink: '#ff5b77',
    purple: '#613d7c',
}

export const grayscales = {
    dark: '#292b2c',
    gray: '#464a4c',
    light: '#636c72',
    lighter: '#eceeef',
    lightest: '#f7f7f9',
}

export const brands = {
    primary: colors.blue,
    success: colors.green,
    info: colors.teal,
    warning: colors.orange,
    danger: colors.red,
    inverse: grayscales.dark,
}

export const bodies = {
    bg: colors.white,
    color: grayscales.dark,
    inverseBg: grayscales.dark,
    inverseColor: grayscales.lighter,
}

export const fontFamilies = {
    sansSerif: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", Times, serif',
    monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    base: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

export const fontSizes = {
    base: '1rem',
    lg: '1.25rem',
    sm: '.875rem',
    xs: '.75rem',
}

export const grid = {
    colCounts: 12,
    colPadding: 10,
}

export const link = {
    color: brands.primary,
    hoverColor: '#23527c',
}

export const lineHeight = {
    base: 1.5,
    sm: 1.5,
    lg: 1.3,
}

export const radius = {
    base: '0.25rem',
    sm: '0.2rem',
    lg: '0.3rem',
}

export const margins = {
    xs: 5,
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
}
