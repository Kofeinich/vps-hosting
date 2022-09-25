export const Turbo = (props) => {
    return (
        <svg
            width={25}
            height={25}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 12.5C25 19.404 19.404 25 12.5 25S0 19.404 0 12.5 5.596 0 12.5 0 25 5.596 25 12.5Z"
                style={{fill: "#32C190",}}
            />
            <path
                d="M10 0H3.487L0 8.944h3.545L.548 16 9.625 5.75l-3.832-.055L10 0Z"
                style={{
                    fill: "#fff",
                    transform: 'translate(8px, 6px)',
                }}
            />
        </svg>
    )
}