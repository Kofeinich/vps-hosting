export const Monitoring = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={21}
            height={21}
            fill="none"
            {...props}
        >
            <g
                clipPath="url(#a)"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M2.25 20.25h16.5a1.5 1.5 0 0 0 1.5-1.5V2.25a1.5 1.5 0 0 0-1.5-1.5H2.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5ZM4.5 4.5h3M4.5 8.25h6.75" />
                <path d="m17.25 8.25-4.5 7.5-5.25-3-3 4.5" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h21v21H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}