import {
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const verfy = localStorage.getItem("auth");
  const navigation = useNavigate();
  // useEffect(() => {
  //   if (!verfy) navigation("/login");
  // }, []);
  // const verfy = localStorage.getItem("auth");

  const [userData, setuserData] = useState([]);
  const [searchParam, setsearchParam] = useState("");
  const [filterStatus, setfilterStatus] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [loading, setloading] = useState(false);


  

  const handleSearch = async () => {
    setloading(true);
    if (searchParam) {
      setfilterData([]);
      setfilterStatus("");
    }
    let url = `https://api.thelionsden.co.in/dashboard/data-search?searchKeyword=${searchParam}`;
    // const res = await fetch(url, { method: "GET" });
    const { data } = await axios.get(url);

    if (data.s) setuserData(data.r);

    setloading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [searchParam]);

  useEffect(() => {
    const filterFuncion = () => {
      const f_Data = userData.filter((a) => {
        return a.payment_status === filterStatus;
      });

      setfilterData(f_Data);
    };

    filterFuncion();
  }, [filterStatus]);

  const renderData = filterData.length !== 0 ? filterData : userData;

  const col = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 60,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "order_id",
      headerName: "Order ID",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "actions",
      headerName: "Invoice",
      width: 100,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) =>
        params.row.payment_receipt ? (
          <Link
            target="_blank"
            to={`https://thelionsden.co.in/payment/${params.row.payment_receipt}`}
          >
            Download
          </Link>
        ) : (
          "No Data"
        ),
    },
    {
      field: "payment_status",
      headerName: "Payment Status",
      minWidth: 120,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 250,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "entname",
      headerName: "Entrepreneur Name",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "bname",
      headerName: "Brand Name",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "ename",
      headerName: "Entity Name",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "gst_no",
      headerName: "GST No",
      minWidth: 180,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "company_address",
      headerName: "Company Address",
      minWidth: 250,
      disableColumnMenu: true,
      sortable: false,
    },

    {
      field: "state",
      headerName: "State",
      minWidth: 120,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      minWidth: 120,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "website",
      headerName: "Website",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "brief_about_founders",
      headerName: "Brief About Founders",
      minWidth: 200,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "company_begin_time",
      headerName: "Company Begin Time",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "business_description",
      headerName: "Business Description",
      minWidth: 200,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "current_phase",
      headerName: "Current Phase",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "current_stage",
      headerName: "Current Stage",
      minWidth: 130,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "company_type",
      headerName: "Company Type",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "ip_rights",
      headerName: "Ip Rights",
      minWidth: 80,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "investment_seeking",
      headerName: "Investment Seeking",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "equity_exchange_percentage",
      headerName: "Equity Exchange",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "valuation_proposal",
      headerName: "Valuation Proposal",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "revenues",
      headerName: "Revenues",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "monthly_revenue",
      headerName: "Monthly Revenue",
      minWidth: 100,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "past_fund_raised",
      headerName: "Past Fund Raised",
      minWidth: 80,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "current_equity_structure",
      headerName: "Current Equity Structure",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "incubated",
      headerName: "Incubated",
      minWidth: 80,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "incubation_centre_name",
      headerName: "Incubation Centre Name",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "funding_tvshow",
      headerName: "Funding Tvshow",
      minWidth: 80,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "pitch_deck",
      headerName: "Pitch Deck",
      renderCell: (params) =>
        params.row.pitch_deck ? (
          <Link
            to={`https://api.thelionsden.co.in/upload/pitch_deck_pdf/${params.row.pitch_deck}`}
            target="_blank"
          >
            Download
          </Link>
        ) : (
          "No Data"
        ),
    },

    {
      field: "product_photo",
      headerName: "Product Photo",
      renderCell: (param) =>
        param.row.product_photo ? (
          <Link
            to={`https://api.thelionsden.co.in/upload/product_images/${param.row.product_photo}`}
            target="_blank"
          >
            Download
          </Link>
        ) : (
          "No Data"
        ),
    },

    {
      field: "link_of_video",
      headerName: "Link Of Video",
      minWidth: 150,
      disableColumnMenu: true,
      sortable: false,
    },
  ];

  return (
    <>
      <Box
        sx={{
          py: 2,
          px: 4,
          boxShadow: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src="./logo.png" alt="logo" />

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography> Filter By Payment </Typography>
          <Select
            value={filterStatus}
            onChange={(e) => setfilterStatus(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Success">Success</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="Aborted">Aborted</MenuItem>
          </Select>

          <TextField
            type="search"
            placeholder="Search...."
            label="Search"
            value={searchParam}
            onChange={(e) => setsearchParam(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              localStorage.clear();
              navigation("/login");
            }}
          >
            Log Out
          </Button>
        </Box>
      </Box>

      <Box sx={{ height: "80vh", px: 3, mt: 2 }}>
        <DataGrid
          getRowId={(params) => params.id}
          rows={renderData}
          columns={col}
          experimentalFeatures={{ clipboardPaste: true }}
          loading={loading}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              bgcolor: "#2a80fa",
              borderRadius: "8px",
              color: "#fff",
              fontWeight: "bold",
            },
          }}
          
        />
      </Box>
    </>
  );
};

export default Home;
