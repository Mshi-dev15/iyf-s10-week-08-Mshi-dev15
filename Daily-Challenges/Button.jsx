function Button({
    text = "Click me",
    onClick,
    variant = "primary",
    disabled = false,
    size = "medium",
    loading = false
}) {
    const sizeStyles = {
        small: { padding: '4px 8px', fontSize: '12px' },
        medium: { padding: '8px 16px', fontSize: '14px' },
        large: { padding: '12px 24px', fontSize: '16px' }
    };

    const variantStyles = {
        primary: { background: 'blue', color: 'white', border: 'none' },
        secondary: { background: 'gray', color: 'white', border: 'none' },
        danger: { background: 'red', color: 'white', border: 'none' }
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            style={{
                ...sizeStyles[size],
                ...variantStyles[variant],
                borderRadius: '4px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.6 : 1
            }}
        >
            {loading ? 'Loading...' : text}
        </button>
    );
}

export default Button;