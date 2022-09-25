export const MenuIcon = (color) => {
    return (
        <svg
            width={20}
            height={12}
            fill='#fff'
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width={20} height={2} rx={1}
            />
            <rect width={20} height={2} rx={1}
                  style={{
                      transform: 'translate(0px, 5px)',
                  }}
            />
            <rect width={20} height={2} rx={1}
                  style={{
                      transform: 'translate(0px, 10px)',
                  }}
            />
        </svg>
    )
}