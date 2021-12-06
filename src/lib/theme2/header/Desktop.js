import {
    Grid,
    Box,
    Typography,
    TextField,
    IconButton,
    Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Theme2DesktopHeader = ({ store, Image, getDaysAgoFromTimestamp }) => {
    const classes = useStyles();
    return (
        <Grid
            className={classes.root}
            container
            direction={"column"}
            alignItems={"center"}
            p={3}
        >
            <Grid
                item
                container
                alignItems={"center"}
                justifyContent={"space-between"}
                wrap="nowrap"
            >
                <Grid item container wrap="nowrap" maxWidth={280}>
                    <Grid className={classes.cartUser} item p={1}>
                        <Grid
                            item
                            container
                            justifyContent={"center"}
                            wrap="nowrap"
                            gap={1}
                        >
                            <Grid
                                item
                                container
                                wrap="nowrap"
                                justifyContent={"flex-end"}
                                gap={0.5}
                            >
                                <Typography>حساب کاربری</Typography>
                                <PersonOutlinedIcon />
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid
                                item
                                container
                                wrap="nowrap"
                                justifyContent={"flex-start"}
                                gap={0.5}
                            >
                                <Typography>2سبد خرید</Typography>
                                <ShoppingCartOutlinedIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        maxWidth={60}
                    >
                        <IconButton>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item flexGrow={1} maxWidth={800}>
                    <TextField placeholder="جستجو" fullWidth />
                </Grid>
                <Grid item container wrap="nowrap" gap={2} maxWidth={220}>
                    <Grid
                        item
                        container
                        direction={"column"}
                        justifyContent={"center"}
                        gap={0.5}
                    >
                        <Grid item>
                            <Typography component={"h1"}>{store.storeData.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography component={"h3"}>
                                آخرین خرید :{" "}
                                {getDaysAgoFromTimestamp(store.storeData.ecommerce.last_buy)}{" "}
                                روز پیش
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box className={classes.logo} width={60} height={60} p={1}>
                            <Image
                                src={store.storeData.logo.image}
                                width={52}
                                height={52}
                                alt={store.storeData.name}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        "& h1": {
            fonsize: 24,
            fontWeight: "bold",
        },
        "& h3": {
            fontSize: 12,
        },
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: theme.shadows[1],
        borderRadius: theme.shape.borderRadius,
    },
    cartUser: {
        width: "auto",
        border: `1px solid ${theme.palette.border.main}`,
        borderRadius: theme.shape.borderRadius,
        "& p": {
            whiteSpace: "nowrap",
            fontSize: 14,
        },
    },
}));

export default Theme2DesktopHeader;
