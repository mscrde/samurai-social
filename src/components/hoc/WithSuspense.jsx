import React, { Suspense } from "react"
import { Loader } from "../common/Loader/Loader"

const withSuspense = (Component) => {
    const wrapper = (props) => (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    )
    
    return wrapper;
}

export { withSuspense }
