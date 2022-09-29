import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./dashboard.route";

import Profile from "./profile.route";
import DefaultRoute from "./default.route";
import Explore from "./explore.route";

export const Home = () => {
    return <section className="">
        <Routes>
            <Route path="/" element={<DefaultRoute />}>
                <Route index element={<Dashboard />} />
                <Route path="create-account" element={<Profile />} />
                <Route path="sign-in" element={<Profile />} />
                <Route path="profile" element={<Profile />} />
                <Route path="articles" element={<Profile />} />
                <Route path="explore" element={<Explore />} />
                <Route path="bookmarks" element={<Profile />} />
                
            </Route>
        </Routes>
    </section>
}