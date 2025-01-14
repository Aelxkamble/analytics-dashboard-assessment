import { Button, CardMedia, Link, Stack, Typography } from "@mui/material";
import MainCard from "components/MainCard";
import avatar from "assets/images/logo/mlogoimage.webp";
import AnimateButton from "components/@extended/AnimateButton";

const NavCard = () => (
  <MainCard sx={{ bgcolor: "grey.50", m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
      <Stack alignItems="center">
        <Typography variant="h5">MAPUP.AI</Typography>
        <Typography variant="h6" color="secondary">
          Feature
        </Typography>
      </Stack>
      {/* <AnimateButton>
        <Button component={Link} target="" href="https://professor-prime.netlify.app" variant="contained" color="success" size="small">
          Pro
        </Button>
      </AnimateButton> */}
    </Stack>
  </MainCard>
);

export default NavCard;
