function VariantCard({ title, children, variant = "primary" }) {
    const styles = {
        primary: { border: '2px solid blue', borderRadius: '8px', padding: '16px' },
        secondary: { border: '2px solid gray', borderRadius: '8px', padding: '16px' },
        outlined: { border: '2px dashed black', borderRadius: '8px', padding: '16px' }
    };

    return (
        <div style={styles[variant]}>
            {title && <h3>{title}</h3>}
            <div>{children}</div>
        </div>
    );
}

export default VariantCard;