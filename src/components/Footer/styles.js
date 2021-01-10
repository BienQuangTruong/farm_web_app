import { primaryHoverColor } from "../../common/styles/theme";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    background: primaryHoverColor,
    height: 70,
    alignItems: "center",
  },
  content: {
    color: "#ffffff",
    fontWeight: "800",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    fontFamily: "Nunito",
  },
});
export default styles;
