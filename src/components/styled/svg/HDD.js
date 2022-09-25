export const HDD = (props) => {
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
                style={{fill: "#062436",}}
            />
            <path
                d="M9.684 0H9.13v.554H7.664V0H1.317a1.114 1.114 0 0 0-1.12 1.101V13.9a1.113 1.113 0 0 0 1.12 1.1h2.974v-.462h4.514V15h.878a1.113 1.113 0 0 0 1.12-1.1V1.1A1.114 1.114 0 0 0 9.684 0ZM5.6 9.977a4.339 4.339 0 0 1-4.34-4.334c0-.62.133-1.232.39-1.795l-.184-.105a1.469 1.469 0 0 1-.747-1.074 1.468 1.468 0 0 1 .446-1.23l.024-.025A1.496 1.496 0 0 1 2.242.957a1.452 1.452 0 0 1 1.251.76l.06.1a4.34 4.34 0 0 1 6.38 3.828A4.339 4.339 0 0 1 5.6 9.978Z"
                style={{
                    fill: "#fff",
                    fillOpacity: 0.99607843,
                    strokeLinejoin: "miter",
                    width: 11,
                    height: 15,
                    transform: 'translate(7px, 5px)',
                }}
            />
            <path
                d="M2.039.148A4.366 4.366 0 0 0 .955 1.306l1.686.977c.524.304.704.123.4-.4L2.04.147Z"
                style={{
                    fill: "#fff",
                    transform: 'translate(7px, 6px)',
                }}
            />
            <path
                d="M2.393 1.647a.832.832 0 0 1-.837.835.828.828 0 0 1-.835-.835.836.836 0 1 1 1.672 0Z"
                style={{
                    fill: "#fff",
                    transform: 'translate(11px, 9px)',
                }}
            />
        </svg>
    )
}