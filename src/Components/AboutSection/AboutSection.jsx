import { Box, Typography } from "@mui/material";
import AboutUs from "../../assets/About/AboutUs.webp";
import img from "../../assets/About/image.jpg";
const AboutSection = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        maxWidth: "1500px",
        backgroundColor: "#0C3F40",
        height: { xs: "1000px", sm: "1500px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          overflow: "hidden",
          color: "#fff",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: { xs: "400", sm: "700" },
          py: { xs: 2, sm: 3 },
        }}
      >
        About Kilian Holdings Ltd.
      </Typography>
      <Box
        sx={{
          my: { xs: 2, sm: 3 },
          width: "80%",
          height: { xs: "300px", sm: "500px" },
          backgroundImage: `url(${AboutUs})`,
          backgroundSize: "cover",
        }}
      ></Box>
      <Typography
        sx={{
          overflow: "hidden",
          color: "#fff",
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: { xs: "400", sm: "700" },
          py: { xs: 2, sm: 3 },
        }}
      >
        Our Mission
      </Typography>
      <Typography
        sx={{
          overflow: "hidden",
          color: "#fff",
          width: "80%",
          fontSize: { xs: "1.3rem", sm: "1.5rem" },
          fontWeight: { xs: "300", sm: "500" },
          py: { xs: 2, sm: 3 },
        }}
      >
        {" "}
        At Kilian Holdings ,our mission is to provide exceptional paralegal
        services focused on meticulous documentation assistance. We are
        dedicated to supporting our clients with precision and expertise,
        ensuring their legal documentation needs are met with efficiency and
        reliability{" "}
      </Typography>

      <div className="grid grid-cols-2 gap-10 m-1">
        <div className="text-center m-5">
          <img className="w-[100%] mx-auto" src={img} alt="img" />
          <h1 className="text-xl text-gray-100 font-bold mt-4">Our Team</h1>
          <p className="text-gray-100 mt-2">
            At Kilian Holdings, our team is comprised of highly skilled and
            dedicated paralegals who are committed to providing exceptional
            service to our clients. With a diverse range of expertise and
            backgrounds in the legal field, our team is equipped to handle
            various documentation needs with precision and professionalism.
          </p>
        </div>

        <div className="text-center m-5">
          <img className="w-[100%] mx-auto" src={img} alt="img" />
          <h1 className="text-xl text-gray-100 font-bold mt-4">
            Personalized attention{" "}
          </h1>
          <p className="text-gray-100 mt-2">
            Since every legal case is different, we at Kilian Holdings take the
            time to hear your worries, comprehend your objectives, and create a
            customized plan of action that will help you get the greatest result
            possible. Throughout the whole process, from the first consultation
            to the case&apos;s settlement, you can rely on us to provide
            documentation support.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default AboutSection;
