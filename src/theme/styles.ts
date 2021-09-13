import { normalizeFont, normalizeHeight, normalizeWidth } from "../utils/fontUtil"
export const fontFamily = {
    "Primary": {
        "Medium": "Poppins-Medium",
        "Regular": "Poppins-Regular",
        "Light": "Poppins-Light",
        "SemiBold": "Poppins-SemiBold",
        "Bold": "Poppins-Bold",
    }
}
export const primaryColor = "#1E3F66";
export const secondaryColor = "#5697AF"
export const secondaryColorWithOptacity = '#EEF4F7'
export const inActiveColor = "#707070";
export const greyedSchemeColor = "#00000050";
export const uploadFileColor = "#EFEFEF";
export const errorColor = "red";
export const NonDotFormColor = "#E5E5E5";



export const fontH1 = normalizeFont(24);
export const fontH2 = normalizeFont(18);
export const fontH2V2 = normalizeFont(15);
export const fontH2V2V1 = normalizeFont(14)
export const fontH2V3 = normalizeFont(13)
export const fontH3 = normalizeFont(12);
export const fontH3V3 = normalizeFont(10);
export const fontH4 = normalizeFont(8);
export const fontSmallSize = normalizeFont(6);


export const mainContainer = {
    flex: 1,
    display: "flex"
}
