export const Finance = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={14}
            fill="none"
            {...props}
        >
            <rect x={0.5} y={2.5} width={15} height={11} rx={0.5} stroke="#fff" />
            <path
                d="M9.5 8A2.5 2.5 0 0 1 12 5.5h3.5v5H12A2.5 2.5 0 0 1 9.5 8Z"
                stroke="#fff"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM12.508 1.91a1.066 1.066 0 0 0-1.084-.552l-3.98.542a917.967 917.967 0 0 1 5.064.01Zm.626.504h.5A2.066 2.066 0 0 0 11.288.367l-8.378 1.14-.02.005.092.414-.093-.414-.123.028a209.109 209.109 0 0 0-1.218.28c-.305.072-.592.141-.747.184-.038.01-.078.021-.111.033a.522.522 0 0 0-.25.166.501.501 0 0 0 .43.819 8.261 8.261 0 0 1 .924-.07c.389-.013.898-.022 1.486-.03 1.177-.015 2.663-.021 4.123-.022a914.005 914.005 0 0 1 5.242.011l.484.003.003-.5Z"
                fill="#fff"
            />
        </svg>
    )
}