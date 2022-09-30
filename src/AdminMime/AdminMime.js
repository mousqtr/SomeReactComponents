import React, { useState, useMemo, useRef, useCallback } from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AG_GRID_LOCALE_FR } from "./locale.fr";

const dateFormatter = (date) => {
  let dateAsString = date;
  let [dates, hours] = dateAsString.split("T");
  if (dates && hours) {
    let date = dates.split("-").reverse().join("/");
    let hour = hours.split(":").slice(0, 2).join(":");
    dateAsString = date + " " + hour;
  }
  return dateAsString;
};

const exampleData = [
  {
    date: "28-09-2022T10:33:10",
    user: "mousqtr",
    theme: "Action",
    word: "Chanter",
  },
  {
    date: "28-09-2022T10:33:10",
    user: "mousqtr",
    theme: "Action",
    word: "Danser",
  },
];

export default function AdminMime() {
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Id",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true,
      minWidth: 50,
      maxWidth: 50,
    },
    {
      headerName: "Date",
      field: "date",
      filter: "agDateColumnFilter",
      // minWidth: 170,
      // maxWidth: 170,
      cellRenderer: (params) => dateFormatter(params.data.date),
      filterParams: {
        comparator: (filterLocalDateAtMidnight, cellValue) => {
          const [dates, hours] = cellValue.split("T");
          if (!dates || !hours) {
            return 0;
          }
          const date = dates.split("-").reverse();
          const day = Number(date[2]);
          const month = Number(date[1]) - 1;
          const year = Number(date[0]);
          const cellDate = new Date(day, month, year);
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
          return 0;
        },
      },
    },
    {
      headerName: "Utilisateur",
      field: "user",
      filter: "agTextColumnFilter",
      // minWidth: 120,
      // maxWidth: 150,
    },
    {
      headerName: "Theme",
      field: "theme",
      filter: "agTextColumnFilter",
      // minWidth: 120,
      // maxWidth: 150,
    },
    {
      headerName: "Word",
      field: "word",
      filter: "agTextColumnFilter",
      // minWidth: 100,
      // maxWidth: 140,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 200,
      resizable: true,
      floatingFilter: true,
      sortable: true,
      suppressMenu: true,
    };
  }, []);

  const gridRef = useRef();

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const onSelectionChanged = () => {
    let rowNodes = gridRef.current.api.getSelectedNodes();
    if (rowNodes[0]) console.log(parseInt(rowNodes[0].id), rowNodes[0].data);
  };

  const onGridSizeChanged = useCallback((params) => {
    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const localeText = useMemo(() => {
    return AG_GRID_LOCALE_FR;
  }, []);

  return (
    <div id="settings" className="section-screen">
      <div className="section-central">
        <Breadcrumb paths={["Accueil", "Nous aider", "Votre avis"]} />
        <div className="special-section">
          <div className="special-section-title center">
            <h1>Gestion du MIME</h1>
          </div>

          <div className="special-section-content">
            <div
              className="ag-theme-balham ipmaton-grid"
              style={{ height: 400, width: "90%" }}
            >
              <AgGridReact
                ref={gridRef}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={exampleData}
                rowSelection="multiple"
                onFirstDataRendered={onFirstDataRendered}
                // onGridSizeChanged={onGridSizeChanged}
                onSelectionChanged={onSelectionChanged}
                // enableColResize={true}
                suppressCellFocus={true}
                // pagination={true}
                // paginationPageSize={20}
                // localeText={localeText}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
