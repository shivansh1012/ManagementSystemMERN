import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiBaseURL } from "../../../Config";

import { DataGrid } from "@material-ui/data-grid";

const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'uid', headerName: 'UID' },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'course', headerName: 'Course', width: 200 },
    { field: 'center', headerName: "Center", width: 100 },
    { field: 'studentCount', headerName: 'StudentCount', width: 200 },
    { field: 'faculty', headerName: 'Faculty', width: 200 },
]

export default function BatchList() {
    const [batchList, setBatchList] = useState([]);

    useEffect(() => {
        axios.get(`${apiBaseURL}/service/batch`).then((res) => setBatchList(res.data.batchList));
    }, []);

    return (
        <div className="page">
            <h1 style={{ textAlign: "center" }}>Batches</h1>
            <div style={{ width: '100%', height: '100%' }}>
                <DataGrid
                    getRowId={(batchList) => batchList._id}
                    rows={batchList}
                    columns={columns}
                    pageSize={20}
                    disableColumnMenu
                />
            </div>
        </div>
    )
}
