import React from "react";
import "./Breadcrumb.scss";


export default function Breadcrumb(props) {

    return (
        <div id="breadcrumb">
            <h4>
                {
                    props.paths.map((path, index) => {
                        if (index < props.paths.length - 1) {
                            return path + ' > ';
                        } else {
                            return path;
                        }
                    })
                }
            </h4>
        </div>
    );
}