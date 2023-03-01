import {  Suspense,lazy } from "react";

import { Routes, Route } from "react-router-dom";
import  Layout  from "./Layout/Layout";

import  MoVieDetalies  from "../pages/MovieDetails/MovieDetails";
import  Cast  from "../pages/Cast/Cast";
import  Reviews  from "../pages/Reviews/Reviews";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Movies from "pages/Movies/Movies";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
// const Movies = lazy(() => import("../pages/Movies/Movies"));
export const App = () => {
  return (
    
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:detailId" element={<MoVieDetalies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />}/>

          </Route>
        
            <Route path="*" element={<NotFoundPage />} />
           
      </Routes>

        </Suspense>
        
      </Layout>
       
      
    </>
       
   
  );
};