import React from "react";
import {Link} from "react-router-dom";

export function HomeScreen() {
    return (
    <>
        <Link to={"/product"}>
  <button>To product</button>
        </Link>
    </>
    );
}


export default HomeScreen;
