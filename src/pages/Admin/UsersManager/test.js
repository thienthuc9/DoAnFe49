import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'

const columns = [
    { id: 'taiKhoan', label: 'Tài Khoản', minWidth: 170 },
    { id: 'matKhau', label: 'Mật Khẩu', minWidth: 100 },
    {
        id: 'hoTen',
        label: 'Họ Tên',
        minWidth: 170,
      
    },
    {
        id: 'soDt',
        label: 'Số Điện Thoại',
        minWidth: 170,
      
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
      
    },
    {
        id: 'maLoaiNguoiDung',
        label: 'Mã Loại Người Dùng',
        minWidth: 170,
      
    },
    {
        id: 'action',
        label: 'Chức Năng',
       render:()=>{
           return <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
       }
      
    }
 
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LayDanhSachNguoiDung())
        // setUser2({
        //     upDate:nguoiDungDcChon
        // })
    }, [])
    const { dsNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log(dsNguoiDung)
    const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
        createData('Canada', 'CA', 37602103, 9984670),
        createData('Australia', 'AU', 25475400, 7692024),
        createData('Germany', 'DE', 83019200, 357578),
        createData('Ireland', 'IE', 4857000, 70273),
        createData('Mexico', 'MX', 126577691, 1972550),
        createData('Japan', 'JP', 126317000, 377973),
        createData('France', 'FR', 67022000, 640679),
        createData('United Kingdom', 'GB', 67545757, 242495),
        createData('Russia', 'RU', 146793744, 17098246),
        createData('Nigeria', 'NG', 200962417, 923768),
        createData('Brazil', 'BR', 210147125, 8515767, ),
    ];

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined"  />
            </form>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dsNguoiDung.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dsNguoiDung) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={dsNguoiDung.code}>
                                    {columns.map((column) => {
                                        const value = dsNguoiDung[column.id];
                                        console.log(value)
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                            
                                        );

                                    })}

                                </TableRow>
                            );
                        })}
                      
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={dsNguoiDung.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>

    );
}