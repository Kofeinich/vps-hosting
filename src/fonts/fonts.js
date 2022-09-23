import {Global} from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
            @font - face {
            font-family: "Regular Proxima Nova ";
            src: url('../../public/assets/proxima/proximanova_regular.ttf') format('ttf');
            font-weight: 400;
            font-style: normal;
        }
            @font-face {
            font-family: "Black Proxima Nova";
            src: url('../../public/assets/proxima/proximanova_black.ttf') format('ttf');
            font-weight: 400;
            font-style: normal;
        }
            @font-face {
            font-family: "Bold Proxima Nova";
            src: url('../../public/assets/proxima/proximanova_bold.otf') format('otf');
            font-weight: 700;
            font-style: normal;
        }
            @font-face {
            font-family: "Heading Proxima Nova";
            src: url('../../public/assets/proxima/proximanova_extrabold.otf') format('otf');
            font-weight: 800;
            font-style: normal;
        }
            @font-face {
            font-family: "Light Proxima Nova";
            src: url('../../public/assets/proxima/proximanova_light.otf') format('otf');
            font-weight: 400;
            font-style: normal;
        }
            @font-face {
            font-family: "BoldIt Proxima Nova";
            src: url('../../public/assets/proxima/proximanova_boldit.otf') format('otf');
            font-weight: 800;
            font-style: normal;
        }
        `}
    />
)

export default Fonts