import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback="Loading...">{element}</Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default AppRouter
