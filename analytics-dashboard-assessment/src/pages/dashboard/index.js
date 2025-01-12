import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import OrdersTable from "./OrdersTable";
import IncomeAreaChart from "./IncomeAreaChart";
import MonthlyBarChart from "./MonthlyBarChart";
import ReportAreaChart from "./ReportAreaChart";
import SalesColumnChart from "./SalesColumnChart";
import MainCard from "components/MainCard";
import AnalyticEcommerce from "components/cards/statistics/AnalyticEcommerce";

import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import EVPopulationGrowth from "./EVPopulationGrowth";
import TopCitiesChart from "./TopCitiesChart";
import EVTypeDistribution from "./EVTypeDistribution";
import TopManufacturersChart from "./TopManufacturersChart";
import ElectricVehicleChart from "./ElectricVehicleChart";
import ElectricVehicleFunnelChart from "./ElectricVehicleChart";
import FunnelChart from "./FunnelChart";
import MixedChart from "./MixedChart";
import RangeAreaChart from "./RangeAreaChart";
import CandlestickChart from "./CandlestickChart";

const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};

const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];

const DashboardDefault = () => {
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");

  const transactions = [
    {
      id: "002434",
      time: "Today, 2:00 AM",
      amount: "+ $1,430",
      percentage: "78%",
      color: "success",
    },
    {
      id: "984947",
      time: "5 August, 1:45 PM",
      amount: "+ $302",
      percentage: "8%",
      color: "primary",
    },
    {
      id: "988784",
      time: "7 hours ago",
      amount: "+ $682",
      percentage: "16%",
      color: "error",
    },
  ];

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Vehicles Count"
          count="50,000"
          percentage={42.9}
          extra="35,000 vehicles"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Top Electric Vehicle Make TESLA"
          count="23,127 vehicles"
          percentage={92.7}
          extra="12,000 vehicles"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Average Electric Range"
          count=" 123.48 miles"
          percentage={12.0}
          isLoss
          color="warning"
          extra="110.25 miles"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Top County King"
          count="37,502 vehicle"
          percentage={33.9}
          isLoss
          color="warning"
          extra="28,000 vehicles"
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
      />

      <Grid item xs={12} md={6} lg={7}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">
              EV Population Growth by Model Year
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <EVPopulationGrowth />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">
              Distribution of Electric Vehicle Types
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <EVTypeDistribution />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Electric Vehicle Population</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">
              Top 10 Cities with the Highest Number of EVs
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <TopCitiesChart />
          <MixedChart />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Electric Vehicle Population</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <RangeAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">
              Top 10 Cities with the Highest Number of EVs
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          {/* <ReportAreaChart /> */}
          {/* <TopCitiesChart /> */}
          <CandlestickChart />
        </MainCard>
      </Grid>

      {/* row 5 */}
      <Grid item xs={12} md={7} lg={8}>
        <MainCard sx={{ mt: 1.75 }}>
          {/* <SalesColumnChart /> */}
          <TopManufacturersChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        {/* Transaction History */}
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              "& .MuiListItemButton-root": {
                py: 1.5,
                "& .MuiAvatar-root": avatarSX,
                "& .MuiListItemSecondaryAction-root": {
                  ...actionSX,
                  position: "relative",
                },
              },
            }}
          >
            {transactions.map((transaction) => (
              <ListItemButton divider key={transaction.id}>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      color: `${transaction.color}.main`,
                      bgcolor: `${transaction.color}.lighter`,
                    }}
                  >
                    {transaction.color === "success" && <GiftOutlined />}
                    {transaction.color === "primary" && <MessageOutlined />}
                    {transaction.color === "error" && <SettingOutlined />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      Order #{transaction.id}
                    </Typography>
                  }
                  secondary={transaction.time}
                />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="subtitle1" noWrap>
                      {transaction.amount}
                    </Typography>
                    <Typography variant="h6" color="secondary" noWrap>
                      {transaction.percentage}
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
            ))}
          </List>
        </MainCard>

        {/* Help & Support Chat */}
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical reply within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup
                  sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
                >
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "capitalize" }}
            >
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
