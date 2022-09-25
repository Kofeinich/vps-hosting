export const MenuIcon = (props) => {
    return (
        <svg
            width={20}
            height={12}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={20} height={2} rx={1}
                  style={{
                      fill: "#062436",
                  }}
            />
            <rect width={20} height={2} rx={1}
                  style={{
                      fill: "#062436",
                      transform: 'translate(0px, 5px)',
                  }}
            />
            <rect width={20} height={2} rx={1}
                  style={{
                      fill: "#062436",
                      transform: 'translate(0px, 10px)',
                  }}
            />
        </svg>
    )
}