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
export const screenMainContainer = {
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    padding: normalizeWidth(15),
    backgroundColor: "white",
    height: "100%"
}

export const noRecordMessage = {
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
    fontSize: fontH3,
}

export const entryContainer = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
}
export const entryBoxContainer = {
    borderRadius: normalizeWidth(10),
    backgroundColor: "#9A4B9F20",
    marginBottom: normalizeWidth(12),
    flex: 1,
    height: normalizeWidth(60)
}
export const entryDetailBox = {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3,
    height: normalizeWidth(60),
}

export const entryNameImageContainer = {
    width: "80%",
    height: "100%",
    flexDirection: 'row',
    alignItems: "center"
}

export const entryImageContainer = {
    height: "100%",
    width: "25%",
}

export const entryTextAlignment = {
    marginLeft: normalizeWidth(20)
}

export const entryImage = {
    width: "85%",
    height: "85%",
}
export const entryName = {
    fontSize: fontH3,
    color: "#000000",
    fontFamily: "Poppins-medium"
}

export const statusText = {
    ...fontFamily.Primary.Medium,
    fontSize: fontH2V2,
    fontWeight: "500",
    color: "#000000"
}

export const entryRightIcon = {
    marginRight: normalizeWidth(15)
}
export const iconContainer = {
    marginRight: normalizeWidth(15)
}
export const entryOperation = {
    height: normalizeHeight(50),
    width: normalizeHeight(50),
    alignItems: "flex-end",
    justifyContent: "center",
    alignItems: "center"
}

export const imageContainer = {
    marginTop: normalizeWidth(20),
    marginBottom: normalizeWidth(20),
    alignSelf: "center",
    height: normalizeWidth(150),
    width: normalizeWidth(250)
}

export const smallLogoContainer = {
    marginBottom: normalizeWidth(20),
    alignSelf: "center",
    height: normalizeHeight(100),
    width: normalizeWidth(200)
}

export const profileImageContainer = {
    width: normalizeWidth(100),
    height: normalizeWidth(100),
    borderRadius: normalizeWidth(150 / 2),
    borderColor: 'black',
    overflow: "hidden",
    backgroundColor: greyedSchemeColor
}

export const messageBoxImageContainer = {
    width: normalizeWidth(25),
    height: normalizeWidth(25),
    borderRadius: normalizeWidth(150 / 2),
    overflow: "hidden",
    backgroundColor: greyedSchemeColor
}

export const profileImageDimension = {
    width: "100%",
    height: "100%"
}
export const profileContentText = {
    fontFamily: "Poppins-Medium",
    color: '#9A4B9F',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 2,
    fontSize: fontH2V2,
    fontWeight: "600"
}

export const lineStyles = {
    marginHorizontal: normalizeWidth(10),
    borderBottomColor: 'black',
    borderBottomWidth: normalizeWidth(1),
    marginBottom: normalizeWidth(10),
    opacity: 0.2
}
export const screenMainHeading = {
    color: "#000000",
    fontSize: fontH2,
    fontFamily: "Poppins-Medium",
    marginBottom: 20,
    fontWeight: "500"
}

export const entryContextText = {
    fontFamily: "Poppins-Regular",
    fontSize: fontH3
}
export const headingText = {
    fontFamily: "Poppins-Regular",
    fontSize: fontH3,
    fontWeight: "500"
}

export const entryContent = {
    marginBottom: normalizeWidth(5),
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: normalizeWidth(5)
}