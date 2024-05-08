import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="nuclear.jpg"
          alt="openai"
          width={"30px"}
          height={"30px"}
          className="image-inverted"
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontFamily:"Open Sans",
          fontWeight: "600",
          textShadow: "2px 2px 25px #fff",
        }}
      >
        <span style={{ fontSize: "20px" }}>CHAT-BOT</span>
      </Typography>
    </div>
  );
};

export default Logo;
