import React from "react";

function Loggined() {

    const fake = {
        userId: "testId",
        userName: "testName"
    }

    return (
        <div className="loggined">
            <div>{fake.userId}</div>
            <div>{fake.userName}</div>
        </div>
    )
}

export default Loggined;
